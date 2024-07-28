self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: './bell.png',
        image: './images.jpeg',
        sound: './sound.mp3',
        vibrate: [200, 100, 200]
    };
    
    event.waitUntil(self.registration.showNotification(data.title, options));
});
