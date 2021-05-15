from dotenv import load_dotenv
import os
from pony.orm import Database

load_dotenv()
db = Database()

try:
	connection = db.bind(provider=os.getenv('DB_PROVIDER'), host=os.getenv('DB_HOST'),
								user=os.getenv('DB_USERNAME'), password=os.getenv('DB_PASSWORD'), database=os.getenv('DB_NAME'))
except Exception as e:
	print(e)
	print('ERROR: Database connection failed')
