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
    owlVerify = new OWLVerify('your_api_key');
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
```

#### `subscribe`

```js
var params = {
  list_id: 'your_list_id',
  email: 'abc@xyz.com'
}

owlVerify.subscribe(params, function(err, result) {
    if (err) console.log(err.toString());
    else console.log(result);
});
```

#### `bulkSubscribe`

```js
var params = {
  list_id: 'your_list_id',
  data: [
      {
          email: 'abc@xyz.com',
      },
      {
          email: 'mno@xyz.com',
      }
  ]
}

owlVerify.bulkSubscribe(params, function(err, result) {
    if (err) console.log(err.toString());
    else console.log(result);
});
```
