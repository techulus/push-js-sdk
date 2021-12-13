const { Push } = require("../lib/push");
const nock = require("nock");

const title = "test title";
const body = "test body";
const link = "https://example.com";
const image = "https://example.com/image.png";

describe("Push client", () => {
  test("can initialise", () => {
    const client = new Push("test");

    expect(client).not.toBeNull();
    expect(client.apiKey).toEqual("test");
    expect(client.notify).toEqual(expect.any(Function));
  });

  test("can send notification", async () => {
    const client = new Push("test");

    nock("https://push.techulus.com/api/v1")
      .post("/notify/test", {
        title,
        body,
      })
      .reply(200, { success: true });

    await client.notify(title, body);
  });

  test("can send notification with link", async () => {
    const client = new Push("test");

    nock("https://push.techulus.com/api/v1")
      .post("/notify/test", {
        title,
        body,
        link,
      })
      .reply(200, { success: true });

    await client.notify(title, body, { link });
  });

  test("can send notification with image", async () => {
    const client = new Push("test");

    nock("https://push.techulus.com/api/v1")
      .post("/notify/test", {
        title,
        body,
        image,
      })
      .reply(200, { success: true });

    await client.notify(title, body, { image });
  });

  test("can send notification with link & image", async () => {
    const client = new Push("test");

    nock("https://push.techulus.com/api/v1")
      .post("/notify/test", {
        title,
        body,
        link,
        image,
      })
      .reply(200, { success: true });

    await client.notify(title, body, { link, image });
  });
});
