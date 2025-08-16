<script lang="ts">
  import { enhance } from '$app/forms';
  
  // フォーム送信後のレスポンスを保存する変数
  export let form;
  
  let submitting = false;
  let username = '';
  let password = '';
  let newUsername = '';
</script>

<div class="container">
  <h1>管理者アカウントの変更届</h1>
  
  {#if form?.success}
    <div class="alert success">
      <p>{form.message}</p>
    </div>
  {:else if form?.message}
    <div class="alert error">
      <p>{form.message}</p>
    </div>
  {/if}
  
  <form method="POST" use:enhance={() => {
    submitting = true;
    
    return async ({ result }) => {
      submitting = false;
      
      if (result.type === 'success') {
        // フォームをリセット
        username = '';
        password = '';
        newUsername = '';
      }
    };
  }}>
    <div class="form-group">
      <label for="username">ユーザー名</label>
      <input 
        type="text" 
        id="username" 
        name="username" 
        bind:value={username} 
        required 
        autocomplete="off"
      />
    </div>
    
    <div class="form-group">
      <label for="password">パスワード</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        bind:value={password} 
        required
      />
    </div>
    
    <div class="form-group">
      <label for="newusername">新規ユーザーID</label>
      <input 
        type="text" 
        id="newusername" 
        name="newusername" 
        bind:value={newUsername} 
        required 
        autocomplete="off"
      />
    </div>
    
    <button type="submit" disabled={submitting}>
      {submitting ? '処理中...' : 'アカウント作成'}
    </button>
  </form>
</div>

<style>
  .container {
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  h1 {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #4A5568;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  button:hover:not([disabled]) {
    background-color: #2D3748;
  }
  
  button[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .alert {
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .success {
    background-color: #C6F6D5;
    color: #2F855A;
  }
  
  .error {
    background-color: #FED7D7;
    color: #C53030;
  }
</style>
