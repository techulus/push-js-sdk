const Push = require("./index");
const pushClient = new Push(process.env.API_KEY || "api_key");

const test = async () => {
  try {
    console.log("Legen... wait for it");
    const result = await pushClient.notify("Testing", "taddaaaaaaaaa 🎉");
    console.log("dary!!!");
    console.log("result", result);
  } catch (e) {
    // handle error
    console.error("error", e.message);
  }
};

const testWithLink = async () => {
  try {
    console.log("Legen... wait for it");
    const result = await pushClient.notify(
      "Testing",
      "taddaaaaaaaaa 🎉",
      "https://www.npmjs.com/package/push-sdk"
    );
    console.log("dary!!!");
    console.log("result", result);
  } catch (e) {
    // handle error
    console.error("error", e.message);
  }
};

// let it rip!
test();
testWithLink();
