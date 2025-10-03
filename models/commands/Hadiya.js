const remindedRecently = new Set();

module.exports.config = {
  name: "hadiya",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SaGor + AI",
  description: "হাদিয়া পরিশোধ করার জন্য",
  commandCategory: "moderation",
  usages: "auto detect bad words",
  cooldowns: 5
};

// হাদিয়ার লিস্ট (নিজের মতো করে বাড়াতে পারবেন)
const badWords = [
  "Bikash", "বিকাশ", "Nagad", "নগদ", "Rocket", "রকেট", "Nogod",
  "Bikas", "টাকা পাঠাবো নাম্বার দাও", "আমি কিছু দান করতে চাই", "টাকা পাঠাবো", "বিকাশ নাম্বার দাও", "নগদ নাম্বার দাও", "রকেট নাম্বার দাও", "হাদিয়া কিভাবে পাঠাবো", "টাকা কিভাবে পাঠাবো"
];

module.exports.handleEvent = function({ api, event }) {
  try {
    const { threadID, messageID, senderID, body } = event;
    if (!body) return;

    const text = body.toLowerCase();

    // anti-spam (একই ইউজারকে 10 সেকেন্ডে একবারই রিপ্লাই দেবে)
    const key = `${threadID}_${senderID}`;
    if (remindedRecently.has(key)) return;

    // bad word আছে কিনা চেক
    if (!badWords.some(word => text.includes(word))) return;

    // ইউজারের নাম বের করি
    api.getUserInfo(senderID, (err, info) => {
      const userName = (!err && info && info[senderID]?.name) 
        ? info[senderID].name 
        : "বন্ধু";

      const responses = [
        `🕋 ${userName},\n 01615101797\n এই নেন আপনার নাম্বার\n অবশ্যই টাকা পাঠানোর পরে শেষের নাম্বার এবং স্ক্রিনশট দিবেন 🥰`,
        `🕋 ${userName}, \n 01615101797\n এই নেন আপনার নাম্বার\n অবশ্যই টাকা পাঠানোর পরে শেষের নাম্বার এবং স্ক্রিনশট দিবেন 🥰`,
        `🕋 ${userName}, \n 01615101797\n এই নেন আপনার নাম্বার\n অবশ্যই টাকা পাঠানোর পরে শেষের নাম্বার এবং স্ক্রিনশট দিবেন 🥰`,
        `🕋 ${userName}, \n 01615101797\n এই নেন আপনার নাম্বার\n অবশ্যই টাকা পাঠানোর পরে শেষের নাম্বার এবং স্ক্রিনশট দিবেন 🥰`
      ];

      // র‍্যান্ডম রিপ্লাই
      const msg = responses[Math.floor(Math.random() * responses.length)];

      api.sendMessage(msg, threadID, (sendErr) => {
        if (!sendErr) {
          try { api.setMessageReaction("🕋", messageID, () => {}, true); } catch (e) {}
        }
      });
    });

    remindedRecently.add(key);
    setTimeout(() => remindedRecently.delete(key), 10000);

  } catch (e) {
    console.error("antiBadWord module error:", e);
  }
};

module.exports.run = function() {};
