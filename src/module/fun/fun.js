const fetch = require(`node-fetch`);

module.exports = class Fun {

    async eightball(question, apikey) {
        if(!question) {
            let message = {
                "status": 400,
                "error": "You didnt provide a question."
            }
            return message
        }

        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/fun/8ball?question=${question}&key=${apikey}`);
        return await (await res.json())
    }

    async advice(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/fun/advice?key=${apikey}`);
        return await (await res.json())
    }

    async fortune(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/fun/fortune?key=${apikey}`);
        return await (await res.json())
    }

    async insults(apikey) {
        if(!apikey) {
            let message = {
                "status": 400,
                "error": "You didnt provide an API key."
            }
            return message
        }

        const res = await fetch(`https://api.cherrybot.xyz/fun/fortune?key=${apikey}`);
        return await (await res.json())
    }

};
