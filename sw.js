self.addEventListener('push', function(event) {
    let data = {};
  
    if (event.data) {
      try {
        data = event.data.json();
      } catch (e) {
        data = { text: event.data.text() };
      }
    }
  
    const options = {
      body: data.text || 'Default body text',
      icon: 'path/to/icon.png', 
      badge: 'path/to/badge.png'
    };
  
    event.waitUntil(
      self.registration.showNotification('Notification Title', options)
    );
  });