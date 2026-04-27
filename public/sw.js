// public/sw.js
self.addEventListener('install', (e) => {
  console.log('[LS Coaching] Service Worker Instalat');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[LS Coaching] Service Worker Activat');
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Păstrăm funcționalitatea de bază pentru a trece testul de instalare
  e.respondWith(fetch(e.request).catch(() => new Response("Eroare de rețea.")));
});
