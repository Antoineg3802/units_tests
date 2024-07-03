const readline = require('readline');
const en = require('./en.json');
const fr = require('./fr.json');

const args = process.argv.slice(2);

let language

if (args.length === 0) {
    console.log('Please provide a language');
    process.exit(1);
}else if (args[0] === '--en') {
    language = en;
}else if (args[0] === '--fr'){
    language = fr;
}

// Créer une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

displayHello(language)

// Poser une question à l'utilisateur
rl.question('> ', (answer) => {
    // Afficher un message de bienvenue

    isPalindrome(answer);

    console.log(language.goodbye)
    // Fermer l'interface readline
    rl.close();
});


function isPalindrome(str){
    if (str === str.split('').reverse().join('')) {
        console.log(language.nice);
    }
}

function displayHello(){
    let date = new Date();
    date.getHours() < 16 ? console.log(language.welcome) : console.log(language.welcomeLate);
}
