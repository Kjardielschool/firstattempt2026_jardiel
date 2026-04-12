<script>
  import { Router, Route } from "svelte-routing";

  import Login from "./pages/alumni/Login.svelte";
  import Dashboard from "./pages/alumni/Dashboard.svelte";
  import Directory from "./pages/alumni/Directory.svelte";
  import Events from "./pages/alumni/Events.svelte";
  import Profile from "./pages/alumni/Profile.svelte";
  import Mentorship from "./pages/alumni/Mentorship.svelte";
  import Verify from "./pages/alumni/Verify.svelte";

  import AdminLogin from "./pages/admin/AdminLogin.svelte";
  import AdminDashboard from "./pages/admin/AdminDashboard.svelte";
  import AdminVerification from "./pages/admin/AdminVerification.svelte";
  import AdminEvents from "./pages/admin/AdminEvents.svelte";
  import AdminReports from "./pages/admin/AdminReports.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="/" component={Login} />
  <Route path="/login" component={Login} />
  <Route path="/dashboard" component={Dashboard} />
  <Route path="/directory" component={Directory} />
  <Route path="/events" component={Events} />
  <Route path="/profile" component={Profile} />
  <Route path="/mentorship" component={Mentorship} />
  <Route path="/verify" component={Verify} />
  <Route path="/admin" component={AdminLogin} />
  <Route path="/admin/dashboard" component={AdminDashboard} />
  <Route path="/admin/verification" component={AdminVerification} />
  <Route path="/admin/events" component={AdminEvents} />
  <Route path="/admin/reports" component={AdminReports} />
</Router>

<style>
  :global(*) { margin: 0; padding: 0; box-sizing: border-box; }
  :global(body) { font-family: 'Plus Jakarta Sans', sans-serif; background: #f0f4f8; min-height: 100vh; }
  :global(a) { text-decoration: none; color: inherit; }
</style>
