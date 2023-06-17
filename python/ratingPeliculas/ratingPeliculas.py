# importamos libreria
import requests
# apikey despues de regitrarte en https://www.omdbapi.com/ y verifiques tu email te dara una apikey puedes borrar y pegar esa apipkey aqui
API_KEY = '97369dcb'

# creamos la funcion de conecion y salida la app


def obtenerRating():
    # mostramos en pantalla la bienvenida
    print('****************************************')
    print('*** Bienvenid@ a rating de peliculas ***')
    print('****************************************')
    # creamos variable para guardar lel nombre de la pelicula a buscar
    tituloPelilcula = input('Ingrese nombre de la pelicula: ')
    # hacemos verificacion si esta correctamente escrita y la busca en la url de la api
    if tituloPelilcula:
        # creamos variable para guardar la url de API
        url = f"http://www.omdbapi.com/?s={tituloPelilcula}&apikey={API_KEY}"
        # creamso la varible de respueta que se solicita con un get hacia la url
        response = requests.get(url)
        # verificamos el estado de la conecion
        if response.status_code == 200:
            # guardamos la repuesta en la variable
            datos = response.json()
            # verificamos los datos obtenidos de JSON
            if datos["Response"] == "True":
                # Se imprime el dato de busqueda del ID
                # print(datos['Search'][0]['imdbID'])
                # creamos un variable y gurdamos la ID de la pelicula
                url2 = f"http://www.omdbapi.com/?i={datos['Search'][0]['imdbID']}&apikey={API_KEY}"
                # creamso la varible de respueta que se solicita con un get hacia la url
                repuestaPelicula = requests.get(url2)
                # verificamos el estado de la conecion
                if repuestaPelicula.status_code == 200:
                    # guardamos la repuesta en la variable
                    datosPelicula = repuestaPelicula.json()
                    # Imprimimos la infromación obtenida de la peliculas
                    # print(datosPelicula)
                    # verificamos los datos obtenidos de JSON
                    if datosPelicula["Response"] == "True":
                        # creamos la variable que guardara el dato del rating
                        rating = datosPelicula["imdbRating"]
                        # MOstramos en pantalla el resultado de la busqueda y el rating obtenido del JSON
                        print("El rating de la pelicula: ",
                              tituloPelilcula, " ", rating)
                    else:
                        # se maneja los tipos de errores
                        print(
                            "Error", f"{tituloPelilcula} No encontrada")
                else:
                    print("Error", "Error al realizar la solicitud")
            else:
                print("Error", f"{tituloPelilcula} No encontrada")
        else:
            print("Error", "al realizar la solicitud")
    else:
        print("Error", "Por favor, introduzca el título de una película")


# Iniciamos la funcion
obtenerRating()
