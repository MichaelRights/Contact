const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const request = require("request");
const path = require("path");

app.use(cors());

app.use(express.static("client"));
app.use(express.json());

const viberToken = "4dd7486adb67d0e5-1d2b253e4cb08827-4229ac22813666e";

const server = http.createServer(app);
app.get("/callback", (req, res) => {
  res.status(200).send({
    event: "webhook",
    timestamp: 1457764197627,
    message_token: 241256543215,
  });
});
app.get("/set_webhook", (req, res) => {
  request(
    {
      url: "https://chatapi.viber.com/pa/set_webhook",
      headers: {
        "X-Viber-Auth-Token": viberToken,
      },
      method: "POST",
      body: JSON.stringify({
        url: "https://addcontactt.herokuapp.com/callback",
        event_types: [
          "delivered",
          "seen",
          "failed",
          "subscribed",
          "unsubscribed",
          "conversation_started",
        ],
        send_name: true,
        send_photo: true,
      }),
    },
    (error, response) => {
      res.send(response.body);
    },
  );
});

app.get("/get_account_info", (req, res) => {
  request(
    {
      url: "https://chatapi.viber.com/pa/get_account_info",
      headers: {
        "X-Viber-Auth-Token": viberToken,
      },
      method: "POST",
      body: JSON.stringify({
        url: "https://addcontactt.herokuapp.com/",
        event_types: [
          "delivered",
          "seen",
          "failed",
          "subscribed",
          "unsubscribed",
          "conversation_started",
        ],
        send_name: true,
        send_photo: true,
      }),
    },
    (error, response) => {
      res.send(response.body);
    },
  );
});

app.get("/send_message", (req, res) => {
  request(
    {
      url: "https://chatapi.viber.com/pa/send_message",
      headers: {
        "X-Viber-Auth-Token": viberToken,
      },
      method: "POST",
      body: JSON.stringify({
        receiver: "rmP/uW++SMfOUeH3nZ6YbA==",
        min_api_version: 1,
        sender: {
          name: "TrafficSBot",
        },
        tracking_data: "tracking data",
        type: "text",
        text: "Hello world!",
      }),
    },
    (error, response) => {
      res.send(response.body);
    },
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});
server.listen(8080, () => {
  console.log("server stared");
});
/*
require("dotenv").config();
const Bot = require("viber-bot");
const ViberBot = Bot.Bot;
const BotEvents = Bot.Events;

const TextMessage = Bot.Message.Text;
const UrlMessage = Bot.Message.Url;
const ContactMessage = Bot.Message.Contact;
const PictureMessage = Bot.Message.Picture;
const VideoMessage = Bot.Message.Video;
const LocationMessage = Bot.Message.Location;
const StickerMessage = Bot.Message.Sticker;
const FileMessage = Bot.Message.File;
const RichMediaMessage = Bot.Message.RichMedia;
const KeyboardMessage = Bot.Message.Keyboard;

const ngrok = require("./get_public_url");

function say(response, message) {
  response.send(new TextMessage(message));
}

function checkUrlAvailability(botResponse, text_received) {
  let sender_name = botResponse.userProfile.name;
  let sender_id = botResponse.userProfile.id;

  if (text_received === "") {
    say(botResponse, "I need a Text to check");
    return;
  }

  // say(botResponse, 'One second...Let me check!');
  // setTimeout(function() {
  //     say(botResponse, 'Here comes the answer :P!');
  // }, 1000);

  let message;
  if (text_received === "text") {
    // ================================
    // TextMessage object
    // ================================
    message = new TextMessage("hello world");
  } else if (text_received === "url") {
    // ================================
    // Url Message object
    // ================================
    let url = "https://google.com";
    message = new UrlMessage(url);
  } else if (text_received === "contact") {
    // ================================
    // Contact Message object
    // ================================
    let contactName = "Ko Ko";
    let contactPhoneNumber = "09420084765";
    message = new ContactMessage(contactName, contactPhoneNumber);
  } else if (text_received === "picture") {
    // ================================
    // Picture Message object
    // ================================
    let url =
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    message = new PictureMessage(url);
  } else if (text_received === "video") {
    // ================================
    // Video Message object
    // ================================
    let url =
      "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4";
    let size = 1;
    message = new VideoMessage(url, size);
  } else if (text_received === "location") {
    // ================================
    // Location Message object
    // ================================
    let latitude = "16.7985897";
    let longitude = "96.1473162";
    message = new LocationMessage(latitude, longitude);
  } else if (text_received === "sticker") {
    // ================================
    // Sticker Message object
    // https://developers.viber.com/docs/tools/sticker-ids/
    // ================================
    let stickerId = "40133";
    message = new StickerMessage(stickerId);
  } else if (text_received === "file") {
    // ================================
    // File Message object
    // ================================
    let url =
      "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf";
    let sizeInBytes = "102400";
    let filename = "FileMessageTest.pdf";
    message = new FileMessage(url, sizeInBytes, filename);
  } else if (text_received === "rich_media") {
    // ================================
    // RichMedia Message object
    // ================================
    const SAMPLE_RICH_MEDIA = {
      ButtonsGroupColumns: 6,
      ButtonsGroupRows: 5,
      BgColor: "#FFFFFF",
      Buttons: [
        {
          ActionBody: "https://www.google.com",
          ActionType: "open-url",
          BgMediaType: "picture",
          Image:
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          BgColor: "#000000",
          TextOpacity: 60,
          Rows: 4,
          Columns: 6,
        },
        {
          ActionBody: "https://www.facebook.com",
          ActionType: "open-url",
          BgColor: "#85bb65",
          Text: "Buy",
          TextOpacity: 60,
          Rows: 1,
          Columns: 6,
        },
      ],
    };
    message = new RichMediaMessage(SAMPLE_RICH_MEDIA);
  } else if (text_received === "keyboard") {
    // ================================
    // Keyboard Message object
    // ================================
    const SAMPLE_KEYBOARD = {
      Type: "keyboard",
      Revision: 1,
      Buttons: [
        {
          Columns: 2,
          Rows: 2,
          BgColor: "#e6f5ff",
          BgMedia: "https://image.flaticon.com/icons/png/512/58/58679.png",
          BgMediaType: "picture",
          BgLoop: true,
          ActionType: "reply",
          ActionBody: "Yes",
        },
        {
          Columns: 2,
          Rows: 2,
          BgColor: "#e6f5ff",
          BgMedia: "https://image.flaticon.com/icons/png/512/545/545676.png",
          BgMediaType: "picture",
          BgLoop: true,
          ActionType: "reply",
          ActionBody: "No",
        },
      ],
    };
    message = new KeyboardMessage(SAMPLE_KEYBOARD);
  } else {
    message = new TextMessage("Hi!" + sender_name + " (" + sender_id + ")");
  }
  console.log(message);
  botResponse.send(message);
}

const bot = new ViberBot({
  authToken: "4dd7486adb67d0e5-1d2b253e4cb08827-4229ac22813666e",
  name: "Viber Bot",
  avatar: "https://developers.viber.com/docs/img/stickers/40122.png", // It is recommended to be 720x720, and no more than 100kb.
});

// The user will get those messages on first registration
bot.onSubscribe((response) => {
  say(
    response,
    `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`,
  );
});

// Perfect! Now here's the key part:
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
  // This sample bot can answer only text messages, let's make sure the user is aware of that.
  if (!(message instanceof TextMessage)) {
    say(response, `Sorry. I can only understand text messages.`);

    if (message instanceof PictureMessage) {
      say(response, `You sent picture message`);
    }
  }
});

bot.onTextMessage(/./, (message, response) => {
  checkUrlAvailability(response, message.text);
});

bot
  .getBotProfile()
  .then((response) => console.log(`Bot Named: ${response.name}`));

// Server
if (process.env.NOW_URL || "https://addcontactt.herokuapp.com/") {
  const http = require("http");
  const port = 5000;

  http
    .createServer(bot.middleware())
    .listen(port, () => bot.setWebhook("https://addcontactt.herokuapp.com/"));
} else {
  return ngrok
    .getPublicUrl()
    .then((publicUrl) => {
      const http = require("http");
      const port = 5000;

      console.log("publicUrl => ", publicUrl);

      http
        .createServer(bot.middleware())
        .listen(port, () => bot.setWebhook(publicUrl));
    })
    .catch((error) => {
      console.log("Can not connect to ngrok server. Is it running?");
      console.error(error);
      process.exit(1);
    });
}
*/
