self.addEventListener("install", (e) => {
  console.log("Service Worker installé");
  e.waitUntil(
    caches.open("sport-app-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
