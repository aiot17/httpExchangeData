import requests
from bs4 import BeautifulSoup

data = 1.2345
acc = "abc@hotmail.com"
url = f"http://127.0.0.1:5000?user={data:.2f}&acc={acc}"
r = requests.get(url)
print(r.text)
soup = BeautifulSoup(r.text,"lxml")
print(soup.text)
# print(r)