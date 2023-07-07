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
    // convert a tts file into some text.
    async function file2Text(file) {
        return await tts.file2Text(file);
    }
```

## Apps that uses the TTS Tool Api

#1: Go2015

#2: Wrapper: Offline (Soon)

## Output

if you are getting all the voices, then the output should look something like this:
```json
{
	"voices": {
		"nicole": {
			"country": "AU",
			"language": "en",
			"gender": "F",
			"arg": "Amazon Australian English (Nicole)",
			"lang": "en-AU",
			"desc": "Nicole"
		},
		"russell": {
			"country": "AU",
			"language": "en",
			"gender": "M",
			"arg": "Amazon Australian English (Russell)",
			"lang": "en-AU",
			"desc": "Russell"
		},
		"ricardo": {
			"country": "BR",
			"language": "pt",
			"gender": "M",
			"arg": "Amazon Brazilian Portuguese (Ricardo)",
			"lang": "pt-BR",
			"desc": "Ricardo"
		},
		"vitoria": {
			"country": "BR",
			"language": "pt",
			"gender": "F",
			"arg": "Amazon Brazilian Portuguese (Vitoria)",
			"lang": "pt-BR",
			"desc": "Vitoria"
		},
		"amy": {
			"country": "GB",
			"language": "en",
			"gender": "F",
			"arg": "Amazon British English (Amy)",
			"lang": "en-GB",
			"desc": "Amy"
		},
		"brian": {
			"country": "GB",
			"language": "en",
			"gender": "M",
			"arg": "Amazon British English (Brian)",
			"lang": "en-GB",
			"desc": "Brian"
		},
		"emma": {
			"country": "GB",
			"language": "en",
			"gender": "F",
			"arg": "Amazon British English (Emma)",
			"lang": "en-GB",
			"desc": "Emma"
		},
		"chantal": {
			"country": "CA",
			"language": "fr",
			"gender": "F",
			"arg": "Amazon Canadian French (Chantal)",
			"lang": "fr-CA",
			"desc": "Chantal"
		},
		"conchita": {
			"country": "ES",
			"language": "es",
			"gender": "F",
			"arg": "Amazon Castilian Spanish (Conchita)",
			"lang": "es-ES",
			"desc": "Conchita"
		},
		"enrique": {
			"country": "ES",
			"language": "es",
			"gender": "M",
			"arg": "Amazon Castilian Spanish (Enrique)",
			"lang": "es-ES",
			"desc": "Enrique"
		},
		"mads": {
			"country": "DK",
			"language": "da",
			"gender": "M",
			"arg": "Amazon Danish (Mads)",
			"lang": "da-DK",
			"desc": "Mads"
		},
		"naja": {
			"country": "DK",
			"language": "da",
			"gender": "F",
			"arg": "Amazon Danish (Naja)",
			"lang": "da-DK",
			"desc": "Naja"
		},
		"lotte": {
			"country": "NL",
			"language": "nl",
			"gender": "F",
			"arg": "Amazon Dutch (Lotte)",
			"lang": "nl-NL",
			"desc": "Lotte"
		},
		"ruben": {
			"country": "NL",
			"language": "nl",
			"gender": "M",
			"arg": "Amazon Dutch (Ruben)",
			"lang": "nl-NL",
			"desc": "Ruben"
		},
		"celine": {
			"country": "FR",
			"language": "fr",
			"gender": "F",
			"arg": "Amazon French (Celine)",
			"lang": "fr-FR",
			"desc": "Celine"
		},
		"mathieu": {
			"country": "FR",
			"language": "fr",
			"gender": "M",
			"arg": "Amazon French (Mathieu)",
			"lang": "fr-FR",
			"desc": "Mathieu"
		},
		"hans": {
			"country": "DE",
			"language": "de",
			"gender": "M",
			"arg": "Amazon German (Hans)",
			"lang": "de-DE",
			"desc": "Hans"
		},
		"marlene": {
			"country": "DE",
			"language": "de",
			"gender": "F",
			"arg": "Amazon German (Marlene)",
			"lang": "de-DE",
			"desc": "Marlene"
		},
		"dora": {
			"country": "IS",
			"language": "is",
			"gender": "F",
			"arg": "Amazon Icelandic (Dora)",
			"lang": "is-IS",
			"desc": "Dora"
		},
		"karl": {
			"country": "IS",
			"language": "is",
			"gender": "M",
			"arg": "Amazon Icelandic (Karl)",
			"lang": "is-IS",
			"desc": "Karl"
		},
		"raveena": {
			"country": "IN",
			"language": "en",
			"gender": "F",
			"arg": "Amazon Indian English (Raveena)",
			"lang": "en-IN",
			"desc": "Raveena"
		},
		"carla": {
			"country": "IT",
			"language": "it",
			"gender": "F",
			"arg": "Amazon Italian (Carla)",
			"lang": "it-IT",
			"desc": "Carla"
		},
		"giorgio": {
			"country": "IT",
			"language": "it",
			"gender": "M",
			"arg": "Amazon Italian (Giorgio)",
			"lang": "it-IT",
			"desc": "Giorgio"
		},
		"liv": {
			"country": "NO",
			"language": "nb",
			"gender": "F",
			"arg": "Amazon Norwegian (Liv)",
			"lang": "nb-NO",
			"desc": "Liv"
		},
		"ewa": {
			"country": "PL",
			"language": "pl",
			"gender": "F",
			"arg": "Amazon Polish (Ewa)",
			"lang": "pl-PL",
			"desc": "Ewa"
		},
		"jacek": {
			"country": "PL",
			"language": "pl",
			"gender": "M",
			"arg": "Amazon Polish (Jacek)",
			"lang": "pl-PL",
			"desc": "Jacek"
		},
		"jan": {
			"country": "PL",
			"language": "pl",
			"gender": "M",
			"arg": "Amazon Polish (Jan)",
			"lang": "pl-PL",
			"desc": "Jan"
		},
		"maja": {
			"country": "PL",
			"language": "pl",
			"gender": "F",
			"arg": "Amazon Polish (Maja)",
			"lang": "pl-PL",
			"desc": "Maja"
		},
		"cristiano": {
			"country": "PT",
			"language": "pt",
			"gender": "M",
			"arg": "Amazon Portuguese (Cristiano)",
			"lang": "pt-PT",
			"desc": "Cristiano"
		},
		"ines": {
			"country": "PT",
			"language": "pt",
			"gender": "F",
			"arg": "Amazon Portuguese (Ines)",
			"lang": "pt-PT",
			"desc": "Ines"
		},
		"carmen": {
			"country": "RO",
			"language": "ro",
			"gender": "F",
			"arg": "Amazon Romanian (Carmen)",
			"lang": "ro-RO",
			"desc": "Carmen"
		},
		"maxim": {
			"country": "RU",
			"language": "ru",
			"gender": "M",
			"arg": "Amazon Russian (Maxim)",
			"lang": "ru-RU",
			"desc": "Maxim"
		},
		"tatyana": {
			"country": "RU",
			"language": "ru",
			"gender": "F",
			"arg": "Amazon Russian (Tatyana)",
			"lang": "ru-RU",
			"desc": "Tatyana"
		},
		"astrid": {
			"country": "SE",
			"language": "sv",
			"gender": "F",
			"arg": "Amazon Swedish (Astrid)",
			"lang": "sv-SE",
			"desc": "Astrid"
		},
		"filiz": {
			"country": "TR",
			"language": "tr",
			"gender": "F",
			"arg": "Amazon Turkish (Filiz)",
			"lang": "tr-TR",
			"desc": "Filiz"
		},
		"ivy": {
			"country": "US",
			"language": "en",
			"gender": "F",
			"arg": "Amazon US English (Ivy)",
			"lang": "en-US",
			"desc": "Ivy"
		},
		"joey": {
			"country": "US",
			"language": "en",
			"gender": "M",
			"arg": "Amazon US English (Joey)",
			"lang": "en-US",
			"desc": "Joey"
		},
		"justin": {
			"country": "US",
			"language": "en",
			"gender": "M",
			"arg": "Amazon US English (Justin)",
			"lang": "en-US",
			"desc": "Justin"
		},
		"kendra": {
			"country": "US",
			"language": "en",
			"gender": "F",
			"arg": "Amazon US English (Kendra)",
			"lang": "en-US",
			"desc": "Kendra"
		},
		"kimberly": {
			"country": "US",
			"language": "en",
			"gender": "F",
			"arg": "Amazon US English (Kimberly)",
			"lang": "en-US",
			"desc": "Kimberly"
		},
		"salli": {
			"country": "US",
			"language": "en",
			"gender": "F",
			"arg": "Amazon US English (Salli)",
			"lang": "en-US",
			"desc": "Salli"
		},
		"miguel": {
			"country": "US",
			"language": "es",
			"gender": "M",
			"arg": "Amazon US Spanish (Miguel)",
			"lang": "es-US",
			"desc": "Miguel"
		},
		"penelope": {
			"country": "US",
			"language": "es",
			"gender": "F",
			"arg": "Amazon US Spanish (Penelope)",
			"lang": "es-US",
			"desc": "Penelope"
		},
		"gwyneth": {
			"country": "GB",
			"language": "cy",
			"gender": "F",
			"arg": "Amazon Welsh (Gwyneth)",
			"lang": "cy-GB",
			"desc": "Gwyneth"
		},
		"geraint": {
			"country": "GB",
			"language": "cy",
			"gender": "M",
			"arg": "Amazon Welsh (Geraint)",
			"lang": "cy-GB",
			"desc": "Geraint"
		},
		"catherine": {
			"country": "AU",
			"language": "en",
			"gender": "F",
			"arg": "Microsoft Australian English (Catherine)",
			"lang": "en-AU",
			"desc": "Catherine"
		},
		"james": {
			"country": "AU",
			"language": "en",
			"gender": "M",
			"arg": "Microsoft Australian English (James)",
			"lang": "en-AU",
			"desc": "James"
		},
		"michael": {
			"country": "AT",
			"language": "de",
			"gender": "M",
			"arg": "Microsoft Austrian German (Michael)",
			"lang": "de-AT",
			"desc": "Michael"
		},
		"bart": {
			"country": "BE",
			"language": "nl",
			"gender": "M",
			"arg": "Microsoft Belgian Dutch (Bart)",
			"lang": "nl-BE",
			"desc": "Bart"
		},
		"daniel": {
			"country": "BR",
			"language": "pt",
			"gender": "M",
			"arg": "Microsoft Brazilian Portuguese (Daniel)",
			"lang": "pt-BR",
			"desc": "Daniel"
		},
		"maria": {
			"country": "BR",
			"language": "pt",
			"gender": "F",
			"arg": "Microsoft Brazilian Portuguese (Maria)",
			"lang": "pt-BR",
			"desc": "Maria"
		},
		"george": {
			"country": "GB",
			"language": "en",
			"gender": "M",
			"arg": "Microsoft British English (George)",
			"lang": "en-GB",
			"desc": "George"
		},
		"hazel": {
			"country": "GB",
			"language": "en",
			"gender": "F",
			"arg": "Microsoft British English (Hazel)",
			"lang": "en-GB",
			"desc": "Hazel"
		},
		"susan": {
			"country": "GB",
			"language": "en",
			"gender": "F",
			"arg": "Microsoft British English (Susan)",
			"lang": "en-GB",
			"desc": "Susan"
		},
		"ivan": {
			"country": "BG",
			"language": "bg",
			"gender": "M",
			"arg": "Microsoft Bulgarian (Ivan)",
			"lang": "bg-BG",
			"desc": "Ivan"
		},
		"linda": {
			"country": "CA",
			"language": "en",
			"gender": "F",
			"arg": "Microsoft Canadian English (Linda)",
			"lang": "en-CA",
			"desc": "Linda"
		},
		"richard": {
			"country": "CA",
			"language": "en",
			"gender": "M",
			"arg": "Microsoft Canadian English (Richard)",
			"lang": "en-CA",
			"desc": "Richard"
		},
		"caroline": {
			"country": "CA",
			"language": "fr",
			"gender": "F",
			"arg": "Microsoft Canadian French (Caroline)",
			"lang": "fr-CA",
			"desc": "Caroline"
		},
		"claude": {
			"country": "CA",
			"language": "fr",
			"gender": "M",
			"arg": "Microsoft Canadian French (Claude)",
			"lang": "fr-CA",
			"desc": "Claude"
		},
		"nathalie": {
			"country": "CA",
			"language": "fr",
			"gender": "F",
			"arg": "Microsoft Canadian French (Nathalie)",
			"lang": "fr-CA",
			"desc": "Nathalie"
		},
		"herena": {
			"country": "ES",
			"language": "ca",
			"gender": "F",
			"arg": "Microsoft Catalan (Herena)",
			"lang": "ca-ES",
			"desc": "Herena"
		},
		"huihui": {
			"country": "CN",
			"language": "zh",
			"gender": "F",
			"arg": "Microsoft Chinese (Huihui)",
			"lang": "zh-CN",
			"desc": "Huihui"
		},
		"kangkang": {
			"country": "CN",
			"language": "zh",
			"gender": "M",
			"arg": "Microsoft Chinese (Kangkang)",
			"lang": "zh-CN",
			"desc": "Kangkang"
		},
		"yaoyao": {
			"country": "CN",
			"language": "zh",
			"gender": "F",
			"arg": "Microsoft Chinese (Yaoyao)",
			"lang": "zh-CN",
			"desc": "Yaoyao"
		},
		"danny": {
			"country": "HK",
			"language": "zh",
			"gender": "M",
			"arg": "Microsoft ChineseHK (Danny)",
			"lang": "zh-HK",
			"desc": "Danny"
		},
		"tracy": {
			"country": "HK",
			"language": "zh",
			"gender": "F",
			"arg": "Microsoft ChineseHK (Tracy)",
			"lang": "zh-HK",
			"desc": "Tracy"
		},
		"matej": {
			"country": "HR",
			"language": "hr",
			"gender": "M",
			"arg": "Microsoft Croatian (Matej)",
			"lang": "hr-HR",
			"desc": "Matej"
		},
		"jakub": {
			"country": "CZ",
			"language": "cs",
			"gender": "M",
			"arg": "Microsoft Czech (Jakub)",
			"lang": "cs-CZ",
			"desc": "Jakub"
		},
		"helle": {
			"country": "DK",
			"language": "da",
			"gender": "F",
			"arg": "Microsoft Danish (Helle)",
			"lang": "da-DK",
			"desc": "Helle"
		},
		"frank": {
			"country": "NL",
			"language": "nl",
			"gender": "M",
			"arg": "Microsoft Dutch (Frank)",
			"lang": "nl-NL",
			"desc": "Frank"
		},
		"hoda": {
			"country": "EG",
			"language": "ar",
			"gender": "F",
			"arg": "Microsoft Egyptian Arabic (Hoda)",
			"lang": "ar-EG",
			"desc": "Hoda"
		},
		"heidi": {
			"country": "FI",
			"language": "fi",
			"gender": "F",
			"arg": "Microsoft Finnish (Heidi)",
			"lang": "fi-FI",
			"desc": "Heidi"
		},
		"hortense": {
			"country": "FR",
			"language": "fr",
			"gender": "F",
			"arg": "Microsoft French (Hortense)",
			"lang": "fr-FR",
			"desc": "Hortense"
		},
		"julie": {
			"country": "FR",
			"language": "fr",
			"gender": "F",
			"arg": "Microsoft French (Julie)",
			"lang": "fr-FR",
			"desc": "Julie"
		},
		"paul": {
			"country": "FR",
			"language": "fr",
			"gender": "M",
			"arg": "Microsoft French (Paul)",
			"lang": "fr-FR",
			"desc": "Paul"
		},
		"hedda": {
			"country": "DE",
			"language": "de",
			"gender": "F",
			"arg": "Microsoft German (Hedda)",
			"lang": "de-DE",
			"desc": "Hedda"
		},
		"katja": {
			"country": "DE",
			"language": "de",
			"gender": "F",
			"arg": "Microsoft German (Katja)",
			"lang": "de-DE",
			"desc": "Katja"
		},
		"stefan": {
			"country": "DE",
			"language": "de",
			"gender": "M",
			"arg": "Microsoft German (Stefan)",
			"lang": "de-DE",
			"desc": "Stefan"
		},
		"stefanos": {
			"country": "GR",
			"language": "el",
			"gender": "M",
			"arg": "Microsoft Greek (Stefanos)",
			"lang": "el-GR",
			"desc": "Stefanos"
		},
		"asaf": {
			"country": "IL",
			"language": "he",
			"gender": "M",
			"arg": "Microsoft Hebrew (Asaf)",
			"lang": "he-IL",
			"desc": "Asaf"
		},
		"hemant": {
			"country": "IN",
			"language": "hi",
			"gender": "M",
			"arg": "Microsoft Hindi (Hemant)",
			"lang": "hi-IN",
			"desc": "Hemant"
		},
		"kalpana": {
			"country": "IN",
			"language": "hi",
			"gender": "F",
			"arg": "Microsoft Hindi (Kalpana)",
			"lang": "hi-IN",
			"desc": "Kalpana"
		},
		"szabolcs": {
			"country": "HU",
			"language": "hu",
			"gender": "M",
			"arg": "Microsoft Hungarian (Szabolcs)",
			"lang": "hu-HU",
			"desc": "Szabolcs"
		},
		"heera": {
			"country": "IN",
			"language": "en",
			"gender": "F",
			"arg": "Microsoft Indian English (Heera)",
			"lang": "en-IN",
			"desc": "Heera"
		},
		"ravi": {
			"country": "IN",
			"language": "en",
			"gender": "M",
			"arg": "Microsoft Indian English (Ravi)",
			"lang": "en-IN",
			"desc": "Ravi"
		},
		"andika": {
			"country": "ID",
			"language": "id",
			"gender": "M",
			"arg": "Microsoft Indonesian (Andika)",
			"lang": "id-ID",
			"desc": "Andika"
		},
		"sean": {
			"country": "IE",
			"language": "en",
			"gender": "M",
			"arg": "Microsoft Irish English (Sean)",
			"lang": "en-IE",
			"desc": "Sean"
		},
		"cosimo": {
			"country": "IT",
			"language": "it",
			"gender": "M",
			"arg": "Microsoft Italian (Cosimo)",
			"lang": "it-IT",
			"desc": "Cosimo"
		},
		"elsa": {
			"country": "IT",
			"language": "it",
			"gender": "F",
			"arg": "Microsoft Italian (Elsa)",
			"lang": "it-IT",
			"desc": "Elsa"
		},
		"ayumi": {
			"country": "JP",
			"language": "ja",
			"gender": "F",
			"arg": "Microsoft Japanese (Ayumi)",
			"lang": "ja-JP",
			"desc": "Ayumi"
		},
		"haruka": {
			"country": "JP",
			"language": "ja",
			"gender": "F",
			"arg": "Microsoft Japanese (Haruka)",
			"lang": "ja-JP",
			"desc": "Haruka"
		},
		"ichiro": {
			"country": "JP",
			"language": "ja",
			"gender": "M",
			"arg": "Microsoft Japanese (Ichiro)",
			"lang": "ja-JP",
			"desc": "Ichiro"
		},
		"sayaka": {
			"country": "JP",
			"language": "ja",
			"gender": "F",
			"arg": "Microsoft Japanese (Sayaka)",
			"lang": "ja-JP",
			"desc": "Sayaka"
		},
		"heami": {
			"country": "KR",
			"language": "ko",
			"gender": "F",
			"arg": "Microsoft Korean (Heami)",
			"lang": "ko-KR",
			"desc": "Heami"
		},
		"rizwan": {
			"country": "MY",
			"language": "ms",
			"gender": "M",
			"arg": "Microsoft Malay (Rizwan)",
			"lang": "ms-MY",
			"desc": "Rizwan"
		},
		"raul": {
			"country": "MX",
			"language": "es",
			"gender": "M",
			"arg": "Microsoft Mexican Spanish (Raul)",
			"lang": "es-MX",
			"desc": "Raul"
		},
		"sabina": {
			"country": "MX",
			"language": "es",
			"gender": "F",
			"arg": "Microsoft Mexican Spanish (Sabina)",
			"lang": "es-MX",
			"desc": "Sabina"
		},
		"jon": {
			"country": "NO",
			"language": "nb",
			"gender": "M",
			"arg": "Microsoft Norwegian (Jon)",
			"lang": "nb-NO",
			"desc": "Jon"
		},
		"adam": {
			"country": "PL",
			"language": "pl",
			"gender": "M",
			"arg": "Microsoft Polish (Adam)",
			"lang": "pl-PL",
			"desc": "Adam"
		},
		"paulina": {
			"country": "PL",
			"language": "pl",
			"gender": "F",
			"arg": "Microsoft Polish (Paulina)",
			"lang": "pl-PL",
			"desc": "Paulina"
		},
		"helia": {
			"country": "PT",
			"language": "pt",
			"gender": "F",
			"arg": "Microsoft Portuguese (Helia)",
			"lang": "pt-PT",
			"desc": "Helia"
		},
		"andrei": {
			"country": "RO",
			"language": "ro",
			"gender": "M",
			"arg": "Microsoft Romanian (Andrei)",
			"lang": "ro-RO",
			"desc": "Andrei"
		},
		"irina": {
			"country": "RU",
			"language": "ru",
			"gender": "F",
			"arg": "Microsoft Russian (Irina)",
			"lang": "ru-RU",
			"desc": "Irina"
		},
		"pavel": {
			"country": "RU",
			"language": "ru",
			"gender": "M",
			"arg": "Microsoft Russian (Pavel)",
			"lang": "ru-RU",
			"desc": "Pavel"
		},
		"naayf": {
			"country": "SA",
			"language": "ar",
			"gender": "M",
			"arg": "Microsoft Saudi Arabic (Naayf)",
			"lang": "ar-SA",
			"desc": "Naayf"
		},
		"filip": {
			"country": "SK",
			"language": "sk",
			"gender": "M",
			"arg": "Microsoft Slovak (Filip)",
			"lang": "sk-SK",
			"desc": "Filip"
		},
		"lado": {
			"country": "SI",
			"language": "sl",
			"gender": "M",
			"arg": "Microsoft Slovenian (Lado)",
			"lang": "sl-SI",
			"desc": "Lado"
		},
		"helena": {
			"country": "ES",
			"language": "es",
			"gender": "F",
			"arg": "Microsoft Spanish (Helena)",
			"lang": "es-ES",
			"desc": "Helena"
		},
		"laura": {
			"country": "ES",
			"language": "es",
			"gender": "F",
			"arg": "Microsoft Spanish (Laura)",
			"lang": "es-ES",
			"desc": "Laura"
		},
		"pablo": {
			"country": "ES",
			"language": "es",
			"gender": "M",
			"arg": "Microsoft Spanish (Pablo)",
			"lang": "es-ES",
			"desc": "Pablo"
		},
		"bengt": {
			"country": "SE",
			"language": "sv",
			"gender": "M",
			"arg": "Microsoft Swedish (Bengt)",
			"lang": "sv-SE",
			"desc": "Bengt"
		},
		"guillaume": {
			"country": "CH",
			"language": "fr",
			"gender": "M",
			"arg": "Microsoft Swiss French (Guillaume)",
			"lang": "fr-CH",
			"desc": "Guillaume"
		},
		"karsten": {
			"country": "CH",
			"language": "de",
			"gender": "M",
			"arg": "Microsoft Swiss German (Karsten)",
			"lang": "de-CH",
			"desc": "Karsten"
		},
		"valluvar": {
			"country": "IN",
			"language": "ta",
			"gender": "M",
			"arg": "Microsoft Tamil (Valluvar)",
			"lang": "ta-IN",
			"desc": "Valluvar"
		},
		"pattara": {
			"country": "TH",
			"language": "th",
			"gender": "M",
			"arg": "Microsoft Thai (Pattara)",
			"lang": "th-TH",
			"desc": "Pattara"
		},
		"tolga": {
			"country": "TR",
			"language": "tr",
			"gender": "M",
			"arg": "Microsoft Turkish (Tolga)",
			"lang": "tr-TR",
			"desc": "Tolga"
		},
		"david": {
			"country": "US",
			"language": "en",
			"gender": "M",
			"arg": "Microsoft US English (David)",
			"lang": "en-US",
			"desc": "David"
		},
		"mark": {
			"country": "US",
			"language": "en",
			"gender": "M",
			"arg": "Microsoft US English (Mark)",
			"lang": "en-US",
			"desc": "Mark"
		},
		"zira": {
			"country": "US",
			"language": "en",
			"gender": "F",
			"arg": "Microsoft US English (Zira)",
			"lang": "en-US",
			"desc": "Zira"
		},
		"an": {
			"country": "VI",
			"language": "vi",
			"gender": "M",
			"arg": "Microsoft Vietnamese (An)",
			"lang": "vi-VI",
			"desc": "An"
		}
	},
	"languages": {
		"bo": "Tibetan",
		"aa": "Afar",
		"ab": "Abkhazian",
		"af": "Afrikaans",
		"ak": "Akan",
		"als": "Alemannic",
		"am": "Amharic",
		"an": "Aragonese",
		"ang": "Anglo-SaxonÂ / Old English",
		"ar": "Arabic",
		"arc": "Aramaic",
		"as": "Assamese",
		"ast": "Asturian",
		"av": "Avar",
		"awa": "Awadhi",
		"ay": "Aymara",
		"az": "Azerbaijani",
		"ba": "Bashkir",
		"bar": "Bavarian",
		"bat-smg": "Samogitian",
		"bcl": "Bikol",
		"be": "Belarusian",
		"be-x-old": "Belarusian (TaraÅ¡kievica)",
		"bg": "Bulgarian",
		"bh": "Bihari",
		"bi": "Bislama",
		"bm": "Bambara",
		"bn": "Bengali",
		"bpy": "Bishnupriya Manipuri",
		"br": "Breton",
		"bs": "Bosnian",
		"bug": "Buginese",
		"bxr": "Buriat (Russia)",
		"ca": "Catalan",
		"cdo": "Min Dong Chinese",
		"ce": "Chechen",
		"ceb": "Cebuano",
		"ch": "Chamorro",
		"cho": "Choctaw",
		"chr": "Cherokee",
		"chy": "Cheyenne",
		"ckb": "Kurdish (Sorani)",
		"co": "Corsican",
		"cr": "Cree",
		"cs": "Czech",
		"csb": "Kashubian",
		"cu": "Old Church SlavonicÂ / Old Bulgarian",
		"cv": "Chuvash",
		"cy": "Welsh",
		"da": "Danish",
		"de": "German",
		"diq": "Dimli",
		"dsb": "Lower Sorbian",
		"dv": "Divehi",
		"dz": "Dzongkha",
		"ee": "Ewe",
		"el": "Greek",
		"en": "English",
		"eo": "Esperanto",
		"es": "Spanish",
		"et": "Estonian",
		"eu": "Basque",
		"ext": "Extremaduran",
		"fa": "Persian",
		"ff": "Peul",
		"fi": "Finnish",
		"fiu-vro": "VÃµro",
		"fj": "Fijian",
		"fo": "Faroese",
		"fr": "French",
		"frp": "ArpitanÂ / Franco-ProvenÃ§al",
		"fur": "Friulian",
		"fy": "West Frisian",
		"ga": "Irish",
		"gan": "Gan Chinese",
		"gbm": "Garhwali",
		"gd": "Scottish Gaelic",
		"gil": "Gilbertese",
		"gl": "Galician",
		"gn": "Guarani",
		"got": "Gothic",
		"gu": "Gujarati",
		"gv": "Manx",
		"ha": "Hausa",
		"hak": "Hakka Chinese",
		"haw": "Hawaiian",
		"he": "Hebrew",
		"hi": "Hindi",
		"ho": "Hiri Motu",
		"hr": "Croatian",
		"ht": "Haitian",
		"hu": "Hungarian",
		"hy": "Armenian",
		"hz": "Herero",
		"ia": "Interlingua",
		"id": "Indonesian",
		"ie": "Interlingue",
		"ig": "Igbo",
		"ii": "Sichuan Yi",
		"ik": "Inupiak",
		"ilo": "Ilokano",
		"inh": "Ingush",
		"io": "Ido",
		"is": "Icelandic",
		"it": "Italian",
		"iu": "Inuktitut",
		"ja": "Japanese",
		"jbo": "Lojban",
		"jv": "Javanese",
		"ka": "Georgian",
		"kg": "Kongo",
		"ki": "Kikuyu",
		"kj": "Kuanyama",
		"kk": "Kazakh",
		"kl": "Greenlandic",
		"km": "Cambodian",
		"kn": "Kannada",
		"khw": "Khowar",
		"ko": "Korean",
		"kr": "Kanuri",
		"ks": "Kashmiri",
		"ksh": "Ripuarian",
		"ku": "Kurdish (Kurmanji)",
		"kv": "Komi",
		"kw": "Cornish",
		"ky": "Kirghiz",
		"la": "Latin",
		"lad": "LadinoÂ / Judeo-Spanish",
		"lan": "Lango",
		"lb": "Luxembourgish",
		"lg": "Ganda",
		"li": "Limburgian",
		"lij": "Ligurian",
		"lmo": "Lombard",
		"ln": "Lingala",
		"lo": "Laotian",
		"lzz": "Laz",
		"lt": "Lithuanian",
		"lv": "Latvian",
		"map-bms": "Banyumasan",
		"mg": "Malagasy",
		"man": "Mandarin",
		"mh": "Marshallese",
		"mi": "Maori",
		"min": "Minangkabau",
		"mk": "Macedonian",
		"ml": "Malayalam",
		"mn": "Mongolian",
		"mo": "Moldovan",
		"mr": "Marathi",
		"mrh": "Mara",
		"ms": "Malay",
		"mt": "Maltese",
		"mus": "CreekÂ / Muskogee",
		"mwl": "Mirandese",
		"my": "Burmese",
		"na": "Nauruan",
		"nah": "Nahuatl",
		"nap": "Neapolitan",
		"nd": "North Ndebele",
		"nds": "Low GermanÂ / Low Saxon",
		"nds-nl": "Dutch Low Saxon",
		"ne": "Nepali",
		"new": "Newar",
		"ng": "Ndonga",
		"nl": "Dutch",
		"nn": "Norwegian Nynorsk",
		"no": "Norwegian",
		"nr": "South Ndebele",
		"nso": "Northern Sotho",
		"nrm": "Norman",
		"nv": "Navajo",
		"ny": "Chichewa",
		"oc": "Occitan",
		"oj": "Ojibwa",
		"om": "Oromo",
		"or": "Oriya",
		"os": "OssetianÂ / Ossetic",
		"pa": "PanjabiÂ / Punjabi",
		"pag": "Pangasinan",
		"pam": "Kapampangan",
		"pap": "Papiamentu",
		"pdc": "Pennsylvania German",
		"pi": "Pali",
		"pih": "Norfolk",
		"pl": "Polish",
		"pms": "Piedmontese",
		"ps": "Pashto",
		"pt": "Portuguese",
		"qu": "Quechua",
		"rm": "Raeto Romance",
		"rmy": "Romani",
		"rn": "Kirundi",
		"ro": "Romanian",
		"roa-rup": "Aromanian",
		"ru": "Russian",
		"rw": "Rwandi",
		"sa": "Sanskrit",
		"sc": "Sardinian",
		"scn": "Sicilian",
		"sco": "Scots",
		"sd": "Sindhi",
		"se": "Northern Sami",
		"sg": "Sango",
		"sh": "Serbo-Croatian",
		"si": "Sinhalese",
		"sk": "Slovak",
		"sl": "Slovenian",
		"sm": "Samoan",
		"sn": "Shona",
		"so": "Somalia",
		"sq": "Albanian",
		"sr": "Serbian",
		"ss": "Swati",
		"st": "Southern Sotho",
		"su": "Sundanese",
		"sv": "Swedish",
		"sw": "Swahili",
		"ta": "Tamil",
		"te": "Telugu",
		"tet": "Tetum",
		"tg": "Tajik",
		"th": "Thai",
		"ti": "Tigrinya",
		"tk": "Turkmen",
		"tl": "Tagalog",
		"tlh": "Klingon",
		"tn": "Tswana",
		"to": "Tonga",
		"tpi": "Tok Pisin",
		"tr": "Turkish",
		"ts": "Tsonga",
		"tt": "Tatar",
		"tum": "Tumbuka",
		"tw": "Twi",
		"ty": "Tahitian",
		"udm": "Udmurt",
		"ug": "Uyghur",
		"uk": "Ukrainian",
		"ur": "Urdu",
		"uz": "Uzbek",
		"uz_AF": "Uzbeki Afghanistan",
		"ve": "Venda",
		"vi": "Vietnamese",
		"vec": "Venetian",
		"vls": "West Flemish",
		"vo": "VolapÃ¼k",
		"wa": "Walloon",
		"war": "WarayÂ / Samar-Leyte Visayan",
		"wo": "Wolof",
		"xal": "Kalmyk",
		"xh": "Xhosa",
		"xmf": "Megrelian",
		"yi": "Yiddish",
		"yo": "Yoruba",
		"za": "Zhuang",
		"zh": "Chinese",
		"zh-classical": "Classical Chinese",
		"zh-min-nan": "Minnan",
		"zh-yue": "Cantonese",
		"zu": "Zulu",
		"nb": "Norwegian BokmÃ¥l",
		"zh-tw": "Traditional Chinese"
	}
}
```
