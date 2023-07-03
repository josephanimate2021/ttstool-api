const tts = require("./index");
const fs = require("fs");
tts.getVoices().then(inf => { // get the voices
        console.log(inf);
        if (inf) {
                for (const i in inf.voices) {
                        const info inf.voices[i];
                        tts.genMp3(info.desc, 'test').then(buffer => { // generate an mp3 buffer
                                console.log(buffer);
                                if (buffer) fs.writeFileSync(`./files/${info.desc}.mp3`, buffer);
                        }).catch(console.error);
                }
        }
}).catch(console.error);
