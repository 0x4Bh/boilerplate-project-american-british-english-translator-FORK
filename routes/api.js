'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();
  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      let translation = "";
      if (text === undefined || text === null || !locale) res.json({ error: 'Required field(s) missing' });
      else if (text === "") return res.json({ error: 'No text to translate' });
      else if (locale !== "american-to-british" && locale !== "british-to-american") res.json({ error: 'Invalid value for locale field' });
      else {
        if (locale === "american-to-british") {
          translation = translator.americanToBritish(text, true);
        }
        else if (locale === "british-to-american") {
          translation = translator.britishToAmerican(text, true);
        }
        translation = text === translation ? "Everything looks good to me!" : translation;
        res.json({ text, translation });
      }
    });
};
