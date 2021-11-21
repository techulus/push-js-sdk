const axios = require("axios");
const debug = require("debug")("push-sdk");

var PushClient = function () {
  /**
   * Client to connect to Push api
   */
  this.initialize.apply(this, arguments);
};

PushClient.prototype = {
  API_BASE_URL: "https://push.techulus.com/api/v1",

  /**
   * Initialize the SDK using API Key
   * Get API Key from https://push.techulus.com
   *
   * @param apiKey
   */
  initialize: function (apiKey) {
    debug("Initialize", apiKey);
    this.apiKey = apiKey;
  },

  /**
   * Send a notification
   *
   * @param title
   * @param body
   */
  notify: async function (title, body, link = null) {
    debug("Notify", title, body, link);

    if (!this.apiKey) {
      return reject(new Error("API Key is missing"));
    }

    if (!(title && body)) {
      return reject(new Error("Title and body is required"));
    }

    let requestBody = {
      title,
      body,
    };

    debug("Request body", requestBody);

    if (link) {
      requestBody.link = link;
    }

    try {
      const response = await axios.post(
        `${this.API_BASE_URL}/notify/${this.apiKey}`,
        requestBody
      );

      debug("Send request", requestBody);

      return response?.data;
    } catch (error) {
      debug(error.response.data);

      throw new Error(
        `[${error.response.status}] ${error.response?.data?.message}`
      );
    }
  },
};

module.exports = PushClient;
