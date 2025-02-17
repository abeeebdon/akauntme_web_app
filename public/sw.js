const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/offline',
  '/styles.css',
  '/script.js',
  '/logo.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll(['/', '/offline']);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/offline');
      })
    );
  });
  