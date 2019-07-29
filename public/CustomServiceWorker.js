console.log("Custom Service Worker");

self.addEventListener('install', event => {
    console.log('The service worker is being installed.');
});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}


//Localhost
// https://localhost:3000



// https://trans-pwa.herokuapp.com/

workbox.routing.registerRoute(
    /\.(?:js|css|html|png)$/,
    workbox.strategies.networkFirst(),
  )

  workbox.routing.registerRoute(
    'https://localhost:3000',
    workbox.strategies.networkFirst()
  )

workbox.routing.registerRoute(
    'https://trans-pwa.herokuapp.com/',
    workbox.strategies.networkFirst()
  )
  workbox.routing.registerRoute(
    'https://trans-pwa.herokuapp.com/',
    workbox.strategies.networkFirst()
  )
  workbox.routing.registerRoute(
    'https://trans-pwa.herokuapp.com/tranfers',
    workbox.strategies.networkFirst()
  )
 
  workbox.routing.registerRoute(
    'https://trans-pwa.herokuapp.com/getTrans',
    workbox.strategies.networkFirst()
  )

  workbox.routing.registerRoute(
    'https://trans-pwa.herokuapp.com/createTrans',
    workbox.strategies.networkFirst({
    }),
    'POST'
  )

  workbox.routing.registerRoute(
    'https://trans-pwa.herokuapp.com/api/push_message',
    workbox.strategies.networkFirst({
    }),
    'POST'
  )
  
self.addEventListener('push', function (event) {
    const data = event.data.json();
    console.log("Getting push data", data);
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.msg,
            vibrate: [500, 100, 500]
        })
    );
});