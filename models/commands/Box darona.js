module.exports.config = {
  name: "darona",
  version: "1.0.0",
  author: "SaGor",
  description: "কেউ 'everyone' বা '@everyone' লিখলে সবাইকে mention করে একটি মেসেজ পাঠাবে",
  commandCategory: "group",
  cooldown: 10,
};

module.exports.run = async function ({ api, event }) {
  if (!event.isGroup) return api.sendMessage("❌ এই কমান্ড শুধু গ্রুপে কাজ করবে!", event.threadID);

  const message = event.body.toLowerCase();
  if (message.includes("everyone") || message.includes("@everyone")) {
    try {
      const threadInfo = await new Promise((resolve, reject) => {
        api.getThreadInfo(event.threadID, (err, info) => {
          if (err) return reject(err);
          resolve(info);
        });
      });

      const participantIDs = threadInfo.participantIDs || [];
      if (participantIDs.length === 0) return api.sendMessage("⚠️ সদস্যদের তথ্য পাওয়া যায়নি!", event.threadID);

      const mentions = [];
      let mentionText = "";

      for (const id of participantIDs) {
        const userInfo = await new Promise((resolve, reject) => {
          api.getUserInfo(id, (err, data) => {
            if (err) return reject(err);
            resolve(data[id]);
          });
        });

        const name = userInfo.name || "ফাউন্ডেশন এর ধারণা","ফাউন্ডেশন এর উদ্দেশ্য","ফাউন্ডেশন এর কাজ";
        const tag = `@${name}`;
        mentionText += `${tag} `;
        mentions.push({ id, tag, fromIndex: mentionText.length - tag.length });
      }

      const finalMessage = {
        body: `আসসালামু আলাইকুম\n আমাদের ফাউন্ডেশনের কাজ হল বাংলাদেশের যে কোন প্রান্তে যে কোন জায়গায় মসজিদকে সুন্দর করে সাজানো এবং কি এতিমখানায় যেসব ছেলেমেয়েদের টাকার জন্য কিছু করতে পারে না তাদেরকে সহযোগিতা করা।\ আমাদের ফাউন্ডেশনের একটি সফটওয়্যার রয়েছে যেটির মাধ্যমে আমরা প্রত্যেক মাসের হাদিয়া এবং কি সকল কিছু আপডেট করে থাকি যেন আমাদের প্রতিটি সদস্যর সবকিছু জানা থাকে আপনিও চাইলে আমাদের ফাউন্ডেশনে আসতে পারেন🫡\n আসুন সবাই একসাথে ইসলাম প্রচার করে এবং অসহায় মানুষদের পাশে দাঁড়াই\n ওই যে বলে না ক্ষুদ্র ক্ষুদ্র জিনিস থেকে অনেক বড় কিছু করা যায় তাই সকলের সহযোগিতায় এভাবে আমরা মানুষের পাশে দাঁড়াবো ইনশাআল্লাহ\n${mentionText}`,
        mentions: mentions
      };

      api.sendMessage(finalMessage, event.threadID);

    } catch (err) {
      console.error(err);
      api.sendMessage("⚠️ মেসেজ পাঠাতে সমস্যা হয়েছে!", event.threadID);
    }
  }
};
