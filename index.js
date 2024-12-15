import { Telegraf } from "telegraf";

const bot = new Telegraf('6700475848:AAHanQGGbvIXbmdoUlGbfQQI721cHiE4A-w');  // Replace with your bot's token

bot.start((ctx) => ctx.reply('Welcome! How can I help you today?'));
bot.on('text', (ctx) => ctx.reply('You said: ' + ctx.message.text));

bot.launch();

