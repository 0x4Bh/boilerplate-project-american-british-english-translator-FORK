const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanToBritish(input) {
        Object.keys(americanToBritishSpelling).forEach((us) => {
            const pattern = new RegExp(us, "gi");
            input = input.replaceAll(pattern, "<span class=\"highlight\">" + americanToBritishSpelling[us] + "</span>");
        });
        Object.keys(americanOnly).forEach((us) => {
            const pattern = new RegExp(`(?<!\\w|-)${us}(?!\\w)`, "gi");
            input = input.replaceAll(pattern, "<span class=\"highlight\">" + americanOnly[us] + "</span>");
        });
        Object.keys(americanToBritishTitles).forEach((us) => {
            const pattern = new RegExp(`(?<!-)${us}(?![^ ])`, "gi");
            input = input.replaceAll(pattern, "<span class=\"highlight\">" + this.capitalize(americanToBritishTitles[us.toLowerCase()]) + "</span>");
        });
        return input.replace(/(\d?\d):(\d\d)/g, "<span class=\"highlight\">" + "$1.$2" + "</span>") // for clock
    }
    britishToAmerican(input) {
        Object.keys(americanToBritishSpelling).forEach((uk) => {
            const pattern = new RegExp(americanToBritishSpelling[uk], "gi");
            input = input.replaceAll(pattern, "<span class=\"highlight\">" + uk + "</span>");
        });
        Object.keys(britishOnly).forEach((uk) => {
            const pattern = new RegExp(`(?<!\\w|-)${uk}(?!\\w)`, "gi");
            input = input.replaceAll(pattern, "<span class=\"highlight\">" + britishOnly[uk] + "</span>");
        });
        Object.keys(americanToBritishTitles).forEach((uk) => {
            const pattern = new RegExp(`(?<!-)${americanToBritishTitles[uk]}(?![^ ])`, "gi");
            input = input.replaceAll(pattern, "<span class=\"highlight\">" + this.capitalize(uk) + "</span>");
        });
        return input.replace(/(\d?\d).(\d\d)/g, "<span class=\"highlight\">" + "$1:$2" + "</span>") // for clock
    }
    capitalize(input) {
        return input ? input.charAt(0).toUpperCase() + input.slice(1) : undefined;
    }
}

module.exports = Translator;