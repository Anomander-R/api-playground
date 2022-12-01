require("dotenv").config();
const { Twilio } = require("twilio");
//const twilio = require('twilio');

const { TWILIO_ACCOUNT_SSD, TWILIO_AUTH_TOKEN } = process.env;

//const client = new Twilio(TWILIO_ACCOUNT_SSD, TWILIO_AUTH_TOKEN)

console.log("Test");
//console.log(process.env.TWILIO_ACCOUNT_SSD);
//console.log(process.env.TWILIO_AUTH_TOKEN);
console.log(process.env.TWILIO_USA_NUMBER);
console.log(process.env.TWILIO_BIH_NUMBER);
console.log("-------------------------------------");
console.log(TWILIO_AUTH_TOKEN);
console.log(TWILIO_ACCOUNT_SSD);
