# usaremos la libreria de BeautifulSoup mas información en https://pypi.org/project/beautifulsoup4/ para poder usarlo en tu terminal ingreas este comando ( pip install beautifulsoup4 ), para el usuo de la libreria de request usaremos esete comando ( pip install requests )

import requests
from bs4 import BeautifulSoup

# Mostramos bienvenida para ingresar la pagina que rasparemos
print('=============================')
print('= ¡Bienvenid@ al WEBSCRAPER =')
print('=============================')
url = input("Ingresa la url de la pagina: ")
# guardamos la repuesta de la url
response = requests.get(url)
# usamos el libreria para sacar todas las URL de la página y la guardamos en la variable
soup = BeautifulSoup(response.content, "html.parser")

# Mostraremos los resultados
titulares = soup.find_all("a")
for titular in titulares:
    print(titular.get("href"))
