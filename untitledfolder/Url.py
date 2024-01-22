def trans_URL():
    string = input("Enter the URL:")
    URL = string.lower().replace(" ", '-')
    return URL

modified_URL = trans_URL()
print(modified_URL)