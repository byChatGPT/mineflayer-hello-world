const mineflayer = require('mineflayer');

if (process.argv.length < 4) {
    console.log('Usage: node index.js <server_address> <username> [<password>]');
    process.exit(1);
}

const serverAddress = process.argv[2];
const username = process.argv[3];
const password = process.argv.length > 4 ? process.argv[4] : undefined;

const bot = mineflayer.createBot({
    host: serverAddress,
    username: username,
    password: password
});

bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    if (message.toLowerCase() === 'hello') {
        bot.chat('Hello world!');
    }
});

bot.on('spawn', () => {
    bot.chat('Hello world!');
});
