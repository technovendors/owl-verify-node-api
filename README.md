<h1 align="center">
  Owl Verify API for Node.js
</h1>

## Installation

Rull the following command in your project

```sh
npm i @technovendors/owl-verify-node-api
```

<br>

## Examples

First of all add this.

```js
var OWLVerify = require('@technovendors/owl-verify-node-api'),
    owlVerify = new OWLVerify('https://owl-verification-url/', 'your_api_key');
```

<br>

## API

#### `createList`

```js
var params = {
  list_name: 'your list name'
}

owlVerify.createList(params, function(err, result) {
    if (err) console.log(err.toString());
    else console.log(result);
});
