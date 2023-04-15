<img width="100" src="https://push.techulus.com/images/logo.png"/>

# Push JavaScript SDK

Get custom real-time notifications on your iOS & Android devices

**⚠️⚠️ `v2.x.x` has breaking changes, import has changed ⚠️⚠️**

## Pre-requisites

To run this SDK you'll need:

- An API key from Push (https://push.techulus.com/), to get the API key you've to install Push's iOS or Android app and create an account.

## Install

- Using NPM -> `npm i push-sdk`
- Using Yarn -> `yarn add push-sdk`

## Usage

Import and initialise the SDK using your API key

```javascript
const { Push } = require("push-sdk");
const pushClient = new Push("your_api_key");
```

or (TypeScript)

```typescript
import { Push } from "push-sdk";
const pushClient = new Push("your_api_key");
```

### Sending notification using `pushClient.notify` method

Notification with title and body

```javascript
const sendNotification = async () => {
  try {
    await pushClient.notify("Title", "Body");
  } catch (e) {
    // handle error
  }
};
```

Notification with additional options (link or image)

```javascript
const sendNotification = async () => {
  try {
    await pushClient.notify("Title", "Body", {
      link: "https://techulus.com",
      image: "https://techulus.com/assets/img/logo.png",
    });
  } catch (e) {
    // handle error
  }
};
```

## Support

Feature Request, Bugs and Ideas can be added [here.](https://pushbytechulus.freshdesk.com/support/tickets/new)
