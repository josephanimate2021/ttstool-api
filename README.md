# TTS Tool Api

A Text To Speech Api that you can use in your app

## Install

    npm install josephanimate2021/ttstool-api

## Usage

```js
    const ttstool = require("ttstool-api");
    // get the voices
    const voices = ttstool.getVoices()
    // generate an mp3 file from the user's text and voice lang.
    function genMp3(voiceLang, text) {
        return ttstool.genMp3(voiceLang, text);
    }
```

