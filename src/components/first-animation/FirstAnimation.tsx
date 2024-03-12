import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Animated
} from 'react-native'
import { classes } from './FirstAnimation'

const FirstAnimation = () => {
  const [animacion] = useState(new Animated.Value(0))

  useEffect(() => {

    // Animación para mostrar el texto "Animación 1" de opacidad: 0 a opacidad: 1
    Animated.timing(
      animacion, {
      toValue: 1, // Valor hacia el que va a cambiar la opacidad (de 0 a 1)
      duration: 500,  // Cantidad de tiempo en completar la animación
      useNativeDriver: true
    }
    ).start()
  }, [])

  return (
    <Animated.View style={{ opacity: animacion }}>
      <Text style={classes.text}>Animación 1</Text>
    </Animated.View>
  )
}

export default FirstAnimation
