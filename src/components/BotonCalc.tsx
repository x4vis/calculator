import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'

interface ICalcProps {
  texto: string;
}

const BotonCalc = ({texto}: ICalcProps) => {
  return (
    <View style={styles.boton}>
      <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  )
}

export default BotonCalc
