const fetch = require(`node-fetch`);

module.exports = class Discord {

    async banner(apikey, discordToken, userID) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        if(!discordToken) {
            let message = {
                "status": 400,
                "error": "You didnt provide a Discord bot token."
            }
            return message
        }

        if(!userID) {
            let message = {
                "status": 400,
                "error": "You didnt provide a Discord user ID token."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/discord/banner?key=${apikey}&token=${discordToken}&userID=${userID}`);
        return await (await res.json())
    }
};