self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("einstein-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles.css"
      ]);
    })
  );
});