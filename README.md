# TTS Tool Api

A Text To Speech Api that you can use in your app

## Install

    npm install josephanimate2021/ttstool-api

## Usage

```js
    const tts = require("ttstool-api");
    // get the voices
    let info;
    tts.getVoices().then(inf => info = inf);
    // generate an mp3 buffer from the user's text and voice name.
    async function genMp3(voiceName, text, readStream = false) {
        return await tts.genMp3(voiceName, text, readStream);
    }
```

