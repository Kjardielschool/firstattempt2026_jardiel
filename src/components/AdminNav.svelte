<script>
  import { navigate } from "svelte-routing";
  export let active = "home";
</script>

<aside class="sidebar">
  <div class="brand">
    <img src="/images/AdDu Alumni Logo.png" alt="AdDU Logo" class="logo" />
    <div class="brand-text">
      <span class="brand-name">AdDU</span>
      <span class="brand-sub">Admin Center</span>
    </div>
  </div>

  <nav class="nav-links">
    <p class="nav-section-label">ADMIN PANEL</p>
    <button class:active={active === "home"} on:click={() => navigate("/admin/dashboard")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      <span>Command Center</span>
    </button>
    <button class:active={active === "users"} on:click={() => navigate("/admin/verification")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span>Verification Queue</span>
    </button>
    <button class:active={active === "events"} on:click={() => navigate("/admin/events")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span>Event Manager</span>
    </button>
    <button class:active={active === "reports"} on:click={() => navigate("/admin/reports")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      <span>Reports & Analytics</span>
    </button>
  </nav>

  <div class="sidebar-footer">
    <div class="user-pill">
      <div class="admin-badge">SA</div>
      <div class="user-info">
        <p class="user-name">Sarah Admin</p>
        <p class="user-batch">System Administrator</p>
      </div>
    </div>
    <button class="logout-btn" on:click={() => navigate("/admin")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      Sign Out
    </button>
  </div>
</aside>

<style>
  .sidebar {
    width: 260px; min-height: 100vh; background: #1a1a2e;
    display: flex; flex-direction: column; position: fixed; top: 0; left: 0; z-index: 100;
  }
  .brand { display: flex; align-items: center; gap: 12px; padding: 28px 24px 24px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .logo { width: 44px; height: 44px; object-fit: contain; border-radius: 10px; background: white; padding: 3px; }
  .brand-text { display: flex; flex-direction: column; }
  .brand-name { color: #FFD700; font-size: 18px; font-weight: 800; letter-spacing: 1px; line-height: 1.1; }
  .brand-sub { color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 500; }
  .nav-links { flex: 1; padding: 24px 16px; display: flex; flex-direction: column; gap: 4px; }
  .nav-section-label { color: rgba(255,255,255,0.3); font-size: 10px; font-weight: 700; letter-spacing: 1.5px; padding: 0 10px; margin-bottom: 10px; }
  button {
    display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 10px; border: none;
    background: transparent; color: rgba(255,255,255,0.6); font-size: 14px; font-weight: 500;
    font-family: 'Plus Jakarta Sans', sans-serif; cursor: pointer; text-align: left; transition: all 0.18s; width: 100%;
  }
  button:hover { background: rgba(255,255,255,0.06); color: white; }
  button.active { background: #003366; color: #FFD700; font-weight: 700; border-left: 3px solid #FFD700; }
  button svg { width: 18px; height: 18px; flex-shrink: 0; }
  .sidebar-footer { padding: 16px; border-top: 1px solid rgba(255,255,255,0.08); }
  .user-pill { display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 10px; background: rgba(255,255,255,0.05); margin-bottom: 10px; }
  .admin-badge { width: 38px; height: 38px; border-radius: 50%; background: #003366; border: 2px solid #FFD700; display: flex; align-items: center; justify-content: center; color: #FFD700; font-weight: 800; font-size: 13px; flex-shrink: 0; }
  .user-name { color: white; font-size: 13px; font-weight: 700; }
  .user-batch { color: rgba(255,255,255,0.4); font-size: 11px; }
  .logout-btn { color: rgba(255,255,255,0.4) !important; font-size: 13px !important; }
  .logout-btn:hover { color: #ff6b6b !important; background: rgba(255,107,107,0.08) !important; }
</style>
