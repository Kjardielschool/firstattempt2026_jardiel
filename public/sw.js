const CACHE_NAME = 'addu-alumni-v1';

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/images/AdDu Alumni Logo.png',
  '/images/Blue Knight Feed bg image ateneo de davao home dashboard.png',
  '/images/AdDU Annual Alumni Gala 2024 Events Image BG.png',
  '/images/Annual AdDU Gala Dashboard Image.png',
  '/images/Blue Knight Tech Mixer Dashboard Image.png',
  '/images/All-in-One Event Manager Image bg.png',
  '/images/Networking event with people talking.png',
  '/images/People going.png',
  '/images/Person working on laptop for workshop.png',
  '/images/QR Code img.png',
  '/images/Maria Santos.png',
  '/images/Michael Chen.png',
  '/images/Alex Rivera Profile Picture.png',
  '/images/Sarah Jenkins.png',
  '/images/James Lee.png',
  '/images/David Kim.png',
  '/images/Emily Zhang.png',
  '/images/Lisa Wong.png',
  '/images/Atty. Reyes.png',
  '/images/Fr. Cruz SJ.png',
  '/images/Annual Tech Alumni Meetup 2024 Targeted Invitation Builder.png',
  '/images/Blue & Gold Gala Night Registration Confirmation IMAGE BG.png',
  '/images/Event Check-in Success Blue Knight Spirit Badge.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(() => {
        return caches.match('/index.html');
      });
    })
  );
});
