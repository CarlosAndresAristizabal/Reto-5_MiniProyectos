# Utilizamos la libreria de num2words mas información en https://pypi.org/project/num2words/  para pode usarla debes ingresar este comando pip install num2words a tu terminal y luego ejecutas el programa
# importamos la libreria
from num2words import num2words
# creamo una variable de entrada de pantalla y parseamos a entero
numero = int(input("Ingrese un número: "))
# creamos una variable y se utilizara la libreria para convertir el entero a texto o string
texto = num2words(numero, lang='es')
# Mostramos en pantalla
print("El número en texto es:", texto)
