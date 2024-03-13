import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Animated
} from 'react-native'
import { classes } from './FourthAnimation'

const FourthAnimation = () => {
  const [animacion] = useState(new Animated.Value(0))

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  })

  const estiloAnimacion = {
    transform: [{ rotate: interpolacion }]
  }

  useEffect(() => {

    // Animación para mostrar el texto "Animación 1" de opacidad: 0 a opacidad: 1
    Animated.timing(
      animacion, {
      toValue: 360, // Valor hacia el que va a cambiar la opacidad (de 0 a 1)
      duration: 500,  // Cantidad de tiempo en completar la animación
      useNativeDriver: false
    }
    ).start()
  }, [])

  return (
    <Animated.View style={[classes.box, estiloAnimacion]}>
    </Animated.View>
  )
}

export default FourthAnimation
