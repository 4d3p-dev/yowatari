import { fail } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { RequestHandler } from "@sveltejs/kit";
import type { D1Database } from "@cloudflare/workers-types";

// export const load: PageServerLoad = async ({ platform }) => {
//   try {
//     // platformオブジェクトからD1インスタンスを取得
//     const db = platform?.env?.DB as D1Database;

//     if (!db) {
//       throw error(500, "Database is not available");
//     }

//     // D1からデータを取得する例
//     const { results } = await db.prepare("SELECT * FROM accounts").all();

//     return {
//       accounts: results,
//     };
//   } catch (err) {
//     console.error("Database error:", err);
//     throw error(500, "Failed to fetch data from database");
//   }
// };

export const actions = {
  default: async ({ request, platform }) => {
    const formData = await request.formData();
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();
    const newuserid = formData.get("newusername")?.toString();

    if (!username || !password || !newuserid) {
      return { success: false, message: "something wrong." };
    }

    try {
      const db = platform?.env?.DB as D1Database;

      if (!db) {
        throw error(500, "Database is not available");
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest("SHA-512", data);
      const hashedPassword = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      const { results: userResults } = await db
        .prepare(
          "SELECT * FROM passwords WHERE username = ? AND hashedpassword = ?"
        )
        .bind(username, hashedPassword)
        .all();

      if (userResults.length === 0) {
        return fail(400, {
          incorrect: true,
          message: "Invalid username or password",
        });
      }

      // In production, you should use proper password hashing instead of storing plain passwords
      await db
        .prepare("INSERT INTO account (before_id,time,new_id) VALUES (?, ?, ?)")
        .bind(username, new Date().getTime(), newuserid)
        .run();
      const webhook = {
        content: `New account: ${newuserid}`,
        embed: {
          title: "New account",
          fields: [
            {
              name: "user",
              value: username,
              inline: true,
            },
            {
              name: "newuserid",
              value: newuserid,
              inline: true,
            },
          ],
        },
      };
      return { success: true, message: "Account changed successfully" };
    } catch (err) {
      console.error("Failed to changed account:", err);
      return { success: false, message: "Failed to changed account" };
    }
  },
};
