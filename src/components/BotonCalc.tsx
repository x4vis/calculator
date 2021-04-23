import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'

interface ICalcProps {
  texto: string;
  color?: string;
}

const BotonCalc = ({texto, color='#2D2D2D'}: ICalcProps) => {
  return (
    <View style={{
        ...styles.boton,
        backgroundColor: color,
      }}>
      <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  )
}

export default BotonCalc
