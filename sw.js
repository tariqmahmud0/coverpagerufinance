// Service Worker for Academic Cover Page Generator (RU Finance)
const CACHE_NAME = 'ru-cover-page-v3';
const STATIC_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './404.html',
    './assets/icons/favicon.ico',
    './assets/icons/favicon.png',
    './assets/icons/favicon-16x16.png',
    './assets/icons/favicon-32x32.png',
    './assets/icons/favicon-48x48.png',
    './assets/icons/apple-touch-icon.png',
    './assets/icons/apple-touch-icon-76x76.png',
    './assets/icons/apple-touch-icon-120x120.png',
    './assets/icons/apple-touch-icon-152x152.png',
    './assets/icons/apple-touch-icon-180x180.png',
    './assets/icons/icon-192.png',
    './assets/icons/icon-384.png',
    './assets/icons/icon-512.png',
    './assets/images/RU_Official_Logo.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Tiro+Bangla:ital@0;1&family=Cinzel:wght@600;700;800&family=Montserrat:wght@600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then((networkResponse) => {
                return networkResponse;
            }).catch(() => {
                if (event.request.headers.get('accept')?.includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
