const { isPalindrome, displayHello } = require('./index');
const en = require('./en.json');
const fr = require('./fr.json');

describe('isPalindrome', () => {
    let logSpy;

    beforeEach(() => {
        logSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        logSpy.mockRestore();
    });

    test('should recognize a palindrome and print a nice message', () => {
        const language = en;
        global.language = language; // Définir la langue globale pour les tests

        isPalindrome('madam');
        expect(logSpy).toHaveBeenCalledWith(language.nice);
    });

    test('should not print a message if not a palindrome', () => {
        const language = en;
        global.language = language; // Définir la langue globale pour les tests

        isPalindrome('hello');
        expect(logSpy).not.toHaveBeenCalledWith(language.nice);
    });
});

describe('displayHello', () => {
    let logSpy;

    beforeEach(() => {
        logSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        logSpy.mockRestore();
    });

    test('should print welcome message before 16:00', () => {
        const language = en;
        global.language = language; // Définir la langue globale pour les tests

        const realDate = Date;
        global.Date = jest.fn(() => ({
            getHours: () => 15
        }));
        
        displayHello();
        expect(logSpy).toHaveBeenCalledWith(language.welcome);
        global.Date = realDate; // Restaurer la date réelle
    });

    test('should print welcome late message after 16:00', () => {
        const language = en;
        global.language = language; // Définir la langue globale pour les tests

        const realDate = Date;
        global.Date = jest.fn(() => ({
            getHours: () => 17
        }));

        displayHello();
        expect(logSpy).toHaveBeenCalledWith(language.welcomeLate);
        global.Date = realDate; // Restaurer la date réelle
    });
});
