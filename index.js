const request = require('request');

var PushClient = function () {
  /**
   * Client to connect to Push api
   */
  this.initialize.apply(this, arguments);
};

PushClient.prototype = {
  API_BASE_URL: 'https://push.techulus.com/api/v1',

  /**
   * Initialize the SDK using API Key
   * Get API Key from https://push.techulus.com
   *
   * @param apiKey
   */
  initialize: function (apiKey) {
    this.apiKey = apiKey;
  },

  /**
   * Send a notification
   *
   * @param title
   * @param body
   */
  notify: function (title, body) {
    return new Promise((resolve, reject) => {
      if (!this.apiKey) {
        return reject(new Error("API Key is missing"));
      }

      if (!(title && body)) {
        return reject(new Error("Title and body is required"));
      }

      request
        .post({
          url : `${this.API_BASE_URL}/notify/${this.apiKey}`,
          body: {
            "title": title,
            "body" : body,
          },
          json: true,
        }, function (err, res, body) {
          if (err) {
            return reject(err);
          }

          if (res.statusCode !== 200) {
            return reject(body);
          } else {
            return resolve(body);
          }
        });
    });
  },
};


module.exports = PushClient;
