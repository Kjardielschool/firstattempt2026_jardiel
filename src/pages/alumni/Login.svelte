<script>
  import { navigate } from "svelte-routing";
  let email = "";
  let password = "";
  let error = "";

  function handleLogin() {
    if (email && password) {
      navigate("/dashboard");
    } else {
      error = "Please enter your email and password.";
    }
  }
</script>

<div class="login-page">
  <div class="left-panel">
    <img src="/images/Blue Knight Feed bg image ateneo de davao home dashboard.png" alt="AdDU Campus" class="bg-img" />
    <div class="overlay"></div>
    <div class="left-content">
      <img src="/images/AdDu Alumni Logo.png" alt="AdDU Logo" class="uni-logo" />
      <h1 class="uni-name">Ateneo de Davao<br/>University</h1>
      <p class="uni-tagline">Fortes in Fide — Strong in Faith</p>
      <div class="stats-row">
        <div class="stat"><span class="stat-num">12,400+</span><span class="stat-label">Alumni</span></div>
        <div class="stat"><span class="stat-num">70+</span><span class="stat-label">Years</span></div>
        <div class="stat"><span class="stat-num">50+</span><span class="stat-label">Countries</span></div>
      </div>
    </div>
  </div>

  <div class="right-panel">
    <div class="form-box">
      <div class="form-header">
        <p class="form-eyebrow">ALUMNI PORTAL</p>
        <h2 class="form-title">Welcome Back,<br/><span>Atenean.</span></h2>
        <p class="form-sub">Sign in to access your alumni account and connect with the Blue Knight community.</p>
      </div>

      {#if error}<div class="error-box">{error}</div>{/if}

      <div class="field-group">
        <label>Email Address</label>
        <input type="email" placeholder="alum@addu.edu.ph" bind:value={email} on:keydown={(e) => e.key==='Enter' && handleLogin()} />
      </div>

      <div class="field-group">
        <div class="label-row">
          <label>Password</label>
          <a href="#forgot" class="forgot-link" on:click|preventDefault>Forgot Password?</a>
        </div>
        <input type="password" placeholder="••••••••" bind:value={password} on:keydown={(e) => e.key==='Enter' && handleLogin()} />
      </div>

      <button class="btn-signin" on:click={handleLogin}>Sign In to Portal</button>

      <p class="register-text">
        New to the portal? <span on:click={() => navigate("/verify")} role="button" tabindex="0">Register as Alumni ›</span>
      </p>

      <div class="divider"><span>or</span></div>

      <button class="btn-admin" on:click={() => navigate("/admin")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Admin Login
      </button>
    </div>
  </div>
</div>

<style>
  .login-page {
    display: flex;
    min-height: 100vh;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .left-panel {
    flex: 1;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  }

  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,51,102,0.88) 0%, rgba(0,30,60,0.75) 100%);
  }

  .left-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 60px 56px;
  }

  .uni-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
    background: white;
    padding: 6px;
    border-radius: 16px;
    margin-bottom: 28px;
  }

  .uni-name {
    font-family: 'Playfair Display', serif;
    color: white;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 12px;
  }

  .uni-tagline {
    color: #FFD700;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 48px;
  }

  .stats-row {
    display: flex;
    gap: 40px;
  }

  .stat {
    display: flex;
    flex-direction: column;
  }

  .stat-num {
    color: #FFD700;
    font-size: 28px;
    font-weight: 800;
    line-height: 1;
  }

  .stat-label {
    color: rgba(255,255,255,0.65);
    font-size: 12px;
    font-weight: 500;
    margin-top: 4px;
    letter-spacing: 0.5px;
  }

  .right-panel {
    width: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    padding: 40px 32px;
  }

  .form-box {
    width: 100%;
    max-width: 380px;
  }

  .form-eyebrow {
    color: #003366;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }

  .form-title {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    color: #1a1a2e;
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .form-title span {
    color: #003366;
  }

  .form-sub {
    color: #888;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .error-box {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #dc2626;
    font-size: 13px;
    padding: 10px 14px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .field-group {
    margin-bottom: 18px;
  }

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
  }

  label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #444;
    margin-bottom: 7px;
  }

  .forgot-link {
    font-size: 12px;
    color: #003366;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 0;
  }

  input {
    width: 100%;
    padding: 13px 16px;
    border: 1.5px solid #e5e7eb;
    border-radius: 10px;
    font-size: 14px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    outline: none;
    background: white;
    transition: border-color 0.2s;
    color: #1a1a2e;
  }

  input:focus {
    border-color: #003366;
    box-shadow: 0 0 0 3px rgba(0,51,102,0.08);
  }

  .btn-signin {
    width: 100%;
    padding: 15px;
    background: #003366;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
    margin-top: 8px;
    margin-bottom: 16px;
    transition: all 0.2s;
    letter-spacing: 0.3px;
  }

  .btn-signin:hover {
    background: #004080;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0,51,102,0.3);
  }

  .register-text {
    text-align: center;
    font-size: 13px;
    color: #777;
    margin-bottom: 20px;
  }

  .register-text span {
    color: #003366;
    font-weight: 700;
    cursor: pointer;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    color: #ccc;
    font-size: 13px;
  }

  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  .btn-admin {
    width: 100%;
    padding: 13px;
    background: white;
    color: #555;
    border: 1.5px solid #e5e7eb;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;
  }

  .btn-admin:hover {
    border-color: #003366;
    color: #003366;
    background: #f0f4f8;
  }
</style>
