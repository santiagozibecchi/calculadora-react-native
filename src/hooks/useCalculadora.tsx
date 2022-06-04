import { useRef, useState } from "react";

enum Operadores {
     sumar, restar, multiplicar, dividir
}

const useCalculadora = () => {

     const [numeroAnterior, setNumeroAnterior] = useState('0');
     const [numero, setNumero] = useState('0');

     const ultimaOperacion = useRef<Operadores>();

     const limpiar = () => {
          setNumero('0');
          setNumeroAnterior('0');
     };

     const armarNumero = (numeroPosterior: string) => {

          // No aceptar doble punto
          if (numero.includes('.') && numeroPosterior === '.') return;

          // si el numero empieza con 0 o -0
          if (numero.startsWith('0') || numero.startsWith('-0')) {

               // Punto decimal => 0.000
               if (numeroPosterior === '.') {
                    setNumero(numero + numeroPosterior);

                    // Evaluar si es otro cero, y hay un punto
               } else if (numeroPosterior === '0' && numero.includes('.')) {
                    setNumero(numero + numeroPosterior);
                    // si es diferente de 0 y no tiene un punto => sustituir el 0 por el nuevo numer0
               } else if (numeroPosterior !== '0' && !numero.includes('.')) {
                    setNumero(numeroPosterior);
                    // evitar 0000.0....
               } else if (numeroPosterior === '0' && !numero.includes('.')) {
                    setNumero(numero);
               } else {
                    setNumero(numero + numeroPosterior);
               }
          } else {
               setNumero(numero + numeroPosterior);
          }
     };

     const postivoNegativo = () => {
          if (numero.includes('-')) {
               setNumero(numero.replace('-', ' '));
          } else {
               setNumero('-' + numero);
          }
     };

     const btnDelete = () => {

          // Tengo que validar que si se borra el ultimo numero o '-'=> este debe ser cero
          if (numero.length === 1 || (numero.length === 2 && numero.startsWith('-'))) {
               setNumero('0');
          } else {
               setNumero(numero.slice(0, -1));
          }
     };

     const mostrarNumeroArriba = () => {
          if (numero.endsWith('.')) {
               setNumeroAnterior(numero.slice(0, -1));
          } else {
               setNumeroAnterior(numero);
          }
          setNumero('0');
     };

     const botonDividir = () => {
          // Toco el boton de dividir pero primero hago el cambio
          mostrarNumeroArriba();
          ultimaOperacion.current = Operadores.dividir;
     };
     const botonMultiplicar = () => {
          // Toco el boton de dividir pero primero hago el cambio
          mostrarNumeroArriba();
          ultimaOperacion.current = Operadores.multiplicar;
     };
     const botonRestar = () => {
          // Toco el boton de dividir pero primero hago el cambio
          mostrarNumeroArriba();
          ultimaOperacion.current = Operadores.restar;
     };
     const botonSumar = () => {
          // Toco el boton de dividir pero primero hago el cambio
          mostrarNumeroArriba();
          ultimaOperacion.current = Operadores.sumar;
     };

     const calcular = () => {

          const numero1 = Number(numero);
          const numero2 = Number(numeroAnterior);

          switch (ultimaOperacion.current) {
               case Operadores.sumar:
                    setNumero(`${numero1 + numero2}`);
                    break;
               case Operadores.restar:
                    setNumero(`${numero2 - numero1}`);
                    break;
               case Operadores.multiplicar:
                    setNumero(`${numero1 * numero2}`);
                    break;
               case Operadores.dividir:
                    setNumero(`${numero2 / numero1}`);
                    break;

          }

          // fuera del swith para que solo se ejecute una sola vez
          setNumeroAnterior('0');
     };

     return {
          numero,
          numeroAnterior,
          limpiar,
          armarNumero,
          postivoNegativo,
          btnDelete,
          mostrarNumeroArriba,
          botonDividir,
          botonMultiplicar,
          botonRestar,
          botonSumar,
          calcular,
     };

};

export default useCalculadora;
