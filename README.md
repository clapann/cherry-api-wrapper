<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn.cherrybot.xyz/cherry.png" alt="Bot logo"></a>
</p>

<h3 align="center">cherry-api-wrapper</h3>

---

<p align="center"> 🤖 This node module is a wrapper for the ch$rry API.
    <br> 
</p>

## 📝 Table of Contents

- [How it works](#working)
- [Examples](#example)
- [Methods](#methods)
- [Rate limits](#ratelimits)
- [API Keys](#keys)
- [Built with](#built_using)
- [Made by](#authors)

## 💭 How it works <a name = "working"></a>

This module is powered by `node-fetch`.

You request a certain method from the module -> module interacts with https://api.cherrybot.xyz -> https://api.cherrybot.xyz sends back JSON data -> module returns the JSON data to you.

## 🎈 Example <a name = "example"></a>

```js
const API = require('cherry-api-wrapper')
const apikey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

let eightball = await new API.Fun().eightball('Will i be successful?', apikey)
console.log(eightball) // { status: 200, question: 'Will i be successful?', answer: 'Yes - definitely.' }

let img = await new API.Images().blush(apikey)
console.log(img) // { status: 200, image: 'https://cdn.cherrybot.xyz/images/blush/blush_38.gif', id: 38 }
```

## 🔄 Methods <a name = "methods"></a>

# 📷 Images
```js
API.Images().blush(apikey)
API.Images().cry(apikey)
API.Images().hug(apikey)
API.Images().kiss(apikey)
API.Images().pat(apikey)
API.Images().slap(apikey)
```

# 🧸 Fun
```js
API.Fun().eightball(question, apikey)
API.Fun().advice(apikey)
API.Fun().fortune(apikey)
API.Fun().insults(apikey)
```

# ⚠️ Rate Limits <a name = "ratelimits"></a>

The ch$rry API allows you to make a request per second to prevent spam. If you make a request while your on the 1 second rate limit it will return a 429 status code
"The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time."

# 🔒 API Keys <a name = "keys"></a>

To apply for a ch$rry API key join our Discord server (https://cherrybot.xyz/discord) and make a ticket explaining what you are using the API key for! (We are accepting easily and not being strict about it and youll probably get accepted within an hour or two.)

## ⛏️ Built Using <a name = "built_using"></a>

- [node.js](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [node-fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings window.fetch to Node.js

## ✍️ Authors <a name = "authors"></a>

- [@clap](https://dsc.bio/clap) - Developer of the ch$rry API, wrapper and discord bot.