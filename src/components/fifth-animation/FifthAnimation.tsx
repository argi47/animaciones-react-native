import React, { useState } from 'react'
import {
  Text,
  View,
  Pressable,
  Animated
} from 'react-native'
import { classes } from './FifthAnimation'

const FifthAnimation = () => {

  const [animacion] = useState(new Animated.Value(1))

  const estiloAnimacion = {
    transform: [{ scale: animacion }]
  }

  const presionarBtn = () => {
    Animated.spring(animacion, {
      toValue: .8,
      useNativeDriver: true
    }).start()
  }

  const soltarBtn = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4,  // Cuanto más bajo sea el valor, más rebote genera la animación del botón. Por defecto friction = 7
      tension: 60,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={classes.contenedor}>
      <Pressable
        onPressIn={() => presionarBtn()}
        onPressOut={() => soltarBtn()}
      >
        <Animated.View style={[classes.btn, estiloAnimacion]}>
          <Text style={classes.text}>Púlsame</Text>
        </Animated.View>
      </Pressable>
    </View>
  )
}

export default FifthAnimation
