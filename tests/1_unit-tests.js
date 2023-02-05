const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
const START_HIGHLIGHT = "<span class=\"highlight\">";
const END_HIGHLIGHT = "</span>"

suite('Unit Tests', () => {
    test('1. Translate "Mangoes are my favorite fruit." to British English', () => { 
        assert.deepStrictEqual(translator.americanToBritish("Mangoes are my favorite fruit.", false), "Mangoes are my favourite fruit.");
    });
    test('2. Translate "I ate yogurt for breakfast." to British English', () => { 
        assert.deepStrictEqual(translator.americanToBritish("I ate yogurt for breakfast.", false), "I ate yoghurt for breakfast.");
    });
    test('3. Translate "We had a party at my friend\'s condo." to British English', () => { 
        assert.deepStrictEqual(translator.americanToBritish("We had a party at my friend\'s condo.", false), "We had a party at my friend\'s flat.");
    });
    test('4. Translate "Can you toss this in the trashcan for me?" to British English', () => {
        assert.deepStrictEqual(translator.americanToBritish("Can you toss this in the trashcan for me?", false), "Can you toss this in the bin for me?");
     });
    test('5. Translate "The parking lot was full." to British English', () => { 
        assert.deepStrictEqual(translator.americanToBritish("The parking lot was full.", false), "The car park was full.");
    });
    test('6. Translate "Like a high tech Rube Goldberg machine." to British English', () => {
        assert.deepStrictEqual(translator.americanToBritish("Like a high tech Rube Goldberg machine.", false), "Like a high tech Heath Robinson device.");
     });
    test('7. Translate "To play hooky means to skip class or work." to British English', () => { 
        assert.deepStrictEqual(translator.americanToBritish("To play hooky means to skip class or work.", false), "To bunk off means to skip class or work.");
    });
    test('8. Translate "No Mr. Bond, I expect you to die." to British English', () => { 
        assert.deepStrictEqual(translator.americanToBritish("No Mr. Bond, I expect you to die.", false), "No Mr Bond, I expect you to die.");
    });
    test('9. Translate "Dr. Grosh will see you now." to British English', () => {
        assert.deepStrictEqual(translator.americanToBritish("Dr. Grosh will see you now.", false), "Dr Grosh will see you now.");
     });
    test('10. Translate "Lunch is at 12:15 today." to British English', () => { 
        assert.deepStrictEqual(translator.americanToBritish("Lunch is at 12:15 today.", false), "Lunch is at 12.15 today.");
    });
    test('11. Translate "We watched the footie match for a while." to American English', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("We watched the footie match for a while.", false), "We watched the soccer match for a while.");
    });
    test('12. Translate "Paracetamol takes up to an hour to work." to American English', () => {
        assert.deepStrictEqual(translator.britishToAmerican("Paracetamol takes up to an hour to work.", false), "Tylenol takes up to an hour to work.");
     });
    test('13. Translate "First, caramelise the onions." to American English', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("First, caramelise the onions.", false), "First, caramelize the onions.");
    });
    test('14. Translate "I spent the bank holiday at the funfair." to American English', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("I spent the bank holiday at the funfair.", false), "I spent the public holiday at the carnival.");
    });
    test('15. Translate "I had a bicky then went to the chippy." to American English', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("I had a bicky then went to the chippy.", false), "I had a cookie then went to the fish-and-chip shop.");
    });
    test('16. Translate "I\'ve just got bits and bobs in my bum bag." to American English', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("I\'ve just got bits and bobs in my bum bag.", false), "I\'ve just got odds and ends in my fanny pack.");
    });
    test('17. Translate "The car boot sale at Boxted Airfield was called off." to American English', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("The car boot sale at Boxted Airfield was called off.", false), "The swap meet at Boxted Airfield was called off.");
    });
    test('18. Translate "Have you met Mrs Kalyani?" to American English', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("Have you met Mrs Kalyani?", false), "Have you met Mrs. Kalyani?");
    });
    test('19. Translate "Prof Joyner of King\'s College, London." to American English', () => {
        assert.deepStrictEqual(translator.britishToAmerican("Prof Joyner of King\'s College, London.", false), "Prof. Joyner of King\'s College, London.");
     });
    test('20. Translate "Tea time is usually around 4 or 4.30." to American English', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("Tea time is usually around 4 or 4.30.", false), "Tea time is usually around 4 or 4:30.");
    });
    test('21. Highlight translation in "Mangoes are my favorite fruit."', () => {
        assert.deepStrictEqual(translator.americanToBritish("Mangoes are my favorite fruit.", true), "Mangoes are my " + START_HIGHLIGHT + "favourite" + END_HIGHLIGHT + " fruit.");
     });
    test('22. Highlight translation in "I ate yogurt for breakfast."', () => { 
        assert.deepStrictEqual(translator.americanToBritish("I ate yogurt for breakfast.", true), "I ate " + START_HIGHLIGHT + "yoghurt" + END_HIGHLIGHT + " for breakfast.");
    });
    test('23. Highlight translation in "We watched the footie match for a while."', () => {
        assert.deepStrictEqual(translator.britishToAmerican("We watched the footie match for a while.", true), "We watched the " + START_HIGHLIGHT + "soccer" + END_HIGHLIGHT + " match for a while.");
    });
    test('24. Highlight translation in "Paracetamol takes up to an hour to work."', () => { 
        assert.deepStrictEqual(translator.britishToAmerican("Paracetamol takes up to an hour to work.", true), START_HIGHLIGHT + "Tylenol" + END_HIGHLIGHT + " takes up to an hour to work.");
    });
});
