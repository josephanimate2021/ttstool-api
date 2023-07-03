# TTS Tool Api

A Text To Speech Api that you can use in your app

## Install

    npm install josephanimate2021/ttstool-api

## Usage

```js
    const ttstool = require("ttstool-api");
    // get the voices
    let voices;
    ttstool.getVoices().then(inf => voices = inf);
    // generate an mp3 file from the user's text and voice lang.
    async function genMp3(voiceLang, text) {
        return await ttstool.genMp3(voiceLang, text);
    }
```

