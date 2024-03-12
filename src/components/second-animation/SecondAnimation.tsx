import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Animated
} from 'react-native'
import { classes } from './SecondAnimation'

const SecondAnimation = () => {
  const [animacion] = useState(new Animated.Value(0))

  useEffect(() => {

    // 
    Animated.timing(
      animacion, {
      toValue: 450, // 
      duration: 1000,  // Cantidad de tiempo en completar la animación
      useNativeDriver: false
    }
    ).start()
  }, [])

  return (
    <Animated.View style={[classes.box, { width: animacion, height: animacion }]}>
    </Animated.View>
  )
}

export default SecondAnimation
