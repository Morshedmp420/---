module.exports.config = {
  name: "howAreYou",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SaGor",
  description: "কেউ কেমন আছো বললে বট রিপ্লাই দিবে",
  commandCategory: "AI",
  usages: "auto how are you reply",
  cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return;

  const text = body.toLowerCase().trim();

  // --- কিওয়ার্ড তালিকা ---
  const keywords = [
    "ফাউন্ডেশন এর ধারণা",
    "ফাউন্ডেশনের কাজ",
    "ফাউন্ডেশন এর উদ্দেশ্য",
    "Eta kiser box",
    "এইটা কিসের গ্রুপ",
    "এইটা কেমন গ্রুপ",
    "eta kiser gurup",
  ];

  // --- যদি মেসেজে কিওয়ার্ড থাকে
  if (keywords.some(word => text.includes(word))) {
    try {
      // ইউজারের নাম আনো
      const userInfo = await new Promise((resolve, reject) => {
        api.getUserInfo(senderID, (err, data) => {
          if (err) return reject(err);
          resolve(data[senderID]);
        });
      });

      const userName = userInfo.name || "বন্ধু";

      // --- রিপ্লাই বার্তা
      const reply = `আসসালামু আলাইকুম,\n ${userName} 🌸 \n আশা করি ভালো আছেন🌸\n আমাদের ফাউন্ডেশনের উদ্দেশ্য হলো বাংলাদেশের যে কোন প্রান্তে যেকোনো মসজিদ কে আমাদের সামর্থ্য অনুযায়ী সাজানো।\n এবং কি এতিমখানা যে সকল ছেলে এবং মেয়েদের কে সহযোগিতা করা আমাদের ফাউন্ডেশন এর মূল কাজ।\n এবং কি অসহায় মানুষের পাশে দাঁড়ানোর জন্য আমরা সর্বদা প্রস্তুত।\n আসুন সবাই একসাথে কাঁধে কাঁধ মিলিয়ে ইসলাম প্রচার করি\n সবাই আমাদের জন্য দোয়া করবেন আমরা যেন সঠিকভাবে ইসলামের নিয়ম অনুযায়ী কাজগুলো করতে পারি`;

      // --- মেসেজ পাঠাও ও রিয়্যাকশন দাও
      api.sendMessage(reply, threadID, () => {
        api.setMessageReaction("🌸", messageID, () => {}, true);
      });

    } catch (err) {
      console.error(err);
    }
  }
};

module.exports.run = function () {};
