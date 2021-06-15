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
- [Built with](#built_using)
- [Made by](#authors)

## 💭 How it works <a name = "working"></a>

This module is powered by `node-fetch`.

You request a certain method from the module -> module interacts with https://api.cherrybot.xyz -> https://api.cherrybot.xyz sends back JSON data -> module returns the JSON data to you.

## 🎈 Example <a name = "example"></a>

```js
let eightball = await new API.Fun().eightball('Will i be successful?')
console.log(eightball) // { status: 200, question: 'Will i be successful?', answer: 'Yes - definitely.' }

let img = await new API.Images().blush()
console.log(img) // { status: 200, image: 'https://cdn.cherrybot.xyz/images/blush/blush_38.gif', id: 38 }
```

## 🔄 Methods <a name = "methods"></a>

# Images
```js
API.Images().blush()
API.Images().cry()
API.Images().hug()
API.Images().kiss()
API.Images().pat()
API.Images().slap()
```

# Fun
```js
API.Fun().eightball(question)
API.Fun().advice()
API.Fun().fortune()
API.Fun().insults()
```

## ⛏️ Built Using <a name = "built_using"></a>

- [node.js](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [node-fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings window.fetch to Node.js

## ✍️ Authors <a name = "authors"></a>

- [@clap](https://dsc.bio/clap) - Developer of the ch$rry API, wrapper and discord bot.