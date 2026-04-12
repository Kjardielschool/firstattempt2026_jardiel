<script>
  import { navigate } from "svelte-routing";
  import AlumniNav from "../../components/AlumniNav.svelte";

  const events = [
    { title: "Annual AdDU Gala 2024", time: "7:00 PM – 11:00 PM", date: "OCT 24", venue: "Grand Hall", attendees: 142, img: "/images/Annual AdDU Gala Dashboard Image.png" },
    { title: "Blue Knight Tech Mixer", time: "5:30 PM", date: "NOV 3", venue: "Innovation Hub", attendees: 58, img: "/images/Blue Knight Tech Mixer Dashboard Image.png" }
  ];

  const feed = [
    { name: "Ateneo de Davao University", handle: "Official Page", time: "2 hours ago", text: "We are proud to announce that AdDU has been ranked #1 in Innovation for the third consecutive year! 🎉 #AdDU #BlueKnights", likes: 245, comments: 42, verified: true, pic: "/images/AdDu Alumni Logo.png", isInstitution: true },
    { name: "Alex Rivera", handle: "BS Psychology '22 • HR Manager", time: "5 hours ago", text: "Looking for mentorship opportunities in the HR and Organizational Psychology space here in Davao. Anyone available for a quick coffee chat? ☕ #Networking", likes: 12, comments: 8, verified: true, pic: "/images/Alex Rivera Profile Picture.png" }
  ];

  const quickActions = [
    { label: "Document Request", icon: "📄", color: "#003366" },
    { label: "Networking & Events", icon: "🤝", color: "#0a4f9e", route: "/events" },
    { label: "Donation", icon: "❤️", color: "#c0392b" },
    { label: "Job Posting", icon: "💼", color: "#117a65" }
  ];

  function handleAction(action) {
    if (action.route) navigate(action.route);
  }
</script>

<div class="layout">
  <AlumniNav active="home" />
  <main class="main">
    <div class="topbar">
      <div>
        <p class="topbar-eyebrow">WELCOME BACK</p>
        <h1 class="topbar-title">Alex Rivera <span class="verified-badge">✓ Verified</span></h1>
        <p class="topbar-sub">BS Psychology '22 · HR Manager, Aboitiz Power · Davao City</p>
      </div>
      <div class="topbar-actions">
        <button class="icon-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span class="notif-dot"></span>
        </button>
        <img src="/images/Alex Rivera Profile Picture.png" alt="Profile" class="header-avatar" on:click={() => navigate("/profile")} role="button" tabindex="0" />
      </div>
    </div>

    <div class="content-grid">
      <!-- Left column -->
      <div class="left-col">
        <section class="section">
          <div class="section-hdr">
            <h2>Featured Events</h2>
            <button class="see-all-btn" on:click={() => navigate("/events")}>See All Events →</button>
          </div>
          <div class="events-grid">
            {#each events as event}
              <div class="event-card" on:click={() => navigate("/events")} role="button" tabindex="0">
                <div class="event-img-wrap">
                  <img src={event.img} alt={event.title} class="event-img" />
                  <div class="event-img-overlay"></div>
                  <div class="event-date-badge">
                    <span class="badge-month">{event.date.split(' ')[0]}</span>
                    <span class="badge-day">{event.date.split(' ')[1]}</span>
                  </div>
                </div>
                <div class="event-body">
                  <h3>{event.title}</h3>
                  <p>🕐 {event.time}</p>
                  <p>📍 {event.venue}</p>
                  <div class="event-footer">
                    <span class="att-count">👥 +{event.attendees} attending</span>
                    <button class="book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </section>

        <section class="section">
          <h2 class="section-label">Blue Knight Feed</h2>
          <div class="feed-list">
            {#each feed as post}
              <div class="post-card">
                <div class="post-left">
                  <img src={post.pic} alt={post.name} class="post-avatar" class:institution={post.isInstitution} />
                </div>
                <div class="post-right">
                  <div class="post-meta">
                    <span class="post-name">{post.name}</span>
                    {#if post.verified}<span class="check">✓</span>{/if}
                    <span class="post-handle">{post.handle}</span>
                    <span class="dot">·</span>
                    <span class="post-time">{post.time}</span>
                  </div>
                  <p class="post-text">{post.text}</p>
                  <div class="post-actions">
                    <button>👍 {post.likes}</button>
                    <button>💬 {post.comments}</button>
                    <button>↗ Share</button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </section>
      </div>

      <!-- Right column -->
      <div class="right-col">
        <section class="section">
          <h2>Quick Actions</h2>
          <div class="quick-grid">
            {#each quickActions as action}
              <button class="quick-btn" style="--c:{action.color}" on:click={() => handleAction(action)}>
                <span class="quick-icon">{action.icon}</span>
                <span>{action.label}</span>
              </button>
            {/each}
          </div>
        </section>

        <section class="section notif-section">
          <div class="notif-card">
            <div class="notif-img-wrap">
              <img src="/images/All-in-One Event Manager Image bg.png" alt="Event" class="notif-img" />
              <div class="notif-overlay"></div>
              <p class="notif-label">📅 UPCOMING</p>
            </div>
            <div class="notif-body">
              <p class="notif-title">Homecoming Registration Closing Soon</p>
              <p class="notif-sub">Grand Alumni Homecoming weekend — Limited spots remaining!</p>
              <button class="register-now-btn" on:click={() => navigate("/events")}>Register Now →</button>
            </div>
          </div>
        </section>

        <section class="section">
          <h2>Upcoming Calendar</h2>
          <div class="cal-list">
            <div class="cal-item">
              <div class="cal-date-box"><span class="cal-m">NOV</span><span class="cal-d">05</span></div>
              <div class="cal-info"><p class="cal-title">AdDU Alumni Gala 2024</p><p class="cal-venue">Online (Zoom) · 2:00 PM</p></div>
            </div>
            <div class="cal-item">
              <div class="cal-date-box"><span class="cal-m">DEC</span><span class="cal-d">07</span></div>
              <div class="cal-info"><p class="cal-title">Homecoming Weekend</p><p class="cal-venue">Main Campus · 8:00 AM</p></div>
            </div>
            <div class="cal-item">
              <div class="cal-date-box"><span class="cal-m">DEC</span><span class="cal-d">15</span></div>
              <div class="cal-info"><p class="cal-title">Christmas Reunion</p><p class="cal-venue">Grand Ballroom, Abreeza</p></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .main { margin-left: 260px; flex: 1; background: #f0f4f8; min-height: 100vh; }
  .topbar {
    background: #003366;
    padding: 28px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .topbar-eyebrow { color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-bottom: 4px; }
  .topbar-title { color: white; font-size: 26px; font-weight: 800; margin-bottom: 6px; display: flex; align-items: center; gap: 10px; }
  .verified-badge { background: #FFD700; color: #003366; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 20px; vertical-align: middle; }
  .topbar-sub { color: rgba(255,255,255,0.6); font-size: 13px; }
  .topbar-actions { display: flex; align-items: center; gap: 14px; }
  .icon-btn { background: rgba(255,255,255,0.1); border: none; border-radius: 10px; padding: 10px; cursor: pointer; color: white; display: flex; align-items: center; justify-content: center; position: relative; }
  .notif-dot { position: absolute; top: 8px; right: 8px; width: 8px; height: 8px; background: #FFD700; border-radius: 50%; }
  .header-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 3px solid #FFD700; cursor: pointer; }

  .content-grid { display: grid; grid-template-columns: 1fr 340px; gap: 24px; padding: 32px 40px; }

  .left-col, .right-col { display: flex; flex-direction: column; gap: 24px; }

  .section { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .section h2 { font-size: 18px; font-weight: 800; color: #1a1a2e; margin-bottom: 16px; }
  .section-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .section-hdr h2 { margin-bottom: 0; }
  .see-all-btn { background: none; border: none; color: #003366; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .section-label { font-size: 18px; font-weight: 800; color: #1a1a2e; margin-bottom: 16px; }

  .events-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .event-card { border-radius: 14px; overflow: hidden; border: 1px solid #f0f0f0; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
  .event-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
  .event-img-wrap { position: relative; height: 160px; overflow: hidden; }
  .event-img { width: 100%; height: 100%; object-fit: cover; }
  .event-img-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5)); }
  .event-date-badge { position: absolute; top: 12px; right: 12px; background: white; border-radius: 8px; padding: 6px 10px; text-align: center; }
  .badge-month { display: block; font-size: 10px; font-weight: 800; color: #003366; letter-spacing: 0.5px; }
  .badge-day { display: block; font-size: 18px; font-weight: 900; color: #003366; line-height: 1; }
  .event-body { padding: 14px; }
  .event-body h3 { font-size: 14px; font-weight: 800; color: #1a1a2e; margin-bottom: 6px; }
  .event-body p { font-size: 12px; color: #777; margin-bottom: 3px; }
  .event-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; }
  .att-count { font-size: 12px; color: #888; }
  .book-btn { background: #003366; color: white; border: none; border-radius: 7px; padding: 6px 12px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; }

  .feed-list { display: flex; flex-direction: column; gap: 14px; }
  .post-card { display: flex; gap: 14px; padding: 16px; border: 1px solid #f5f5f5; border-radius: 12px; background: #fafafa; }
  .post-left { flex-shrink: 0; }
  .post-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb; }
  .post-avatar.institution { border-radius: 10px; border-color: #003366; }
  .post-right { flex: 1; }
  .post-meta { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; margin-bottom: 6px; }
  .post-name { font-size: 14px; font-weight: 700; color: #1a1a2e; }
  .check { background: #003366; color: white; font-size: 9px; padding: 1px 5px; border-radius: 20px; }
  .post-handle { font-size: 12px; color: #888; }
  .dot { color: #ccc; }
  .post-time { font-size: 12px; color: #aaa; }
  .post-text { font-size: 13px; color: #555; line-height: 1.6; margin-bottom: 10px; }
  .post-actions { display: flex; gap: 12px; }
  .post-actions button { background: none; border: none; font-size: 12px; color: #888; cursor: pointer; font-family: inherit; padding: 4px 8px; border-radius: 6px; }
  .post-actions button:hover { background: #f0f4f8; color: #003366; }

  .quick-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .quick-btn {
    background: var(--c); border: none; border-radius: 12px; padding: 20px 14px;
    display: flex; flex-direction: column; align-items: flex-start; gap: 8px;
    cursor: pointer; transition: opacity 0.2s; font-family: inherit;
  }
  .quick-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .quick-icon { font-size: 24px; }
  .quick-btn span:last-child { color: white; font-size: 13px; font-weight: 700; }

  .notif-section { padding: 0; overflow: hidden; }
  .notif-img-wrap { position: relative; height: 120px; }
  .notif-img { width: 100%; height: 100%; object-fit: cover; }
  .notif-overlay { position: absolute; inset: 0; background: rgba(0,51,102,0.6); }
  .notif-label { position: absolute; bottom: 10px; left: 14px; color: white; font-size: 11px; font-weight: 800; letter-spacing: 0.5px; }
  .notif-body { padding: 16px; }
  .notif-title { font-size: 14px; font-weight: 800; color: #1a1a2e; margin-bottom: 4px; }
  .notif-sub { font-size: 12px; color: #777; margin-bottom: 12px; line-height: 1.5; }
  .register-now-btn { background: #003366; color: white; border: none; border-radius: 8px; padding: 9px 16px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; }

  .cal-list { display: flex; flex-direction: column; gap: 10px; }
  .cal-item { display: flex; gap: 14px; align-items: center; padding: 10px; border-radius: 10px; background: #f8fafc; border: 1px solid #f0f0f0; }
  .cal-date-box { background: #003366; border-radius: 8px; padding: 8px 10px; text-align: center; min-width: 50px; }
  .cal-m { display: block; color: rgba(255,255,255,0.7); font-size: 9px; font-weight: 700; letter-spacing: 1px; }
  .cal-d { display: block; color: #FFD700; font-size: 18px; font-weight: 900; line-height: 1.1; }
  .cal-title { font-size: 13px; font-weight: 700; color: #1a1a2e; }
  .cal-venue { font-size: 11px; color: #999; margin-top: 2px; }
</style>
