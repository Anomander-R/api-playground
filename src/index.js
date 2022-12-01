require("dotenv").config();
const { Twilio } = require("twilio");


const { TWILIO_ACCOUNT_SSD, TWILIO_AUTH_TOKEN } = process.env;

const client = new Twilio(TWILIO_ACCOUNT_SSD, TWILIO_AUTH_TOKEN)

console.log("Test");
//console.log(process.env.TWILIO_ACCOUNT_SSD);
//console.log(process.env.TWILIO_AUTH_TOKEN);
console.log(process.env.TWILIO_USA_NUMBER);
console.log(process.env.TWILIO_BIH_NUMBER);
console.log("-------------------------------------");
console.log(TWILIO_AUTH_TOKEN);
console.log(TWILIO_ACCOUNT_SSD);

client.messages.list()
    .then(messages => {
        console.log(`The last message is ${messages[0].body}`)
    })
    .catch(error => console.log(error));
console.log('Gathering your message log!');