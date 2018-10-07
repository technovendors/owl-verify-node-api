const request = require('request');
const querystring = require('querystring');

module.exports = (url, apiKey) => {
  this.url = url;
  this.apiKey = apiKey;
};

let funObj = {
    createList: (o, cb) => {
        if (!o.list_name) cb(new Error('Missing "list_name" parameter'), null);

        request({
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-api-key': this.apiKey,
            },
            url: this.url + 'email/lists',
            body: querystring.stringify({
                list_name: o.list_name
            })
        }, o, (err, res, body) => {
            if (err) cb(err, null);
            else {
                cb(null, body);
            }
        });
    },
    subscribe: (o, cb) => {

    }
};

for (var k in funObj) module.exports.prototype[k] = funObj[k];
