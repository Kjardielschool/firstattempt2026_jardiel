<script>
  import { navigate } from "svelte-routing";
  export let active = "home";
</script>

<aside class="sidebar">
  <div class="brand" on:click={() => navigate("/dashboard")} role="button" tabindex="0">
    <img src="/images/AdDu Alumni Logo.png" alt="AdDU Logo" class="logo" />
    <div class="brand-text">
      <span class="brand-name">AdDU</span>
      <span class="brand-sub">Alumni Portal</span>
    </div>
  </div>

  <nav class="nav-links">
    <p class="nav-section-label">MAIN MENU</p>
    <button class:active={active === "home"} on:click={() => navigate("/dashboard")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span>Home Dashboard</span>
    </button>
    <button class:active={active === "events"} on:click={() => navigate("/events")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span>Events</span>
    </button>
    <button class:active={active === "directory"} on:click={() => navigate("/directory")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      <span>Alumni Directory</span>
    </button>
    <button class:active={active === "mentorship"} on:click={() => navigate("/mentorship")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      <span>Mentorship Hub</span>
    </button>
    <button class:active={active === "profile"} on:click={() => navigate("/profile")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <span>My Profile</span>
    </button>
  </nav>

  <div class="sidebar-footer">
    <div class="user-pill">
      <img src="/images/Alex Rivera Profile Picture.png" alt="Alex Rivera" class="user-pic" />
      <div class="user-info">
        <p class="user-name">Alex Rivera</p>
        <p class="user-batch">BS Psychology '22</p>
      </div>
    </div>
    <button class="logout-btn" on:click={() => navigate("/login")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      Sign Out
    </button>
  </div>
</aside>

<style>
  .sidebar {
    width: 260px;
    min-height: 100vh;
    background: #003366;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; left: 0;
    z-index: 100;
    flex-shrink: 0;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 28px 24px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    cursor: pointer;
  }
  .logo {
    width: 44px;
    height: 44px;
    object-fit: contain;
    border-radius: 10px;
    background: white;
    padding: 3px;
  }
  .brand-text { display: flex; flex-direction: column; }
  .brand-name { color: #FFD700; font-size: 18px; font-weight: 800; letter-spacing: 1px; line-height: 1.1; }
  .brand-sub { color: rgba(255,255,255,0.6); font-size: 11px; font-weight: 500; letter-spacing: 0.5px; }
  .nav-links { flex: 1; padding: 24px 16px; display: flex; flex-direction: column; gap: 4px; }
  .nav-section-label { color: rgba(255,255,255,0.35); font-size: 10px; font-weight: 700; letter-spacing: 1.5px; padding: 0 10px; margin-bottom: 10px; }
  button {
    display: flex; align-items: center; gap: 12px;
    padding: 12px 14px; border-radius: 10px; border: none;
    background: transparent; color: rgba(255,255,255,0.65);
    font-size: 14px; font-weight: 500; font-family: 'Plus Jakarta Sans', sans-serif;
    cursor: pointer; text-align: left; transition: all 0.18s ease; width: 100%;
  }
  button:hover { background: rgba(255,255,255,0.08); color: white; }
  button.active { background: #FFD700; color: #003366; font-weight: 700; }
  button svg { width: 18px; height: 18px; flex-shrink: 0; }
  .sidebar-footer { padding: 16px; border-top: 1px solid rgba(255,255,255,0.1); }
  .user-pill { display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 10px; background: rgba(255,255,255,0.08); margin-bottom: 10px; }
  .user-pic { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 2px solid #FFD700; }
  .user-name { color: white; font-size: 13px; font-weight: 700; }
  .user-batch { color: rgba(255,255,255,0.5); font-size: 11px; }
  .logout-btn { color: rgba(255,255,255,0.5) !important; font-size: 13px !important; }
  .logout-btn:hover { color: #ff6b6b !important; background: rgba(255,107,107,0.1) !important; }
</style>
