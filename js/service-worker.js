// service-worker.js
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/index.css',
    '/css/general/styles.css',

    '/materials.html',
    '/css/materials.css',

    '/notifications.html',
    '/css/notifications.css',

    '/no-data.html',
    '/css/no-data.css',
    // Add other static assets you want to cache
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
