//подключаем API для работы со стандартными потоками ввода/вывода
const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var path='';

rl.question('Enter path for new directory ', (answer) => {
    // TODO: Log the answer in a database
    //console.log('Thank you for your valuable feedback:', answer);
    path = answer;
rl.close();
});
