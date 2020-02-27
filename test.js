const Push = require('./index');
const pushClient = new Push(process.env.API_KEY || 'api_key');

const test = async () => {
  try {
    console.log('Legen... wait for it');
    await pushClient.notify('Testing', 'taddaaaaaaaaa 🎉');
    console.log('dary!!!');
  } catch (e) {
    // handle error
    console.error("error", e.message);
  }
};

// let it rip!
test();
