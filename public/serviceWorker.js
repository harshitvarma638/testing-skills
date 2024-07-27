self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    
    const data = event.data.json();
    const options = {
        body: 'Yay it works.',
        icon: './bell.jpg',
    };
    
    event.waitUntil(self.registration.showNotification(data.title, options));
});
