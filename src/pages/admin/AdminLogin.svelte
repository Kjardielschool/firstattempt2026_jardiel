<script>
  import { navigate } from "svelte-routing";
  let email = "";
  let password = "";
  let error = "";

  function handleLogin() {
    if (email && password) {
      navigate("/admin/dashboard");
    } else {
      error = "Please enter your admin credentials.";
    }
  }
</script>

<div class="page">
  <div class="left-panel">
    <img src="/images/Blue Knight Feed bg image ateneo de davao home dashboard.png" alt="AdDU" class="bg-img" />
    <div class="overlay"></div>
    <div class="left-content">
      <img src="/images/AdDu Alumni Logo.png" alt="AdDU" class="uni-logo" />
      <h1 class="uni-name">Ateneo de Davao<br/>University</h1>
      <p class="tagline">Alumni Administration Panel</p>
      <div class="admin-info">
        <div class="info-item">
          <span class="info-icon">🛡️</span>
          <div>
            <p class="info-title">Secure Access</p>
            <p class="info-sub">Restricted to authorized AdDU staff only</p>
          </div>
        </div>
        <div class="info-item">
          <span class="info-icon">📊</span>
          <div>
            <p class="info-title">Real-time Analytics</p>
            <p class="info-sub">Full visibility into alumni activity & events</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="right-panel">
    <div class="form-box">
      <div class="shield-badge">🛡️ ADMIN ACCESS</div>
      <h2>Administrator Login</h2>
      <p class="form-sub">Sign in with your AdDU admin credentials to access the administration panel.</p>

      {#if error}<div class="error-box">{error}</div>{/if}

      <div class="field">
        <label>Admin Email</label>
        <input type="email" placeholder="admin@addu.edu.ph" bind:value={email} on:keydown={(e) => e.key==='Enter' && handleLogin()} />
      </div>

      <div class="field">
        <label>Password</label>
        <input type="password" placeholder="••••••••" bind:value={password} on:keydown={(e) => e.key==='Enter' && handleLogin()} />
      </div>

      <button class="btn-admin-login" on:click={handleLogin}>Access Admin Panel →</button>

      <button class="back-alumni" on:click={() => navigate("/login")}>
        ← Back to Alumni Portal
      </button>
    </div>
  </div>
</div>

<style>
  .page { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .left-panel { flex: 1; position: relative; overflow: hidden; }
  .bg-img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
  .overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(0,30,60,0.8) 100%); }
  .left-content { position: relative; z-index: 2; padding: 60px 56px; display: flex; flex-direction: column; justify-content: center; height: 100%; }
  .uni-logo { width: 80px; height: 80px; object-fit: contain; background: white; padding: 6px; border-radius: 16px; margin-bottom: 28px; }
  .uni-name { font-family: 'Playfair Display', serif; color: white; font-size: 38px; font-weight: 700; line-height: 1.15; margin-bottom: 10px; }
  .tagline { color: #FFD700; font-size: 15px; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 44px; }
  .admin-info { display: flex; flex-direction: column; gap: 20px; }
  .info-item { display: flex; gap: 14px; align-items: flex-start; }
  .info-icon { font-size: 28px; background: rgba(255,255,255,0.08); padding: 10px; border-radius: 10px; }
  .info-title { color: white; font-size: 14px; font-weight: 700; margin-bottom: 2px; }
  .info-sub { color: rgba(255,255,255,0.5); font-size: 12px; }

  .right-panel { width: 480px; display: flex; align-items: center; justify-content: center; background: #fafafa; padding: 40px 32px; }
  .form-box { width: 100%; max-width: 380px; }
  .shield-badge { background: #1a1a2e; color: #FFD700; font-size: 12px; font-weight: 800; padding: 8px 16px; border-radius: 8px; display: inline-block; margin-bottom: 20px; letter-spacing: 1px; }
  h2 { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #1a1a2e; margin-bottom: 8px; }
  .form-sub { color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 28px; }
  .error-box { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; font-size: 13px; padding: 10px 14px; border-radius: 10px; margin-bottom: 16px; }
  .field { margin-bottom: 18px; }
  label { display: block; font-size: 13px; font-weight: 600; color: #444; margin-bottom: 7px; }
  input { width: 100%; padding: 13px 16px; border: 1.5px solid #e5e7eb; border-radius: 10px; font-size: 14px; font-family: inherit; outline: none; background: white; color: #1a1a2e; transition: border-color 0.2s; }
  input:focus { border-color: #1a1a2e; box-shadow: 0 0 0 3px rgba(26,26,46,0.08); }
  .btn-admin-login { width: 100%; padding: 15px; background: #1a1a2e; color: white; border: none; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: inherit; margin-bottom: 12px; transition: all 0.2s; }
  .btn-admin-login:hover { background: #2d2d4e; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,26,46,0.3); }
  .back-alumni { width: 100%; padding: 12px; background: white; color: #003366; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; }
  .back-alumni:hover { border-color: #003366; }
</style>
