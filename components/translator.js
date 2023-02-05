const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const START_HIGHLIGHT = "<span class=\"highlight\">";
const END_HIGHLIGHT = "</span>"

class Translator {
    americanToBritish(input, highlight) {
        let sHighlight = '', eHighlight = '';
        if (highlight) {
            sHighlight = START_HIGHLIGHT;
            eHighlight = END_HIGHLIGHT;
        }
        Object.keys(americanToBritishSpelling).forEach((us) => {
            const pattern = new RegExp(us, "gi");
            input = input.replaceAll(pattern, sHighlight + americanToBritishSpelling[us] + eHighlight);
        });
        Object.keys(americanOnly).forEach((us) => {
            const pattern = new RegExp(`(?<!\\w|-)${us}(?!\\w)`, "gi");
            input = input.replaceAll(pattern, sHighlight + americanOnly[us] + eHighlight);
        });
        Object.keys(americanToBritishTitles).forEach((us) => {
            const pattern = new RegExp(`(?<!-)${us}(?![^ ])`, "gi");
            input = input.replaceAll(pattern, sHighlight + this.capitalize(americanToBritishTitles[us.toLowerCase()]) + eHighlight);
        });
        return input.replace(/(\d?\d):(\d\d)/g, sHighlight + "$1.$2" + eHighlight) // for clock
    }
    britishToAmerican(input, highlight) {
        let sHighlight = '', eHighlight = '';
        if (highlight) {
            sHighlight = START_HIGHLIGHT;
            eHighlight = END_HIGHLIGHT;
        }
        Object.keys(americanToBritishSpelling).forEach((uk) => {
            const pattern = new RegExp(americanToBritishSpelling[uk], "gi");
            input = input.replaceAll(pattern, sHighlight + uk + eHighlight);
        });
        Object.keys(britishOnly).forEach((uk) => {
            const pattern = new RegExp(`(?<!\\w|-)${uk}(?!\\w)`, "gi");
            input = input.replaceAll(pattern, sHighlight + britishOnly[uk] + eHighlight);
        });
        Object.keys(americanToBritishTitles).forEach((uk) => {
            const pattern = new RegExp(`(?<!-)${americanToBritishTitles[uk]}(?![^ ])`, "gi");
            input = input.replaceAll(pattern, sHighlight + this.capitalize(uk) + eHighlight);
        });
        return input.replace(/(\d?\d).(\d\d)/g, sHighlight + "$1:$2" + eHighlight) // for clock
    }
    capitalize(input) {
        return input ? input.charAt(0).toUpperCase() + input.slice(1) : undefined;
    }
}

module.exports = Translator;