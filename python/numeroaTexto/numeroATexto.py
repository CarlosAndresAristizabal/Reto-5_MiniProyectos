# -*- coding: utf-8 -*-

# Utilizamos la libreria de num2words mas información en https://pypi.org/project/num2words/  para pode usarla debes ingresar este comando ('pip install num2words') a tu terminal y luego ejecutas el programa
# importamos la libreria
from num2words import num2words
# creamo una variable de entrada de pantalla y parseamos a entero
salir = ""
print('****************************')
print('*    Bienvenido a la app   *')
print('* Convertir número a texto *')
print('****************************')
while salir == salir.upper():
    numero = int(input("Ingrese un número que desea a convertir: "))
    # creamos una variable y se utilizara la libreria para convertir el entero a texto o string
    texto = num2words(numero, lang='es')
    # Mostramos en pantalla
    print("El número en texto es:", texto)
    salir = input('si desea salir escribe SALIR ').upper()
