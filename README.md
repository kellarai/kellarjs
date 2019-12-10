# kellarjs - JS client for Kellar

[![Build Status](https://travis-ci.com/kellarai/kellarjs.svg?branch=master)](https://travis-ci.com/kellarai/kellarjs)

This is a JavaScript/TypeScript client for Kellar, the AI-powered faker. Currently, Kellar is in a beta stage and not yet open for public. For more information, check www.kellar.ai

Install with:

```
npm install kellar
```

Usage:

```
const Kellar = require('kellar');

// Your API key and id for model
const secrets = {
    apiKey: 'foo',
    modelId: 'bar',
};

const client = new Kellar(secrets);

// Generate 100 rows of data
client.generate(100).then((d) => {
  console.log(d)
}).catch((e) => console.log(e))

```
