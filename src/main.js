import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: { url: window.location.pathname }
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

export default app
