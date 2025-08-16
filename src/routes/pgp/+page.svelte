<script lang="ts">

  const pgpKeys = [
    {
      description: '認証用マスターキー',
      fingerprint: '2065A33C34D0781FDF191D732A3BB857F6A3FED5',
      email: 'security@ywtr.org',
      validUntil: 'None',
      url: './pgp-keys/master/public-2065A33C34D0781FDF191D732A3BB857F6A3FED5.asc'
    },
    {
      description: 'セキュリティ部門暗号化PGP鍵',
      fingerprint: '0C9E1B5F4B0342EB6A3D65E2021A082341113437',
      email: 'security@ywtr.org',
      validUntil: '2026-04-02',
      url: './pgp-keys/security/public-0C9E1B5F4B0342EB6A3D65E2021A082341113437.asc'
    },
    {
      description: 'セキュリティ部門署名PGP鍵',
      fingerprint: 'FAB215238285FAA2D9CA98BE25B1B4F888B4662E',
      email: 'security@ywtr.org',
      validUntil: '2026-04-02',
      url: '/pgp-keys/security/public-FAB215238285FAA2D9CA98BE25B1B4F888B4662E.asc'
    }
  ];
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-2xl font-bold mb-6">夜渡り内PGP鍵情報</h1>

  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-4">PGP鍵について</h2>
    <p class="mb-4">
      PGP（Pretty Good Privacy）は、電子メールやファイルの暗号化・署名に使用される暗号化システムです。
      脆弱性のやり取りには必ずPGP暗号化を使用してください。
    </p>
    <p>
      全てのPGP鍵は、夜渡りのセキュリティ部門が管理しています。
      認証用マスターキーは、夜渡りの全てのPGP鍵の証明を行うために使用されます。
    </p>
  </section>

  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-4">夜渡り内で使用するPGP鍵一覧</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2">説明</th>
            <th class="border border-gray-300 px-4 py-2">フィンガープリント</th>
            <th class="border border-gray-300 px-4 py-2">メールアドレス</th>
            <th class="border border-gray-300 px-4 py-2">有効期限</th>
          </tr>
        </thead>
        <tbody>
          {#each pgpKeys as key}
            <tr>
              <td class="border border-gray-300 px-4 py-2">{key.description}</td>
              <td class="border border-gray-300 px-4 py-2"><a href={key.url}>{key.fingerprint}</a></td>
              <td class="border border-gray-300 px-4 py-2">{key.email}</td>
              <td class="border border-gray-300 px-4 py-2">{key.validUntil}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>
</div>
