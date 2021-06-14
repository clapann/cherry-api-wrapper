const fetch = require(`node-fetch`);

module.exports = class Fun {

    async eightball(question) {
        if(!question) {
            let message = {
                "status": 400,
                "error": "You didnt provide a question."
            }
            return message
        }
        const res = await fetch(`https://api.cherrybot.xyz/fun/8ball?question=${question}`);
        return await (await res.json())
    }

    async advice() {
        const res = await fetch('https://api.cherrybot.xyz/fun/advice');
        return await (await res.json())
    }

    async fortune() {
        const res = await fetch('https://api.cherrybot.xyz/fun/fortune');
        return await (await res.json())
    }

    async insults() {
        const res = await fetch('https://api.cherrybot.xyz/fun/fortune');
        return await (await res.json())
    }

};
