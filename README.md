<img width="100" src="https://push.techulus.com/_next/image?url=%2Fimages%2Flogo.svg&w=96&q=75"/>

# Push JavaScript SDK

Get custom real-time notifications on your iOS & Android devices

## Pre-requisites

To run this SDK you'll need:

- An API key from Push (https://push.techulus.com/), to get the API key you've to install Push's iOS or Android app and create an account.

## Install

- Using NPM -> `npm i push-sdk`
- Using Yarn -> `yarn add push-sdk`

## Usage

Import and initialise the SDK using your API key

```javascript
  const Push = require('push-sdk');
  const pushClient = new Push('your_api_key');
```

### Sending notification using `pushClient.notify` method

```javascript
const sendNotification = async () => {
  try {
    await pushClient.notify('Title', 'Body');
  } catch (e) {
    // handle error
  }
};
```

```javascript
const sendNotification = async () => {
  try {
    await pushClient.notify('Title', 'Body', 'Link');
  } catch (e) {
    // handle error
  }
};
```

## Support
Feature Request, Bugs and Ideas can be added [here.](https://pushbytechulus.freshdesk.com/support/tickets/new)
