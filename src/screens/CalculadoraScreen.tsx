import React from 'react'
import { View, Text } from 'react-native'
import BotonCalc from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadorContainer}>
      <Text style={styles.resultadoPequeno}>1,500</Text>
      <Text style={styles.resultado}>1,500</Text>

      <View style={styles.fila}>

        <BotonCalc texto='C' />
        <BotonCalc texto='+/-'/>
        <BotonCalc texto='del'/>
        <BotonCalc texto='/'/>

      </View>
    </View>
  )
}

export default CalculadoraScreen
