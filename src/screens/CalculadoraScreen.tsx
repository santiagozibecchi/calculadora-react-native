import { View, Text } from 'react-native';
import React, { useState, useRef } from 'react';
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import useCalculadora from '../hooks/useCalculadora';



const CalculadoraScreen = () => {

     const {
          numero,
          numeroAnterior,
          limpiar,
          btnDelete,
          botonDividir,
          botonMultiplicar,
          botonRestar,
          botonSumar,
          armarNumero,
          calcular,
          postivoNegativo } = useCalculadora();

     return (
          <View style={styles.calculadoraContainer}>
               {
                    (numeroAnterior !== '0') && (
                         <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                    )
               }
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
                    <BotonCalc texto="/" color="#FF9447" accion={botonDividir} />
               </View>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="7" accion={armarNumero} />
                    <BotonCalc texto="8" accion={armarNumero} />
                    <BotonCalc texto="9" accion={armarNumero} />
                    <BotonCalc texto="x" color="#FF9447" accion={botonMultiplicar} />
               </View>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="4" accion={armarNumero} />
                    <BotonCalc texto="5" accion={armarNumero} />
                    <BotonCalc texto="6" accion={armarNumero} />
                    <BotonCalc texto="-" color="#FF9447" accion={botonRestar} />
               </View>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="1" accion={armarNumero} />
                    <BotonCalc texto="2" accion={armarNumero} />
                    <BotonCalc texto="3" accion={armarNumero} />
                    <BotonCalc texto="+" color="#FF9447" accion={botonSumar} />
               </View>

               {/* Fila de Botones */}
               <View style={styles.fila}>
                    <BotonCalc texto="0" ancho accion={armarNumero} />
                    <BotonCalc texto="." accion={armarNumero} />
                    <BotonCalc texto="=" color="#FF9447" accion={calcular} />
               </View>

          </View>
     );
};

export default CalculadoraScreen;

