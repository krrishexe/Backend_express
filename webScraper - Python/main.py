from bs4 import BeautifulSoup

with open('main.html','r') as html_file:      # here "thml_file" is a variable.
    content = html_file.read()
    print(content)