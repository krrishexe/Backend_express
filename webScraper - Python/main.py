from bs4 import BeautifulSoup
import requests

url = "https://github.com/krrishexe"

result = requests.get(url)
doc = BeautifulSoup(result.text , "html.parser")

# print(doc.prettify())

tags = doc.find_all(text="contributions")
# print(tags.find("span").string.strip())
print(tags)