/* Squisito Business — offline service worker
   Caches the app shell so it opens with no internet after the first visit.
   IMPORTANT: when you upload a NEW version of the app, change the number
   in CACHE below (e.g. v1 -> v2). That tells phones to fetch the new files. */
const CACHE = 'squisito-v3';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './html2canvas.min.js',
  './jspdf.umd.min.js',
  './icon-192.png',
  './icon-512.png',
  './maskable-192.png',
  './maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Cache-first: instant offline load. Falls back to network for anything new.
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        // stash same-origin successful responses for next time
        if (res && res.status === 200 && new URL(req.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
