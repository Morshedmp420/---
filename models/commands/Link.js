module.exports.config = {
    name: "linkShare",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SaGor",
    description: "কেউ গ্রুপ বা পেজের লিংক চাইলে বট রিপ্লাই দিবে",
    commandCategory: "group",
    usages: "auto link reply (group/page)",
    cooldowns: 3,
};

module.exports.run = async function () {
    // এখানে কিছু লাগবে না
};

module.exports.handleEvent = async function ({ api, event }) {
    try {
        // 🔗 এখানে তোমার আসল গ্রুপ ও পেজ লিংক বসাও
        const groupLink = "https://facebook.com/groups/islamik.life1/";
        const pageLink = "https://www.facebook.com/Islamic.Fundation";

        const msg = event.body?.toLowerCase() || "";

        // ✅ গ্রুপ সম্পর্কিত শব্দ
        const groupKeywords = [
            "Group link",
            "gc link",
            "গ্রুপ লিংক",
            "facebook গ্রুপের লিংক",
            "গ্রুপ লিংক দাও",
            "Facebook group er link",
            "group dao",
            "grouper link"
        ];

        // ✅ পেজ সম্পর্কিত শব্দ
        const pageKeywords = [
            "Page link",
            "page dao",
            "ফেসবুক পেজ",
            "পেজ লিংক",
            "page er link",
            "page er ling",
            "Facebook page"
        ];

        // 🟩 গ্রুপ লিংক চাইলে
        if (groupKeywords.some(key => msg.includes(key))) {
            const reply = `এই নিন আমাদের Facebook Group লিংক:\n\n👉 ${groupLink}\n\n🌸 ইসলামিক গ্রুপে যোগ দিয়ে বেশি বেশি ইসলামিক পোস্ট করবেন কে জানে আপনার একটি পোস্টে বদলে যেতে পারে একজন বেনামাজি এবং একজন নাস্তিকের জীবন তাই বেশি বেশি ইসলামিক পোস্ট করুন ইসলামকে বিশ্বের মাঝে ছড়িয়ে দিন!`;
            return api.sendMessage(reply, event.threadID, event.messageID);
        }

        // 🟦 পেজ লিংক চাইলে
        if (pageKeywords.some(key => msg.includes(key))) {
            const reply = `🌐 এই নিন আমাদের Facebook Page লিংক:\n\n👉 ${pageLink}\n\n💖 অবশ্যই ইসলামিক পেজটি ফলো করে দিবেন। লাইক কমেন্ট শেয়ার করতে ভুলবেন না কারণ আমাদের ফাউন্ডেশনের সবকিছুই আমরা আমাদের পেজে পোস্ট করবো তাই আপডেট জানতে এখনই ফলো করুন`;
            return api.sendMessage(reply, event.threadID, event.messageID);
        }

    } catch (err) {
        console.error("linkShare error:", err);
    }
};
