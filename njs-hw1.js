//подключаем API? для работы со стандартными потоками ввода/вывода
const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// подключаем модуль для цветного вывода
var clc = require('cli-color');

// подключаем модуль создания вложенных директорий
var mkdirp = require('mkdirp');

// подключаем beep
// var beep = require('beepbeep')

// можно указать default/path/
var path='';

rl.question("Creating new directory.\nEnter path for new directory ", (answer) => {

    if ( answer ) path = answer;

    if ( path !== '')
    {
        mkdirp( path, function (err) {
            if (err) console.error(err)
            else console.log('Directory '+clc.green(path)+' successfully created.')
        });
    }
    else {
        console.log(clc.yellow('Need path for create directory.'));
        process.stdout.write('\u0007');
        // beep();
    }
rl.close();
});



