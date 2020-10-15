const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/sendToAll", (req, res, next) => {
  //Notification content
  let notification = {
    title: req.body.title || "NodeJs Notification",
    body: req.body.body || "Body of notification",
  };

  //fcm token genrated for device
  // add multiple device fcm
  let fcmToken = [
    "c2Aak3tHSCiln4b_hkZnEA:APA91bE1YYu-Wgyi7dDyQ6LM0QOrANRAXelOQkrigtP_GIVaabI6p7i0FN02p6ovQVFDyH7uEI10gfYs0-kjIVPc5ofqIzf3hIp3vgfA-VbkI9248xwkEDgy_VxXKAMlJeQhm5Sx81Fj",
  ];

  //https://firebase.google.com/docs/cloud-messaging/http-server-ref  <-- the api doc
  axios({
    method: "post",
    url: "https://fcm.googleapis.com/fcm/send",
    data: {
      notification: notification,
      registration_ids: fcmToken,
    },
    headers: {
      //cloud messaging firebase token
      Authorization:
        "key=" +
        "AAAAJ_ybO5w:APA91bFTE1eiIDMg9ABZpM3yHBWT6q1v7QhLtlYLH7h8CfJD4xXH9fU-5G4tW8pSgii71cmPR0_q5KREJiL2629TF1PsiRJHuD15_HYCqLkgaMETOkohwfiK4Q8_kCB13wgS4mV2gHIs",
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      res.status(200).send("Notification sucess");
    })
    .catch((err) => {
      res.status(400).send("Something went wrong..!!", err);
      console.log(err);
    });
});

module.exports = router;
