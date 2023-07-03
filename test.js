const tts = require("./index");
tts.getVoices().then(inf => {
        console.log(inf);
        if (inf) {
                Object.keys(inf.voices).forEach(i => {
                        const info inf.voices[i];
                        tts.genMp3(info.desc, 'test').then(console.log).catch(console.error);
                });
        }
}).catch(console.error);
