const tts = require("./index");
const fs = require("fs");
tts.getVoices().then(inf => { // get the voices
        console.log(inf);
        if (inf) {
                const keys = Object.keys(inf.voices);
                for (let i = 0; i < 10; i++) { // limit is set to 10 because ttstool cannot handle more than 10 requests.
                        tts.genMp3(keys[i], 'test').then(buffer => { // generate an mp3 buffer
                                console.log(buffer);
                                if (buffer) {
                                        if (!fs.existsSync('./files')) fs.mkdirSync('./files');
                                        fs.writeFileSync(`./files/${keys[i]}.mp3`, buffer);
                                }
                        }).catch(console.error);
                }
        }
}).catch(console.error);
