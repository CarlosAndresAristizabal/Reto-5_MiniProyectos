# -*- coding: utf-8 -*-
# Definimos una funcion del menu principal
def menu():
    print('****************')
    print('***** MENU *****')
    print('****************')
    print('1. Añadir nuevo contacto')
    print('2. Buscar en el directorio')
    print('3. Editar lista')
    print('4. Mostrar lista')
    print('5. Salir')

# Definimos una funcion del menu BUSCAR CONTACTO


def menu2():
    print('**************************')
    print('******BUSCAR CONTACTO*****')
    print('**************************')
    print('a.- Por nombre')
    print('b.- Por número')
    print('c.- Por Email')
    print('d.- Salir')


# Definimos una funcion del menu editar lista
def menu3():
    print('**********************')
    print("*****EDITAR LISTA*****")
    print('**********************')
    print('1.- Eliminar contacto')
    print('2.- Editar contacto')


# definimos los arrays y los diccionarios
directorio = []
telefono = {}
nombre = {}
email = {}
menuOpciones = 0

# realizamos proceso de bucle para el menu principal y elegir opciones
while menuOpciones != 5:
    # imprimimos menu principal
    menu()
    # capturamos la opcion
    menuOpciones = int(input("Ingresa número de opción: "))
    # verificamos las opciones
    if menuOpciones == 1:
        # imprimimos presentación
        print('*****************************')
        print('****** AÑADIR CONTACTO ******')
        print('*****************************')
        # Mostramos Guia
        print("Añade nombre, telefono, Email")
        # capturamos el ingreso
        Nombre = input("Nombre: ")
        Telefono = input("Teléfono: ")
        Email = input("email: ")
        telefono[Nombre] = Telefono
        nombre[Telefono] = Nombre
        email[Email] = Email
        # despues de capturar  empujamos los datos al
        directorio.append([Nombre, Telefono, Email])
        print('GUARDADO EXITOSO...')

    elif menuOpciones == 2:
        # presentamos el menu2
        menu2()
        # capturamos la entrada del mensaje de pantalla
        menuOpciones2 = input("Ingresa una letra para elegir una opción: ")
        # verificamos las opciones
        if menuOpciones2 == "a":
            Nombre = input("Nombre: ")
            print('***** PROCESANDO... ******')
            # se busca por el nombre y se muestra en pantalla
            if Nombre in telefono:
                print("El Telefono es ", telefono[Nombre])
                print("El Email es ", Email)

            else:
                print(Nombre, "No se puede encontrar")

        if menuOpciones2 == "b":
            Telefono = input("Telefono: ")
            print('***** PROCESANDO... ******')
            # se busca por telefono y se muestra en pantalla
            if Telefono in nombre:
                print("El Nombre es ", nombre[Telefono])

            else:
                print(Telefono, "No se puede encontrar")

        if menuOpciones2 == "c":
            email = input("email: ")
            print('***** PROCESANDO... ******')
            # se busca por email y se muestra en pantalla

            if Nombre:
                print('El Nombre es: ', Nombre)
                print("El Teléfono es ", Telefono)
            else:
                print('No hay registro para esta Dirección ', email)
        if menuOpciones2 == "d":
            menu()

    elif menuOpciones == 3:
        # mostratamos el menu3
        menu3()
        # presentamos mensajes
        menuOpciones3 = input("Ingresa un número para elegir una opción: ")
        # verificamos la entrada y seleciona la opcion
        if menuOpciones3 == "1":
            Nombre = input("Nombre: ")
            print('***** PROCESANDO... ******')
            # recoremos el directorio y si se encuentra se elimana el item
            for item in directorio:
                if Nombre in item:
                    directorio.pop(directorio.index(item))
                    print('CONTACTO ELIMINADO')
                else:
                    print(Nombre, "No se puede encontrar")
        if menuOpciones3 == "2":
            Nombre = input("Nombre: ")
            print('***** PROCESANDO... ******')
            for item in directorio:
                if Nombre in item:
                    # Presentamos titulo
                    print('*****************************')
                    print('**** ACTUALIZAR CONTACTO ****')
                    print('*****************************')
                    # Mostramos Guia
                    print("Añade nombre, telefono, Email")
                    # capturamos el ingreso
                    Nombre = input("Nombre: ")
                    Telefono = input("Teléfono: ")
                    Email = input("email: ")
                    telefono[Nombre] = Telefono
                    nombre[Telefono] = Nombre
                    email[Email] = Email
                    # despues de capturar  actualizamos los datos en la ubicacion donde va
                    directorio[directorio.index(item)] = [
                        Nombre, Telefono, Email]
                    print('GUARDADO EXITOSO...')
                else:
                    print(Nombre, "No se puede encontrar")

    elif menuOpciones == 4:
        print('******************************')
        print("***** LISTA DE CONTACTOS *****")
        print('******************************')
        # recorremos el directorio y lo mostramos en pantalla
        for item in directorio:
            print(item)
    # salimos del menu y del programa
    elif menuOpciones == 5:
        print('Gracias por usarlo')
        break
