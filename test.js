const tts = require("./index");
const fs = require("fs");
tts.getVoices().then(inf => { // get the voices
        console.log(inf);
        if (inf) {
                const keys = Object.keys(inf.voices);
                for (let i = 0; i < 8; i++) { // limit is set to 8 because ttstool cannot handle more than 8 requests.
                        tts.genMp3(keys[i], 'test').then(buffer => { // generate an mp3 buffer
                                console.log(buffer);
                                if (buffer) {
                                        if (!fs.existsSync('./files')) fs.mkdirSync('./files');
                                        fs.writeFileSync(`./files/${keys[i]}.mp3`, buffer);
                                }
                        }).catch(console.error);
                        tts.genMp3(keys[i], 'test', true).then(stream => { // generate an mp3 stream
                                console.log(stream);
                                if (stream) {
                                        if (!fs.existsSync('./files')) fs.mkdirSync('./files');
                                        const writeStream = fs.createWriteStream(`./files/${keys[i]}-stream.mp3`);
                                        if (typeof stream.on == "function") stream.pipe(writeStream);
                                        else writeStream.end(stream);
                                }
                        }).catch(console.error);
                }
        }
}).catch(console.error);
