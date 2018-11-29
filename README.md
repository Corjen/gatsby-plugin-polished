# gatsby-plugin-polished

A [Gatsby](https://github.com/gatsbyjs/gatsby) plugin for
[polished](https://polished.js.org/). It's not required to use polished, but it adds the polished babel plugin, which removes the (tiny) runtime impact.

## Install

`npm install --save polished gatsby-plugin-polished babel-plugin-polished`

## How to use

Edit `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-polished`
    }
  ]
}
```
