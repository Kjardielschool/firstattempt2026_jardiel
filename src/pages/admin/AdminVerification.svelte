<script>
  import { navigate } from "svelte-routing";
  import AdminNav from "../../components/AdminNav.svelte";

  let activeTab = "pending";

  const applicants = [
    { name: "Juan Dela Cruz", batch: "BS Engineering '19", email: "juan@gmail.com", submitted: "Oct 10, 2024", docs: 3, status: "pending", pic: null },
    { name: "Ana Lim", batch: "BS Nursing '21", email: "ana.lim@gmail.com", submitted: "Oct 9, 2024", docs: 2, status: "pending", pic: null },
    { name: "Rafael Gomez", batch: "MBA '20", email: "rafael@biz.com", submitted: "Oct 8, 2024", docs: 4, status: "pending", pic: null },
    { name: "Maria Santos", batch: "BS IT '20", email: "maria@google.com", submitted: "Oct 6, 2024", docs: 3, status: "approved", pic: "/images/Maria Santos.png" },
    { name: "Michael Chen", batch: "BS Business '18", email: "mchen@grab.com", submitted: "Oct 5, 2024", docs: 2, status: "approved", pic: "/images/Michael Chen.png" },
    { name: "James Lee", batch: "JD Law '17", email: "jlee@cruzlaw.com", submitted: "Oct 4, 2024", docs: 5, status: "approved", pic: "/images/James Lee.png" },
    { name: "Roberto Cruz", batch: "BS Architecture '16", email: "rcruz@studio.com", submitted: "Oct 3, 2024", docs: 1, status: "rejected", pic: null },
  ];

  const tabs = [
    { key: "pending", label: "Pending", count: applicants.filter(a => a.status === "pending").length },
    { key: "approved", label: "Approved", count: applicants.filter(a => a.status === "approved").length },
    { key: "rejected", label: "Rejected", count: applicants.filter(a => a.status === "rejected").length },
  ];

  $: filtered = applicants.filter(a => a.status === activeTab);

  function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  }
</script>

<div class="layout">
  <AdminNav active="users" />
  <main class="main">
    <div class="topbar">
      <div>
        <p class="eyebrow">ALUMNI MANAGEMENT</p>
        <h1>Verification Queue</h1>
        <p class="sub">Review and process alumni verification applications</p>
      </div>
      <div class="topbar-stats">
        <div class="mini-stat">
          <span class="ms-num">{applicants.filter(a=>a.status==='pending').length}</span>
          <span class="ms-label">Pending</span>
        </div>
        <div class="mini-stat approved">
          <span class="ms-num">{applicants.filter(a=>a.status==='approved').length}</span>
          <span class="ms-label">Approved</span>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="tabs-bar">
        {#each tabs as tab}
          <button class="tab" class:active={activeTab === tab.key} on:click={() => activeTab = tab.key}>
            {tab.label}
            <span class="tab-badge" class:pending={tab.key==='pending'} class:approved={tab.key==='approved'} class:rejected={tab.key==='rejected'}>
              {tab.count}
            </span>
          </button>
        {/each}
      </div>

      <div class="table-card">
        <table class="table">
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Batch / Course</th>
              <th>Email</th>
              <th>Submitted</th>
              <th>Documents</th>
              <th>Status</th>
              {#if activeTab === 'pending'}<th>Actions</th>{/if}
            </tr>
          </thead>
          <tbody>
            {#each filtered as app}
              <tr>
                <td>
                  <div class="applicant-cell">
                    {#if app.pic}
                      <img src={app.pic} alt={app.name} class="app-pic" />
                    {:else}
                      <div class="app-initials">{getInitials(app.name)}</div>
                    {/if}
                    <span class="app-name">{app.name}</span>
                  </div>
                </td>
                <td class="batch-cell">{app.batch}</td>
                <td class="email-cell">{app.email}</td>
                <td class="date-cell">{app.submitted}</td>
                <td>
                  <span class="doc-badge">📎 {app.docs} files</span>
                </td>
                <td>
                  <span class="status-badge {app.status}">
                    {app.status === 'pending' ? '⏳ Pending' : app.status === 'approved' ? '✓ Approved' : '✗ Rejected'}
                  </span>
                </td>
                {#if activeTab === 'pending'}
                  <td>
                    <div class="action-btns">
                      <button class="btn-approve">✓ Approve</button>
                      <button class="btn-reject">✗ Reject</button>
                      <button class="btn-view">View</button>
                    </div>
                  </td>
                {/if}
              </tr>
            {/each}
            {#if filtered.length === 0}
              <tr><td colspan="7" class="empty-row">No applications in this category.</td></tr>
            {/if}
          </tbody>
        </table>
      </div>
    </div>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .main { margin-left: 260px; flex: 1; background: #f0f4f8; }

  .topbar { background: #1a1a2e; padding: 28px 40px; display: flex; justify-content: space-between; align-items: flex-start; }
  .eyebrow { color: rgba(255,255,255,0.4); font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-bottom: 4px; }
  h1 { color: white; font-size: 28px; font-weight: 800; margin-bottom: 6px; }
  .sub { color: rgba(255,255,255,0.5); font-size: 14px; }
  .topbar-stats { display: flex; gap: 16px; align-items: center; }
  .mini-stat { background: rgba(255,255,255,0.08); border-radius: 12px; padding: 14px 20px; text-align: center; }
  .mini-stat.approved { background: rgba(34,197,94,0.1); }
  .ms-num { display: block; color: white; font-size: 24px; font-weight: 900; }
  .ms-label { color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 600; }
  .mini-stat.approved .ms-label { color: #86efac; }

  .page-content { padding: 32px 40px; }

  .tabs-bar { display: flex; gap: 4px; margin-bottom: 20px; background: white; border-radius: 12px; padding: 6px; width: fit-content; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
  .tab { padding: 10px 22px; border-radius: 8px; border: none; background: transparent; color: #777; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; display: flex; align-items: center; gap: 8px; transition: all 0.18s; }
  .tab.active { background: #003366; color: white; }
  .tab-badge { font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 20px; }
  .tab-badge.pending { background: #fff9e6; color: #d97706; }
  .tab-badge.approved { background: #ecfdf5; color: #059669; }
  .tab-badge.rejected { background: #fef2f2; color: #dc2626; }
  .tab.active .tab-badge { background: rgba(255,255,255,0.2); color: white; }

  .table-card { background: white; border-radius: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); overflow: hidden; }
  .table { width: 100%; border-collapse: collapse; }
  thead { background: #f8fafc; }
  th { padding: 14px 20px; text-align: left; font-size: 12px; font-weight: 700; color: #888; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid #f0f4f8; }
  td { padding: 16px 20px; border-bottom: 1px solid #f8fafc; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fafbfc; }

  .applicant-cell { display: flex; align-items: center; gap: 10px; }
  .app-pic { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb; }
  .app-initials { width: 38px; height: 38px; border-radius: 50%; background: #e8eaf6; color: #003366; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; flex-shrink: 0; }
  .app-name { font-size: 14px; font-weight: 700; color: #1a1a2e; }
  .batch-cell { font-size: 13px; color: #003366; font-weight: 600; }
  .email-cell { font-size: 13px; color: #777; }
  .date-cell { font-size: 13px; color: #aaa; }
  .doc-badge { background: #f0f4f8; color: #555; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 8px; }

  .status-badge { font-size: 12px; font-weight: 700; padding: 5px 12px; border-radius: 20px; }
  .status-badge.pending { background: #fff9e6; color: #d97706; }
  .status-badge.approved { background: #ecfdf5; color: #059669; }
  .status-badge.rejected { background: #fef2f2; color: #dc2626; }

  .action-btns { display: flex; gap: 6px; }
  .btn-approve { background: #ecfdf5; color: #059669; border: none; border-radius: 7px; padding: 7px 12px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .btn-reject { background: #fef2f2; color: #dc2626; border: none; border-radius: 7px; padding: 7px 12px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .btn-view { background: #e8eaf6; color: #003366; border: none; border-radius: 7px; padding: 7px 12px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .empty-row { text-align: center; color: #aaa; padding: 40px; font-size: 14px; }
</style>
