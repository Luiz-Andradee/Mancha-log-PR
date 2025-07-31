const CACHE_NAME = 'mancha-log-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',     // ajuste conforme o nome do seu CSS
  '/qgis2web.js',   // ajuste conforme o nome do seu JS principal
  // adicione outros arquivos importantes (imagens, GeoJSON, etc)
];

// Instala o service worker e faz cache dos arquivos essenciais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Ativa o service worker e remove caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => 
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
});

// Intercepta requisições e serve do cache quando possível
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
