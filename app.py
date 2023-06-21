from flask import Flask, render_template, url_for


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


@app.route('/pintarPantalla')
def pintarPantalla():
    return render_template('pintarPantalla.html')
