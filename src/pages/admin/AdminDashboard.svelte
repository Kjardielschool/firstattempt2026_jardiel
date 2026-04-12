<script>
  import { navigate } from "svelte-routing";
  import AdminNav from "../../components/AdminNav.svelte";

  const stats = [
    { label: "Total Active Alumni", value: "12,432", change: "+248 this month", trend: "up", icon: "👥", color: "#003366" },
    { label: "Pending Verifications", value: "48", change: "+12% from last week", trend: "up", icon: "✅", color: "#d97706" },
    { label: "Upcoming Events", value: "6", change: "Next: Oct 24", trend: "neutral", icon: "📅", color: "#0d9488" },
    { label: "Total Event Revenue", value: "₱42.3k", change: "YTD projection", trend: "up", icon: "💰", color: "#7c3aed" },
  ];

  const actions = [
    { label: "Verify Alumni", icon: "✅", color: "#003366", route: "/admin/verification" },
    { label: "Create Event", icon: "📅", color: "#c0392b", route: "/admin/events" },
    { label: "Send Notification", icon: "📢", color: "#d97706", route: "/admin/dashboard" },
    { label: "Manage Users", icon: "👥", color: "#0d9488", route: "/admin/verification" },
    { label: "Generate Report", icon: "📊", color: "#7c3aed", route: "/admin/reports" },
    { label: "System Settings", icon: "⚙️", color: "#475569", route: "/admin/dashboard" },
  ];

  const logs = [
    { icon: "👤", title: "Alex Knight applied for alumni verification", sub: "Class of 2019 · BS Engineering · 5 documents uploaded", time: "2m ago", type: "user" },
    { icon: "📅", title: "New Event Created: Alumni Tech Summit 2024", sub: "Created by admin · 200 capacity · Nov 15, 2024", time: "1h ago", type: "event" },
    { icon: "⚠️", title: "System Alert: High Traffic on Registration", sub: "Registration page load time exceeded threshold", time: "3h ago", type: "alert" },
    { icon: "✅", title: "Maria Santos — Verification Approved", sub: "BS IT '20 · Verified by Admin Sarah", time: "5h ago", type: "verify" },
    { icon: "📧", title: "Batch email sent to 1,248 alumni", sub: "Re: Homecoming Weekend 2024 Registration", time: "1d ago", type: "email" },
  ];
</script>

<div class="layout">
  <AdminNav active="home" />
  <main class="main">
    <div class="topbar">
      <div>
        <p class="eyebrow">ADMIN COMMAND CENTER</p>
        <h1>Welcome back, Sarah <span class="status-pill">● System Operational</span></h1>
        <p class="sub">Ateneo de Davao University — Alumni Administration Panel</p>
      </div>
      <div class="topbar-right">
        <button class="icon-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span class="notif-dot"></span>
        </button>
        <div class="admin-avatar">SA</div>
      </div>
    </div>

    <div class="page-content">
      <!-- Stats Row -->
      <div class="stats-grid">
        {#each stats as stat}
          <div class="stat-card" style="--c:{stat.color}">
            <div class="stat-icon-wrap" style="background:{stat.color}15">{stat.icon}</div>
            <div class="stat-body">
              <p class="stat-label">{stat.label}</p>
              <p class="stat-value">{stat.value}</p>
              <p class="stat-change">{stat.change}</p>
            </div>
            <div class="stat-bar" style="background:{stat.color}"></div>
          </div>
        {/each}
      </div>

      <div class="two-col">
        <!-- Admin Actions -->
        <div class="card">
          <div class="card-hdr">
            <h3>Admin Actions</h3>
            <button class="customize-btn">Customize</button>
          </div>
          <div class="actions-grid">
            {#each actions as action}
              <button class="action-card" style="background:{action.color}" on:click={() => navigate(action.route)}>
                <span class="action-icon">{action.icon}</span>
                <span class="action-label">{action.label}</span>
              </button>
            {/each}
          </div>
        </div>

        <!-- Recent Logs -->
        <div class="card">
          <div class="card-hdr">
            <h3>Recent Activity Logs</h3>
            <button class="view-all-btn" on:click={() => navigate("/admin/reports")}>View All →</button>
          </div>
          <div class="log-list">
            {#each logs as log}
              <div class="log-row" class:alert={log.type === 'alert'}>
                <div class="log-icon-wrap" class:alert-bg={log.type === 'alert'} class:verify-bg={log.type === 'verify'}>{log.icon}</div>
                <div class="log-info">
                  <p class="log-title">{log.title}</p>
                  <p class="log-sub">{log.sub}</p>
                </div>
                <span class="log-time">{log.time}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .main { margin-left: 260px; flex: 1; background: #f0f4f8; }

  .topbar { background: #1a1a2e; padding: 28px 40px; display: flex; justify-content: space-between; align-items: flex-start; }
  .eyebrow { color: rgba(255,255,255,0.4); font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-bottom: 4px; }
  h1 { color: white; font-size: 24px; font-weight: 800; margin-bottom: 6px; display: flex; align-items: center; gap: 12px; }
  .status-pill { background: rgba(34,197,94,0.15); color: #22c55e; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; vertical-align: middle; }
  .sub { color: rgba(255,255,255,0.5); font-size: 13px; }
  .topbar-right { display: flex; align-items: center; gap: 14px; }
  .icon-btn { background: rgba(255,255,255,0.08); border: none; border-radius: 10px; padding: 10px; cursor: pointer; color: white; display: flex; align-items: center; justify-content: center; position: relative; }
  .notif-dot { position: absolute; top: 8px; right: 8px; width: 8px; height: 8px; background: #FFD700; border-radius: 50%; }
  .admin-avatar { width: 44px; height: 44px; border-radius: 50%; background: #003366; border: 2px solid #FFD700; display: flex; align-items: center; justify-content: center; color: #FFD700; font-weight: 900; font-size: 14px; }

  .page-content { padding: 32px 40px; }

  .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
  .stat-card { background: white; border-radius: 16px; padding: 22px; display: flex; gap: 16px; align-items: flex-start; box-shadow: 0 1px 4px rgba(0,0,0,0.05); position: relative; overflow: hidden; }
  .stat-bar { position: absolute; top: 0; left: 0; width: 4px; height: 100%; }
  .stat-icon-wrap { font-size: 24px; padding: 12px; border-radius: 12px; flex-shrink: 0; }
  .stat-body { flex: 1; }
  .stat-label { font-size: 12px; color: #888; font-weight: 600; margin-bottom: 4px; }
  .stat-value { font-size: 28px; font-weight: 900; color: #1a1a2e; line-height: 1; margin-bottom: 4px; }
  .stat-change { font-size: 12px; color: #22c55e; font-weight: 600; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .card-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  h3 { font-size: 18px; font-weight: 800; color: #1a1a2e; }
  .customize-btn, .view-all-btn { background: none; border: none; color: #003366; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; }

  .actions-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .action-card { border: none; border-radius: 14px; height: 90px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end; padding: 14px; cursor: pointer; font-family: inherit; transition: transform 0.2s, opacity 0.2s; }
  .action-card:hover { opacity: 0.88; transform: translateY(-1px); }
  .action-icon { font-size: 22px; margin-bottom: 6px; }
  .action-label { color: white; font-size: 12px; font-weight: 700; }

  .log-list { display: flex; flex-direction: column; gap: 0; }
  .log-row { display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-bottom: 1px solid #f0f4f8; }
  .log-row:last-child { border-bottom: none; }
  .log-icon-wrap { font-size: 18px; background: #f0f4f8; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .log-icon-wrap.alert-bg { background: #fef2f2; }
  .log-icon-wrap.verify-bg { background: #ecfdf5; }
  .log-info { flex: 1; }
  .log-title { font-size: 13px; font-weight: 700; color: #1a1a2e; margin-bottom: 2px; }
  .log-sub { font-size: 12px; color: #888; }
  .log-time { font-size: 11px; color: #bbb; white-space: nowrap; flex-shrink: 0; }
</style>
