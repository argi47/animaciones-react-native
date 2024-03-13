import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Animated
} from 'react-native'
import { classes } from './ThirdAnimation'

const ThirdAnimation = () => {
  const [animacion] = useState(new Animated.Value(14))

  useEffect(() => {

    // Animación para mostrar el texto "Animación 3" de fontSize: 14 a fontSize: 40
    Animated.timing(
      animacion, {
      toValue: 40, // Valor hacia el que va a cambiar el fontSize (de 14 a 40)
      duration: 500,  // Cantidad de tiempo en completar la animación
      useNativeDriver: false
    }
    ).start()
  }, [])

  return (
    <View>
      <Animated.Text style={[classes.text, { fontSize: animacion }]}>Animación 3</Animated.Text>
    </View>
  )
}

export default ThirdAnimation
