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

const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cHa7n5M0CXA:APA91bEEsqExkz5Lf-7TJZZQBr-zPQ6HQmwAJzUk3Agbyv_b5_mupo3r1e8js9tS4IXsbMS3O1jn2MSS5YcnoS33VBdsb6DkaoPr6aQeC5YNmsyUKlFWD36Ed3Yul9hzDU2deIYp_Gv_",
  "expirationTime": null,
  "keys": {
      "p256dh": "BClk7sTkNFctKz9Jq1CcIXgpyJS_E9e3MFWPWVBv02-b59EbwXHtivc_hTKcA5H9b1rxW3tfuen3oBbL9EC_SeM",
      "auth": "y-EMDPMwB8iMar4PENLI7A"
  }
}

webpush.sendNotification(pushSubscription, JSON.stringify({ title: "Notification title by srobar", body: "Notification body by srobar"}));