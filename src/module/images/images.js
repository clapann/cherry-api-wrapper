const fetch = require(`node-fetch`);

module.exports = class Images {

    async blush(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/images/blush?key=${apikey}`);
        return await (await res.json())
    }

    async cry(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/images/cry?key=${apikey}`);
        return await (await res.json())
    }

    async hug(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/images/hug?key=${apikey}`);
        return await (await res.json())
    }

    async kiss(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/images/kiss?key=${apikey}`);
        return await (await res.json())
    }

    async pat(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/images/pat?key=${apikey}`);
        return await (await res.json())
    }

    async slap(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/images/slap?key=${apikey}`);
        return await (await res.json())
    }

};
