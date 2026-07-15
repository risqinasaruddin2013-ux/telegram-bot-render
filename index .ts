import TelegramBot from 'node-telegram-bot-api';
import express from 'express';
const token =  "8615382561:AAFv8gchRcYh5PeMgypHm799CODjLf-r07w";
if (!token) {
  throw new Error('BOT_TOKEN takde! Pergi tab Secrets letak dulu');
}

const bot = new TelegramBot(token, { polling: true });

// Reply bila orang taip /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hello! Bot dah jalan ✅");
});

// Reply apa2 mesej
bot.on('message', (msg) => {
  if (msg.text !== '/start') {
    bot.sendMessage(msg.chat.id, `Kau cakap: ${msg.text}`);
  }
});

// Buat web server supaya Replit tak sleep
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot is running'));
app.listen(port, () => console.log('Web server running'));

console.log('Bot Telegram dah start');