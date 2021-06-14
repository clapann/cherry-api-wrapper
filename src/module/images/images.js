const fetch = require(`node-fetch`);

module.exports = class Images {

    async blush() {
        const res = await fetch('https://api.cherrybot.xyz/images/blush');
        return await (await res.json())
    }

    async cry() {
        const res = await fetch('https://api.cherrybot.xyz/images/cry');
        return await (await res.json())
    }

    async hug() {
        const res = await fetch('https://api.cherrybot.xyz/images/hug');
        return await (await res.json())
    }

    async kiss() {
        const res = await fetch('https://api.cherrybot.xyz/images/kiss');
        return await (await res.json())
    }

    async pat() {
        const res = await fetch('https://api.cherrybot.xyz/images/pat');
        return await (await res.json())
    }

    async slap() {
        const res = await fetch('https://api.cherrybot.xyz/images/slap');
        return await (await res.json())
    }

};
