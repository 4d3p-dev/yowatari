/// <reference types="@cloudflare/workers-types" />

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      // ローカル変数の定義
    }
    interface PageData {
      // ページデータの定義
    }
    interface Platform {
      env?: {
        DB: D1Database;
        // 他のCloudflareバインディングもここで定義
      };
      context?: ExecutionContext;
      caches?: CacheStorage & { default: Cache };
    }
  }
}

export {};
