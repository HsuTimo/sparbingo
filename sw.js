const CACHE_NAME = "v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/sparbingo.js",
  "/icon/icon-192.png",
  "/icon.icon-512.png"
];

// Install event – caching files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Activate event – cleanup old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// Fetch event – serve from cache or fall back to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => 
      cached || fetch(event.request)
    )
  );
});