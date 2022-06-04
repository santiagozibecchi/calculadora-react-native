import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';

const CalculadoraScreen = () => {

     const [numeroAnterior, setNumeroAnterior] = useState('0');
     const [numero, setNumero] = useState('0');

     const limpiar = () => {
          setNumero('0');
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

     return (
          <View style={styles.calculadoraContainer}>
               <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
               <Text
                    style={styles.resultado}
                    numberOfLines={1}
                    adjustsFontSizeToFit
               >
                    {numero}
               </Text>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
                    <BotonCalc texto="+/-" color="#9B9B9B" accion={postivoNegativo} />
                    <BotonCalc texto="del" color="#9B9B9B" accion={btnDelete} />
                    <BotonCalc texto="/" color="#FF9447" accion={limpiar} />
               </View>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="7" accion={armarNumero} />
                    <BotonCalc texto="8" accion={armarNumero} />
                    <BotonCalc texto="9" accion={armarNumero} />
                    <BotonCalc texto="x" color="#FF9447" accion={limpiar} />
               </View>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="4" accion={armarNumero} />
                    <BotonCalc texto="5" accion={armarNumero} />
                    <BotonCalc texto="6" accion={armarNumero} />
                    <BotonCalc texto="-" color="#FF9447" accion={limpiar} />
               </View>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="1" accion={armarNumero} />
                    <BotonCalc texto="2" accion={armarNumero} />
                    <BotonCalc texto="3" accion={armarNumero} />
                    <BotonCalc texto="+" color="#FF9447" accion={limpiar} />
               </View>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="0" ancho accion={armarNumero} />
                    <BotonCalc texto="." accion={armarNumero} />
                    <BotonCalc texto="=" color="#FF9447" accion={limpiar} />
               </View>

          </View>
     );
};

export default CalculadoraScreen;

