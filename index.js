/*
 * TTS Tool Api
 * Yugandar, 
 * i swear to god, if you think about stealing this repo as well, then you will be in very big trouble. Learn to code your own stuff for godsakes
 */
// modules
const https = require("https");
const fs = require("fs");
const req = require("request");
// vars
const allLanguages = [
  ["bo", "Boro", "à¤¬à¤¡à¤¼"],
  ["aa", "Afar", "Afar"],
  ["ab", "Abkhazian", "ÐÒ§ÑÑƒÐ°"],
  ["af", "Afrikaans", "Afrikaans"],
  ["ak", "Akan", "Akana"],
  ["als", "Alemannic", "Alemannisch"],
  ["am", "Amharic", "áŠ áˆ›áˆ­áŠ›"],
  ["an", "Aragonese", "AragonÃ©s"],
  ["ang", "Angal", "Angal Heneng"],
  ["ang", "Anglo-SaxonÂ / Old English", "Englisc"],
  ["ar", "Arabic", "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"],
  ["arc", "Aramaic", "Ü£Ü˜ÜªÜ¬"],
  ["as", "Assamese", "à¦…à¦¸à¦®à§€à¦¯à¦¼à¦¾"],
  ["ast", "Asturian", "Asturianu"],
  ["av", "Avar", "ÐÐ²Ð°Ñ€"],
  ["awa", "Awadhi", "Awadhi"],
  ["ay", "Aymara", "Aymar"],
  ["az", "Azerbaijani", "AzÉ™rbaycanca / Ø¢Ø°Ø±Ø¨Ø§ÙŠØ¬Ø§Ù†"],
  ["ba", "Bashkir", "Ð‘Ð°ÑˆÒ¡Ð¾Ñ€Ñ‚"],
  ["bar", "Bavarian", "Boarisch"],
  ["bat-smg", "Samogitian", "Å½emaitÄ—Å¡ka"],
  ["bcl", "Bikol", "Bikol Central"],
  ["be", "Belarusian", "Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ"],
  ["be-x-old", "Belarusian (TaraÅ¡kievica)", "Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ (Ñ‚Ð°Ñ€Ð°ÑˆÐºÐµÐ²Ñ–Ñ†Ð°)"],
  ["bg", "Bulgarian", "Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸"],
  ["bh", "Bihari", "à¤­à¥‹à¤œà¤ªà¥à¤°à¥€"],
  ["bi", "Bislama", "Bislama"],
  ["bm", "Bambara", "Bamanankan"],
  ["bn", "Bengali", "à¦¬à¦¾à¦‚à¦²à¦¾"],
  ["bo", "Tibetan", "à½–à½¼à½‘à¼‹à½¡à½²à½‚Â / Bod skad"],
  ["bpy", "Bishnupriya Manipuri", "à¦‡à¦®à¦¾à¦° à¦ à¦¾à¦°/à¦¬à¦¿à¦·à§à¦£à§à¦ªà§à¦°à¦¿à¦¯à¦¼à¦¾ à¦®à¦£à¦¿à¦ªà§à¦°à§€"],
  ["br", "Breton", "Brezhoneg"],
  ["bs", "Bosnian", "Bosanski"],
  ["bug", "Buginese", "á¨…á¨” á¨•á¨˜á¨á¨—Â / Basa Ugi"],
  ["bxr", "Buriat (Russia)", "Ð‘ÑƒÑ€ÑÐ°Ð´ Ñ…ÑÐ»ÑÐ½"],
  ["ca", "Catalan", "CatalÃ "],
  ["cdo", "Min Dong Chinese", "MÃ¬ng-dÄ•Ì¤ng-ngá¹³Ì„ / é–©æ±èªž"],
  ["ce", "Chechen", "ÐÐ¾Ñ…Ñ‡Ð¸Ð¹Ð½"],
  ["ceb", "Cebuano", "Sinugboanong Binisaya"],
  ["ch", "Chamorro", "Chamoru"],
  ["cho", "Choctaw", "Choctaw"],
  ["chr", "Cherokee", "á£áŽ³áŽ©"],
  ["chy", "Cheyenne", "TsetsÃªhestÃ¢hese"],
  ["ckb", "Kurdish (Sorani)", "Ú©ÙˆØ±Ø¯ÛŒ"],
  ["co", "Corsican", "Corsu"],
  ["cr", "Cree", "Nehiyaw"],
  ["cs", "Czech", "ÄŒesky"],
  ["csb", "Kashubian", "KaszÃ«bsczi"],
  ["cu", "Old Church SlavonicÂ / Old Bulgarian", "ÑÐ»Ð¾Ð²Ñ£Ð½ÑŒÑÐºÑŠÂ / slovÄ›nÄ­skÅ­"],
  ["cv", "Chuvash", "Ð§ÄƒÐ²Ð°Ñˆ"],
  ["cy", "Welsh", "Cymraeg"],
  ["da", "Danish", "Dansk"],
  ["de", "German", "Deutsch"],
  ["diq", "Dimli", "Zazaki"],
  ["dsb", "Lower Sorbian", "Dolnoserbski"],
  ["dv", "Divehi", "Þ‹Þ¨ÞˆÞ¬Þ€Þ¨Þ„Þ¦ÞÞ°"],
  ["dz", "Dzongkha", "à½‡à½¼à½„à¼‹à½"],
  ["ee", "Ewe", "ÆÊ‹É›"],
  ["el", "Greek", "Î•Î»Î»Î·Î½Î¹ÎºÎ¬"],
  ["en", "English", "English"],
  ["eo", "Esperanto", "Esperanto"],
  ["es", "Spanish", "EspaÃ±ol"],
  ["et", "Estonian", "Eesti"],
  ["eu", "Basque", "Euskara"],
  ["ext", "Extremaduran", "EstremeÃ±u"],
  ["fa", "Persian", "ÙØ§Ø±Ø³ÛŒ"],
  ["ff", "Peul", "Fulfulde"],
  ["fi", "Finnish", "Suomi"],
  ["fiu-vro", "VÃµro", "VÃµro"],
  ["fj", "Fijian", "Na Vosa Vakaviti"],
  ["fo", "Faroese", "FÃ¸royskt"],
  ["fr", "French", "FranÃ§ais"],
  ["frp", "ArpitanÂ / Franco-ProvenÃ§al", "ArpitanÂ / francoprovenÃ§al"],
  ["fur", "Friulian", "Furlan"],
  ["fy", "West Frisian", "Frysk"],
  ["ga", "Irish", "Gaeilge"],
  ["gan", "Gan Chinese", "è´›èªž"],
  ["gbm", "Garhwali", "à¤—à¤¢à¤¼à¤µà¤³à¥€"],
  ["gd", "Scottish Gaelic", "GÃ idhlig"],
  ["gil", "Gilbertese", "Taetae ni kiribati"],
  ["gl", "Galician", "Galego"],
  ["gn", "Guarani", "AvaÃ±e'áº½"],
  ["got", "Gothic", "gutisk"],
  ["gu", "Gujarati", "àª—à«àªœàª°àª¾àª¤à«€"],
  ["gv", "Manx", "Gaelg"],
  ["ha", "Hausa", "Ù‡ÙŽÙˆÙØ³ÙŽ"],
  ["hak", "Hakka Chinese", "å®¢å®¶èªž/Hak-kÃ¢-ngÃ®"],
  ["haw", "Hawaiian", "Hawai`i"],
  ["he", "Hebrew", "×¢×‘×¨×™×ª"],
  ["hi", "Hindi", "à¤¹à¤¿à¤¨à¥à¤¦à¥€"],
  ["ho", "Hiri Motu", "Hiri Motu"],
  ["hr", "Croatian", "Hrvatski"],
  ["ht", "Haitian", "KrÃ¨yol ayisyen"],
  ["hu", "Hungarian", "Magyar"],
  ["hy", "Armenian", "Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶"],
  ["hz", "Herero", "Otsiherero"],
  ["ia", "Interlingua", "Interlingua"],
  ["id", "Indonesian", "Bahasa Indonesia"],
  ["ie", "Interlingue", "Interlingue"],
  ["ig", "Igbo", "Igbo"],
  ["ii", "Sichuan Yi", "ê†‡ê‰™Â / å››å·å½è¯­"],
  ["ik", "Inupiak", "IÃ±upiak"],
  ["ilo", "Ilokano", "Ilokano"],
  ["inh", "Ingush", "Ð“Ó€Ð°Ð»Ð³Ó€Ð°Ð¹"],
  ["io", "Ido", "Ido"],
  ["is", "Icelandic", "Ãslenska"],
  ["it", "Italian", "Italiano"],
  ["iu", "Inuktitut", "áƒá“„á’ƒá‘Žá‘á‘¦"],
  ["ja", "Japanese", "æ—¥æœ¬èªž"],
  ["jbo", "Lojban", "Lojban"],
  ["jv", "Javanese", "Basa Jawa"],
  ["ka", "Georgian", "áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜"],
  ["kg", "Kongo", "KiKongo"],
  ["ki", "Kikuyu", "GÄ©kÅ©yÅ©"],
  ["kj", "Kuanyama", "Kuanyama"],
  ["kk", "Kazakh", "ÒšÐ°Ð·Ð°Ò›ÑˆÐ°"],
  ["kl", "Greenlandic", "Kalaallisut"],
  ["km", "Cambodian", "áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš"],
  ["kn", "Kannada", "à²•à²¨à³à²¨à²¡"],
  ["khw", "Khowar", "Ú©Ú¾ÙˆØ§Ø±"],
  ["ko", "Korean", "í•œêµ­ì–´"],
  ["kr", "Kanuri", "Kanuri"],
  ["ks", "Kashmiri", "à¤•à¤¶à¥à¤®à¥€à¤°à¥€Â / ÙƒØ´Ù…ÙŠØ±ÙŠ"],
  ["ksh", "Ripuarian", "Ripoarisch"],
  ["ku", "Kurdish (Kurmanji)", "KurdÃ®"],
  ["kv", "Komi", "ÐšÐ¾Ð¼Ð¸"],
  ["kw", "Cornish", "Kernewek"],
  ["ky", "Kirghiz", "KÄ±rgÄ±zcaÂ / ÐšÑ‹Ñ€Ð³Ñ‹Ð·Ñ‡Ð°"],
  ["la", "Latin", "Latina"],
  ["lad", "LadinoÂ / Judeo-Spanish", "DzhudezmoÂ / Djudeo-Espanyol"],
  ["lan", "Lango", "Leb LangoÂ / Luo"],
  ["lb", "Luxembourgish", "LÃ«tzebuergesch"],
  ["lg", "Ganda", "Luganda"],
  ["li", "Limburgian", "Limburgs"],
  ["lij", "Ligurian", "LÃ­guru"],
  ["lmo", "Lombard", "Lumbaart"],
  ["ln", "Lingala", "LingÃ¡la"],
  ["lo", "Laotian", "àº¥àº²àº§Â / Pha xa lao"],
  ["lzz", "Laz", "Lazuri / áƒšáƒáƒ–áƒ£áƒ áƒ˜"],
  ["lt", "Lithuanian", "LietuviÅ³"],
  ["lv", "Latvian", "LatvieÅ¡u"],
  ["map-bms", "Banyumasan", "Basa Banyumasan"],
  ["mg", "Malagasy", "Malagasy"],
  ["man", "Mandarin", "å®˜è©±/å®˜è¯"],
  ["mh", "Marshallese", "Kajin MajelÂ / Ebon"],
  ["mi", "Maori", "MÄori"],
  ["min", "Minangkabau", "Minangkabau"],
  ["mk", "Macedonian", "ÐœÐ°ÐºÐµÐ´Ð¾Ð½ÑÐºÐ¸"],
  ["ml", "Malayalam", "à´®à´²à´¯à´¾à´³à´‚"],
  ["mn", "Mongolian", "ÐœÐ¾Ð½Ð³Ð¾Ð»"],
  ["mo", "Moldovan", "MoldoveneascÄƒ"],
  ["mr", "Marathi", "à¤®à¤°à¤¾à¤ à¥€"],
  ["mrh", "Mara", "Mara"],
  ["ms", "Malay", "Bahasa Melayu"],
  ["mt", "Maltese", "bil-Malti"],
  ["mus", "CreekÂ / Muskogee", "Mvskoke"],
  ["mwl", "Mirandese", "MirandÃ©s"],
  ["my", "Burmese", "Myanmasa"],
  ["na", "Nauruan", "Dorerin Naoero"],
  ["nah", "Nahuatl", "Nahuatl"],
  ["nap", "Neapolitan", "Nnapulitano"],
  ["nd", "North Ndebele", "Sindebele"],
  ["nds", "Low GermanÂ / Low Saxon", "PlattdÃ¼Ã¼tsch"],
  ["nds-nl", "Dutch Low Saxon", "Nedersaksisch"],
  ["ne", "Nepali", "à¤¨à¥‡à¤ªà¤¾à¤²à¥€"],
  ["new", "Newar", "à¤¨à¥‡à¤ªà¤¾à¤²à¤­à¤¾à¤·à¤¾Â / Newah Bhaye"],
  ["ng", "Ndonga", "Oshiwambo"],
  ["nl", "Dutch", "Nederlands"],
  ["nn", "Norwegian Nynorsk", "Norsk (nynorsk)"],
  ["no", "Norwegian", "Norsk (bokmÃ¥lÂ / riksmÃ¥l)"],
  ["nr", "South Ndebele", "isiNdebele"],
  ["nso", "Northern Sotho", "Sesotho sa LeboaÂ / Sepedi"],
  ["nrm", "Norman", "NouormandÂ / Normaund"],
  ["nv", "Navajo", "DinÃ© bizaad"],
  ["ny", "Chichewa", "Chi-Chewa"],
  ["oc", "Occitan", "Occitan"],
  ["oj", "Ojibwa", "áŠá“‚á”‘á“ˆá¯á’§áŽá“Â / Anishinaabemowin"],
  ["om", "Oromo", "Oromoo"],
  ["or", "Oriya", "à¬“à¬¡à¬¼à¬¿à¬†"],
  ["os", "OssetianÂ / Ossetic", "Ð˜Ñ€Ð¾Ð½Ð°Ñƒ"],
  ["pa", "PanjabiÂ / Punjabi", "à¨ªà©°à¨œà¨¾à¨¬à©€Â / à¤ªà¤‚à¤œà¤¾à¤¬à¥€Â / Ù¾Ù†Ø¬Ø§Ø¨ÙŠ"],
  ["pag", "Pangasinan", "Pangasinan"],
  ["pam", "Kapampangan", "Kapampangan"],
  ["pap", "Papiamentu", "Papiamentu"],
  ["pdc", "Pennsylvania German", "Deitsch"],
  ["pi", "Pali", "PÄliÂ / à¤ªà¤¾à¤´à¤¿"],
  ["pih", "Norfolk", "Norfuk"],
  ["pl", "Polish", "Polski"],
  ["pms", "Piedmontese", "PiemontÃ¨is"],
  ["ps", "Pashto", "Ù¾ÚšØªÙˆ"],
  ["pt", "Portuguese", "PortuguÃªs"],
  ["qu", "Quechua", "Runa Simi"],
  ["rm", "Raeto Romance", "Rumantsch"],
  ["rmy", "Romani", "RomaniÂ / à¤°à¥‹à¤®à¤¾à¤¨à¥€"],
  ["rn", "Kirundi", "Kirundi"],
  ["ro", "Romanian", "RomÃ¢nÄƒ"],
  ["roa-rup", "Aromanian", "ArmÃ¢neashti"],
  ["ru", "Russian", "Ð ÑƒÑÑÐºÐ¸Ð¹"],
  ["rw", "Rwandi", "Kinyarwandi"],
  ["sa", "Sanskrit", "à¤¸à¤‚à¤¸à¥à¤•à¥ƒà¤¤à¤®à¥"],
  ["sc", "Sardinian", "Sardu"],
  ["scn", "Sicilian", "Sicilianu"],
  ["sco", "Scots", "Scots"],
  ["sd", "Sindhi", "à¤¸à¤¿à¤¨à¤§à¤¿"],
  ["se", "Northern Sami", "DavvisÃ¡megiella"],
  ["sg", "Sango", "SÃ¤ngÃ¶"],
  ["sh", "Serbo-Croatian", "SrpskohrvatskiÂ / Ð¡Ñ€Ð¿ÑÐºÐ¾Ñ…Ñ€Ð²Ð°Ñ‚ÑÐºÐ¸"],
  ["si", "Sinhalese", "à·ƒà·’à¶‚à·„à¶½"],
  ["sk", "Slovak", "SlovenÄina"],
  ["sl", "Slovenian", "SlovenÅ¡Äina"],
  ["sm", "Samoan", "Gagana Samoa"],
  ["sn", "Shona", "chiShona"],
  ["so", "Somalia", "Soomaaliga"],
  ["sq", "Albanian", "Shqip"],
  ["sr", "Serbian", "Ð¡Ñ€Ð¿ÑÐºÐ¸"],
  ["ss", "Swati", "SiSwati"],
  ["st", "Southern Sotho", "Sesotho"],
  ["su", "Sundanese", "Basa Sunda"],
  ["sv", "Swedish", "Svenska"],
  ["sw", "Swahili", "Kiswahili"],
  ["ta", "Tamil", "à®¤à®®à®¿à®´à¯"],
  ["te", "Telugu", "à°¤à±†à°²à±à°—à±"],
  ["tet", "Tetum", "Tetun"],
  ["tg", "Tajik", "Ð¢Ð¾Ò·Ð¸ÐºÓ£"],
  ["th", "Thai", "à¹„à¸—à¸¢Â / Phasa Thai"],
  ["ti", "Tigrinya", "á‰µáŒáˆ­áŠ›"],
  ["tk", "Turkmen", "Ð¢ÑƒÑ€ÐºÐ¼ÐµÐ½Â / ØªØ±ÙƒÙ…Ù†"],
  ["tl", "Tagalog", "Tagalog"],
  ["tlh", "Klingon", "tlhIngan-Hol"],
  ["tn", "Tswana", "Setswana"],
  ["to", "Tonga", "Lea Faka-Tonga"],
  ["tpi", "Tok Pisin", "Tok Pisin"],
  ["tr", "Turkish", "TÃ¼rkÃ§e"],
  ["ts", "Tsonga", "Xitsonga"],
  ["tt", "Tatar", "TatarÃ§a"],
  ["tum", "Tumbuka", "chiTumbuka"],
  ["tw", "Twi", "Twi"],
  ["ty", "Tahitian", "Reo MÄ`ohi"],
  ["udm", "Udmurt", "Ð£Ð´Ð¼ÑƒÑ€Ñ‚ ÐºÑ‹Ð»"],
  ["ug", "Uyghur", "UyÆ£urqÉ™Â / Ø¦Û‡ÙŠØºÛ‡Ø±Ú†Û•"],
  ["uk", "Ukrainian", "Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°"],
  ["ur", "Urdu", "Ø§Ø±Ø¯Ùˆ"],
  ["uz", "Uzbek", "ÐŽÐ·Ð±ÐµÐº"],
  ["uz_AF", "Uzbeki Afghanistan", "Ø§ÙˆØ²Ø¨ÛŒÚ©ÛŒ"],
  ["ve", "Venda", "Tshivená¸“a"],
  ["vi", "Vietnamese", "Viá»‡tnam"],
  ["vec", "Venetian", "VÃ¨neto"],
  ["vls", "West Flemish", "West-Vlaoms"],
  ["vo", "VolapÃ¼k", "VolapÃ¼k"],
  ["wa", "Walloon", "Walon"],
  ["war", "WarayÂ / Samar-Leyte Visayan", "WinarayÂ / Binisaya Lineyte-Samarnon"],
  ["wo", "Wolof", "Wollof"],
  ["xal", "Kalmyk", "Ð¥Ð°Ð»ÑŒÐ¼Ð³"],
  ["xh", "Xhosa", "isiXhosa"],
  ["xmf", "Megrelian", "áƒ›áƒáƒ áƒ’áƒáƒšáƒ£áƒ áƒ˜"],
  ["yi", "Yiddish", "×™×™Ö´×“×™×©"],
  ["yo", "Yoruba", "YorÃ¹bÃ¡"],
  ["za", "Zhuang", "CuenghÂ / TÃ´Ã´Â / å£®è¯­"],
  ["zh", "Chinese", "ä¸­æ–‡"],
  ["zh-classical", "Classical Chinese", "æ–‡è¨€"],
  ["zh-min-nan", "Minnan", "BÃ¢n-lÃ¢m-gÃº"],
  ["zh-yue", "Cantonese", "ç²µèªžÂ / ç²¤è¯­"],
  ["zu", "Zulu", "isiZulu"],
  ["nb", "Norwegian BokmÃ¥l", "Norsk (bokmÃ¥l)"],
  ["zh-tw", "Traditional Chinese", "â€ªä¸­æ–‡(å°ç£)â€¬"],
]
// functions
function getGenderPrefix(gender) { // there are only 2 genders. so this shouldn't be hard.
        switch (gender) {
                case "female": return "F";
                case "male": return "M";
        }
}
function loadRequest(json) { // i sometimes need to loop a request to get it working correctly.
        return new Promise((res, rej) => {
                req(json, (error, response) => {
                        if (error) res({
                                fail: true,
                                error
                        });
                        else res({
                                fail: false,
                                response: JSON.parse(response.body)
                        });
                });
        });
}
// throw the action
module.exports = {
        getVoices() { // gets all of the tts voices in a json format
                return new Promise((res, rej) => {
                        try {
                                var buffers = [];
                                https.get(`https://support.readaloud.app/read-aloud/list-voices/premium`, (r) => {
                                        r.on("data", (d) => buffers.push(d)).on("end", async () => {
                                                const json = JSON.parse(Buffer.concat(buffers));
                                                const inf = {
                                                        voices: {},
                                                        languages: {}
                                                };
                                                for (const lang of allLanguages) inf.languages[lang[0]] = lang[1];
                                                for (const info of json) {
                                                        const voiceName = info.voiceName.split("(")[1].split(")")[0];
                                                        inf.voices[voiceName.toLowerCase()] = {
                                                                country: info.lang.split("-")[1],
                                                                language: info.lang.split("-")[0],
                                                                gender: getGenderPrefix(info.gender),
                                                                arg: info.voiceName,
                                                                lang: info.lang,
                                                                desc: voiceName
                                                        }
                                                }
                                                res(inf);
                                        }).on("error", rej);
                                }).on("error", rej);
                        } catch (e) {
                                rej(e);
                        }
                });
        },
        genMp3(voiceName, text, readStream = false) { // generates an mp3 file
                return new Promise(async (res, rej) => {
                        try {
                                const info = await this.getVoices();
                                const voice = info.voices[voiceName];
                                https.request({
                                        hostname: "support.readaloud.app",
                                        path: "/ttstool/createParts",
                                        method: "POST",
                                        headers: {
                                                "Content-Type": "application/json",
                                        },
                                }, (r) => {
                                        let buffers = [];
                                        r.on("data", (d) => buffers.push(d)).on("error", rej).on("end", () => {
                                                https.get({
                                                        hostname: "support.readaloud.app",
							path: `/ttstool/getParts?q=${JSON.parse(Buffer.concat(buffers))[0]}`,
							headers: {
                                                                "Content-Type": "audio/mp3"
                                                        }
						}, (r) => {
							if (!readStream) {
								let buffers = [];
								r
									.on("data", (b) => buffers.push(b))
									.on("end", () => res(Buffer.concat(buffers)))
									.on("error", rej);
							} else res(r);
                                                }).on("error", rej);
                                        });
                                }).end(
                                        JSON.stringify(
                                                [
                                                        {
                                                                voiceId: voice.arg,
                                                                ssml: `<speak version="1.0" xml:lang="${voice.lang}">${text}</speak>`
                                                        }
                                                ]
                                        )
                                ).on("error", rej);
                        } catch (e) {
                                rej(e);
                        }
                });
        },
        file2Text(file) { // converts a file into text
                return new Promise(async (res, rej) => {
			const allowedFilePaths = {
				path: true,
				filepath: true
			};
			if (!file) rej("You need a file in order to do this opperation.");
			else if (!file.originalFilename || !allowedFilePaths[file]) rej("Missing one or more file fields.");
                        else try {
                                https.request({
                                        hostname: "api.elevateai.com",
                                        path: "/v1/interactions",
                                        method: "POST",
                                        headers: {
                                                "Content-Type": "application/json",
                                                "X-API-Token": "c78d546c-02fe-48b4-9811-51345bf6dc57"
                                        }
                                }, (r) => {
                                        let buffers = [];
                                        r.on("data", (d) => buffers.push(d)).on("error", rej).on("end", () => {
                                                const json = JSON.parse(Buffer.concat(buffers));
                                                const info = {};
                                                info[file.originalFilename] = {
                                                        value: fs.createReadStream(file.path || file.filepath),
                                                        options: {
                                                                filename: file.originalFilename,
                                                                contentType: null
                                                        }
                                                };
						req({
							method: 'POST',
							url: `https://api.elevateai.com/v1/interactions/${json.interactionIdentifier}/upload`,
							headers: {
								'X-API-Token': 'c78d546c-02fe-48b4-9811-51345bf6dc57'
							},
							formData: info
						}, async (error, response) => {
							if (error) rej(error);
							else if (typeof response.body == "string") {
                                                                let resp = await loadRequest({ // check the file upload status
                                                                        method: 'GET',
                                                                        url: `https://api.elevateai.com/v1/interactions/${
                                                                                json.interactionIdentifier
                                                                        }/status`,
                                                                        headers: {
                                                                                'Accept-Encoding': 'gzip, deflate, br',
                                                                                'X-API-Token': 'c78d546c-02fe-48b4-9811-51345bf6dc57'
                                                                        }
                                                                });
                                                                while ( // loop until the file is done uploading to the server
                                                                        resp.response.status == "fileUploaded"
                                                                        || resp.response.status == "processing"
                                                                ) resp = await loadRequest({
                                                                        method: 'GET',
                                                                        url: `https://api.elevateai.com/v1/interactions/${
                                                                                json.interactionIdentifier
                                                                        }/status`,
                                                                        headers: {
                                                                                'Accept-Encoding': 'gzip, deflate, br',
                                                                                'X-API-Token': 'c78d546c-02fe-48b4-9811-51345bf6dc57'
                                                                        }
                                                                });
                                                                req({ // get the text after the file is done processing.
                                                                        method: 'GET',
                                                                        url: `https://api.elevateai.com/v1/interactions/${
                                                                                json.interactionIdentifier
                                                                        }/transcript`,
                                                                        headers: {
                                                                                'X-API-Token': 'c78d546c-02fe-48b4-9811-51345bf6dc57',
                                                                                'Content-Type': 'application/json',
                                                                                'Accept-Encoding': 'gzip, deflate, br'
                                                                        }
                                                                }, (error, response) => {
                                                                        if (error) rej(error);
                                                                        else if (typeof response.body == "string") {
                                                                                const json = JSON.parse(response.body);
                                                                                let hasPhrases = false;
                                                                                let hasPhrases2 = false;
                                                                                for (const _phase of json.participantOne.phrases) {
                                                                                        hasPhrases = true;
                                                                                }
                                                                                for (const _phase of json.participantTwo.phrases) {
                                                                                        hasPhrases2 = true;
                                                                                }
                                                                                if (!hasPhrases) rej('Your audio file must be a tts file.');
                                                                                else if (!hasPhrases2) {
                                                                                        const phase = json.participantOne.phrases.join(" ")
                                                                                                .toLowerCase();
                                                                                        res(phase);
                                                                                } else rej('Your tts file cannot have more than one participant talking.');
                                                                        } else rej(response.body);
                                                                });
                                                        }
						});
                                        });
                                }).on("error", rej).end(JSON.stringify({
                                        type: "audio",
                                        languageTag: "en-US",
                                        vertical: "default",
                                        audioTranscriptionMode: "highAccuracy",
                                        includeAiResults: false     
                                }));
                        } catch (e) {
                                rej(e);
                        }
                });
        }
}
