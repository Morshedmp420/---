const fs = require("fs");
module.exports.config = {
	name: "RuleBot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SaGor", 
	description: "no prefix",
	commandCategory: "Rules",
	usages: "RuleBot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Rule")==0 || (event.body.indexOf("ফাউন্ডেশন এর নিয়ম")==0)) {
		var msg = {
				body: "⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n   ✨আসসালামু়আলাইকুম✨\nসবার সুবিধার জন্যই কিছু নিয়ম\nনিয়মগুলো হলোঃ👇\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n｢১｣ কেউ কোন প্রকার খারাপ প্রোফাইল ব্যবহার করতে পারবে না \n｢২｣ সালাম দিয়ে কথা শুরু করতে হবে\n｢৩｣ফাউন্ডেশনের নাম এবং কি প্রোফাইল চেঞ্জ করতে পারবে না গ্রুপের\n｢৪｣সবার সাথে ভালো ব্যবহার করতে হবে⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆❤️🌸\n｢৫｣ খারাপ ভিডিও এবং কি ছবি দেওয়া যাবে না⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আশা করি সকলে বুঝতে পারছেন\n তাই সকলকে নিয়মগুলো মানার জন্য বিশেষভাবে অনুরোধ করা হলো⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n\n\n অনুরোধেঃ👇\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\nআত- তাক্বওয়া ফাউন্ডেশন\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
