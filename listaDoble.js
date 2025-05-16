
import {Nodo} from "./nodo.js";
class ListaDoble {
    primero
    ultimo
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    addNodo(valor) {
        const nuevoNodo = new Nodo(valor);

        if (this.primero === null) {
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        } else {
            this.ultimo.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.ultimo;
            this.ultimo = nuevoNodo;
        }
    }

    inicioFin() {
        let pivote = this.primero;
        while (pivote !== null) {
            console.log(pivote.valor);
            pivote = pivote.siguiente;
        }
    }

    finInicio() {
        let pivote = this.ultimo;
        while (pivote !== null) {
            console.log(pivote.valor);
            pivote = pivote.anterior;
        }
    }

    //sampe to commit

    buscarNodo(valor) {
        let pivote = this.primero;
        while (pivote !== null) {
            if (pivote.valor === valor) {
                console.log('El nodo ha sido encontrado');
                return;
            }
            pivote = pivote.siguiente;
        }
        console.log('No se encontró el nodo');
    }
}

// ffef
module.exports = ListaDoble;
