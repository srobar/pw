const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey: 'BJaq_WIn8SM_dAHNSBbHaUBpFaiXeg5bjABZSWcBa1zBgONiN2z6StcyGLF5Vtnq0SGdPA8Afx2TXX1FM3DkjTU',
    privateKey: 'bfz_UxaFLUiEMBU9ddTLoEvK8VsloWbIMwjLc8kmIc4'
  };

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/evjhdyDLf24:APA91bF6pRWi_LI7As5pFJR_56Cc6n6MGshuyPY10J1uRMp_HN3gnOqLFN5E4EpfHwfiAKEudNDBaWVGeCUBvHIvof1Bf8SvG7sse0DynYjT-rbuLaYf0DmwzoxSlnV3APL2hGdej6w1',
  expirationTime: null,
  keys: {
    p256dh: 'BHBQVOVM8F13oh2BXiQb0gmL0Eb97D6_YmMGIPxIXhxAIlgBEvhWKtvgx7eJWNjGoA4i63cGb_voaNC3ap3ANDw',
    auth: 'oCVdAFAw9xceceqNbNNIqA'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');