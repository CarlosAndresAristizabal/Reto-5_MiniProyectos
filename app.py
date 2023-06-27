from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
@app.route('/imdex')
def index():
    return render_template('index.html')


@app.route('/sumaIngreso')
def sumaIngreso():
    return render_template('sumaIngreso.html')


@app.route('/scrollInfinito')
def scrollInfinito():
    return render_template('scrollInfinito.html')


@app.route('/juegoBreakOut')
def juegoBreakOut():
    return render_template('juegoBreakOut.html')


@app.route('/audioaNumero')
def audioaNumero():
    return render_template('audioaNumero.html')


@app.route('/cuentaRegresivaAnoNuevo')
def cuentaRegresivaAnoNuevo():
    return render_template('cuentaRegresivaAnoNuevo.html')


@app.route('/escribirNumeroaPalabra')
def escribirNumeroaPalabra():
    return render_template('escribirNumeroaPalabra.html')


@app.route('/juegoAhorcado')
def juegoAhorcado():
    return render_template('juegoAhorcado.html')


@app.route('/menuTelefonico')
def menuTelefonico():
    return render_template('menuTelefonico.html')


@app.route('/raringPeliculas')
def raringPeliculas():
    return render_template('ratingPeliculas.html')


@app.route('/webScraper')
def webScraper():
    return render_template('webScraper.html')


@app.route('/pintarPantalla')
def pintarPantalla():
    return render_template('pintarPantalla.html')
