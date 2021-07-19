const fetch = require(`node-fetch`);

module.exports = class Valorant {

    async userInfo(apikey, riotID) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        if(!riotID) {
            let message = {
                "status": 400,
                "error": "You didnt provide a Riot ID."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/valorant/userinfo?key=${apikey}&tagline=${encodeURIComponent(riotID)}`);
        return await (await res.json())
    }
};