from decouple import config
from twilio.rest import Client
# client = Client("","")

TWILIO_ACCOUNT_SSD = config('TWILIO_ACCOUNT_SSD')
TWILIO_AUTH_TOKEN = config('TWILIO_AUTH_TOKEN')

print(TWILIO_AUTH_TOKEN)
print(TWILIO_ACCOUNT_SSD)