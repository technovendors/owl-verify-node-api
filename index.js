let req = require('request'),
    querystring = require('querystring');

module.exports = function(url, apiKey) {
    this.url = url;
    this.apiKey = apiKey;
};

let funcObj = {
    createList: function(o, cb) {
        if (!o.list_name) cb(new Error('Missing "list_name" parameter'), null);
        else {
            console.log(this.url + 'email/lists');
            this.request('email/lists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-api-key': this.apiKey,
                },
                body: querystring.stringify({
                    list_name: o.list_name
                })
            }, function(err, res, body) {
                if (err) cb(err, null);
                else {
                    cb(null, body);
                }
            });
        }
    },
    request: function(path, o,cb) {
        req({
            url: this.url + path,
            method: o.method,
            headers: o.headers,
            body: o.body
        }, cb);
    }
};

for (var k in funcObj) module.exports.prototype[k] = funcObj[k];
