const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
 credits: "JOY",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আসসালামু আলাইকুম 💖\nবলুন আপনাকে কিভাবে সাহায্য করতে পারি", "আপনি কি ফাউন্ডেশনে হাদিয়া দিতে চান🥰\n নিচে লিখুন\n নগদ-বিকাশ-রকেট", "আপনি কি ফাউন্ডেশনের নিয়ম সম্পর্কে জানতে চান 🖤\n নিচে লিখুন\n Rules অথবা গ্রুপের নিয়ম ", "আপনি কি ফাউন্ডেশনের দায়িত্বরত ব্যক্তিদের সাথে কথা বলতে চান 🥰 অবশ্যই এডমিনদের সাথে যোগাযোগ করুন", "আপনি কি ফাউন্ডেশনের কাজ সম্পর্কে জানতে চান\n নিচে লিখুন\n ফাউন্ডেশন এর কাজ কি অথবা ফাউন্ডেশনের উদ্দেশ্য কি","আপনি কি ফাউন্ডেশনের সফটওয়্যার সম্পর্কে জানতে চান\n নিচে লিখুন \n .সফটওয়্যার এর ভিডিও অথবা .Aops video ","আসুন সবাই মিলে ইসলামিক কাজ করি", "আপনি কি নামাজ পড়েছেন জান নামাজ পড়ে আসেন","আপনি কি ফাউন্ডেশন এর পেজ সম্পর্কে জানতে চান\n নিচে লিখুন\n .paje", "আপনি যদি ফ্রি থাকেন অবশ্যই ইসলামিক একটি পোস্ট করে আসুন আপনার আইডিতে অথবা আমাদের গ্রুপে কে জানে আপনার একটি পোস্টে বদলে যেতে পারে একজন বেনামাজির জীবন আপনার পরকালে কাজে আসতে পারে","বেশি বেশি আল্লাহর শুকরিয়া আদায় করুন"," ইসলামিক কাজে মানুষকে সহযোগিতা করুন","আপনি যদি পৃথিবীর কোন কিছু জানতে চান \n নিচে দেখুন\n .search ","বেশি বেশি আল্লাহর রাস্তায় দান করুন দান করলে আল্লাহ সকল বিপদ থেকে মানুষকে উদ্ধার করে"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("Bot") == 0  || (event.body.indexOf("bot") == 0 )) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
  
