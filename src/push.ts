import axios, { AxiosResponse } from "axios";

const debug = require("debug")("push-sdk");

export interface IPushOptions {
  link?: string;
  image?: string;
}

interface IRequestBody extends IPushOptions {
  title: string;
  body: string;
}

export class Push {
  private apiBaseUrl = "https://push.techulus.com/api/v1";

  apiKey: string;

  constructor(apiKey: string) {
    debug("Initialize", apiKey);
    this.apiKey = apiKey;
  }

  public async notify(title: string, body: string, options: IPushOptions = {}) {
    debug("Notify", title, body, options);

    if (!this.apiKey) {
      throw new Error("API Key is missing");
    }

    if (!(title && body)) {
      throw new Error("Title and body is required");
    }

    if (options && typeof options !== "object") {
      throw new Error("Invalid options provided");
    }

    let requestBody: IRequestBody = {
      title,
      body,
    };

    debug("Request body", requestBody);

    if (options && options.link) {
      requestBody.link = options.link;
    }

    if (options && options.image) {
      requestBody.image = options.image;
    }

    try {
      const response: AxiosResponse = await axios.post(
        `${this.apiBaseUrl}/notify/${this.apiKey}`,
        requestBody
      );

      debug("Send request", requestBody);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        debug(error.response && error.response.data);

        throw new Error(
          `[${error.response && error.response.status}] ${
            error.response && error.response.data.message
          }`
        );
      } else {
        throw error;
      }
    }
  }
}
