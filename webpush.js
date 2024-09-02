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

// android mobil
const pushSubscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/fj_BKm7Y9eA:APA91bHSm8rzG9s_QkFmafU_ZENfmXlqUuoPgUrPuFMljQISyWs7Kdza8Ef-4cqzWUmw6bYaHy5vFmx31iwFOgTxOR5YRIDHIjYc_l0zu-f3JTVrZ6TbhroFqHURPYvUshfN3BNx3xHD",
    expirationTime: null,
    keys: {
        p256dh: "BBfzNvhVBxB71ZzBdO1HnfDvoyS27NSEPOCOPRySwSVZyxvp1lE428yUrIvJJglw2a3hw3KewySBe1AaTSb2AAY",
        auth: "GRVXYazyuvyNpQtkdzX4VQ"
    }
};

// edge pc
// const pushSubscription = {endpoint:"https://wns2-par02p.notify.windows.com/w/?token=BQYAAADOalEw%2fThh02yhtTGBfW%2bpjlycjVWktruye9lT%2bKhHR97Lez9SoYDEVkE9s4FWPYAfbgzStkABudn2AUlaL0qkWcbYfNkhwHXgwUDHnY5YPZxE%2fohabaS%2bYFjFOYXGMOcfloUHtRY%2bgk9lIL56qmsNKd%2f0IqAQiYM3ULqiq6NVDj9Q93N7ghijCqNVlwutvd%2f2XEfItQCCRYBhFmcDir2SMx5XYCWaQcAYrdpK9M57FF%2fmFuvXO3fLkF5z7Nzvsaer4cyOWpZcZ7%2bPK3mZhzILeOLzmg%2fxCqVE3jDU1N3%2fBb27gBcbV%2fBBuvM5KvTCBV4xK4FreGoS10MUP8ZduoVH",expirationTime:null,keys:{p256dh:"BBCsUzfZ0EDyh23ReK69djU2N_kgqnMVG8z_YHDItTetsWr4I4_ih0DC9UoJGsYIKvbqImuLHPzalNsYRMVVgME",auth:"pKGJ1DnCVl3ydGKv1P9_4w"}}

// mrp xiaomi
// const pushSubscription = {endpoint:"https://fcm.googleapis.com/fcm/send/dNGliiVoxtc:APA91bHnbqti_cmoX2sTL8-phaAnlx0iyjybm1aP9ItmYyUNDV7LA3e9DzitvkTCWp6gNgdVBPF4D7B-QAlCo8coPhIXjKPUGmmc8ZBKIug07YDnh03tmkUzuUqoqTjc5gECrOTdxGCM",expirationTime:null,keys:{p256dh:"BM9QtVExBl3DeSsj8mDyaCnYMKM6a9R6G9P_xMl9bZTvzvmzNrYp01RgoHIRHBkWQw3UwFNat-es_U8DMtYi478",auth:"tkXOnBqSXBnGyPdQG7J2Gw"}}

// const pushSubscription = {endpoint:"https://fcm.googleapis.com/fcm/send/c2DahlBQ2Qg:APA91bEUy8wSt0mkIb4TsQnAcdneCbk2AbNUkDbqh7NPVVqRlu5fdClKO6F80yONZb_3NSj5XzsFpIThzKJlMU28oLFsJ8DBsJ3iHc-3bWzmO85LHFSoeBoJrl4k77FmNDMnvz4Mr_yl",expirationTime:null,keys:{p256dh:"BGozwl-35z2myyowqns_PeCQxZVtwpg-Vgab6BrQVVLLzWmhT82A1vwXBG-FpVJctL0lOyjmPCre8viux7aS4OU",auth:"tEFnEKe_WUZ0kzLub3y3dg"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');