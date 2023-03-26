from bs4 import BeautifulSoup

with open('main.html','r') as html_file:      # here "html_file" is a variable and "r" means to read the file.

    data = BeautifulSoup(html_file, 'html.parser')         # lmxl is a parser method.
    # print(data.prettify())

tags = data.find_all("p")[0]
print(tags)


# tags = data.find_all('div',class_= 'product-name')

# for tag in tags :
#     sliced_text = tag.text.strip()
#     print(sliced_text)


                                              #iterating each element of the list.
# for tag in tags:                            
#     print(tag.text)

