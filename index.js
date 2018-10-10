let req = require('request'),
    querystring = require('querystring');

module.exports = function(apiKey, url = 'https://cnai48194m.execute-api.us-east-2.amazonaws.com/v1/') {
    this.apiKey = apiKey;
    this.url = url ;
};

let funcObj = {
    createList: function(o, cb) {
        if (!o.list_name) return cb(new Error('Missing "list_name" parameter'), null);

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
    },
    bulkSubscribe: function(o, cb) {
        if (!o.list_id) return cb(new Error('Missing "list_id" parameter'), null);
        /*
        o.data.forEach(function(emailData) {
            if (!emailData.email) return cb(new Error('Missing "email" parameter'), null);
        });
        */

        let path = 'email/lists/' + o.list_id + '/subscribers';
        delete o.list_id;

        this.request(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
            },
            body: JSON.stringify({
                "data": o.data
            })
        }, function(err, res, body) {
            if (err) cb(err, null);
            else {
                cb(null, body);
            }
        });
    },
    subscribe: function(o, cb) {
        if (!o.list_id) return cb(new Error('Missing "list_id" parameter'), null);
        if (!o.email) return cb(new Error('Missing "email" parameter'), null);

        let path = 'email/lists/' + o.list_id + '/subscribers';
        delete o.list_id;

        this.request(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
            },
            body: JSON.stringify({
                "data": [
                    o
                ]
            })
        }, function(err, res, body) {
            if (err) cb(err, null);
            else {
                cb(null, body);
            }
        });
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
