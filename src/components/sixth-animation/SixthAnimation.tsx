import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Animated
} from 'react-native'
import { classes } from './SixthAnimation'

const SixthAnimation = () => {

  const [animationOne] = useState(new Animated.Value(0))
  const [animationTwo] = useState(new Animated.Value(-50))

  const estiloAnimacion = {
    transform: [
      { translateY: animationOne },
      { translateX: animationTwo }
    ]
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationTwo, {
          toValue: -30,
          duration: 0,
          useNativeDriver: false
        }),
        Animated.timing(animationOne, {
          toValue: 60,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animationTwo, {
          toValue: 30,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animationOne, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animationTwo, {
          toValue: -30,
          duration: 500,
          useNativeDriver: false
        }),
      ])
    ).start()
  }, [])

  return (
    <View style={classes.container}>
      <Animated.View style={[classes.box, estiloAnimacion]}>

      </Animated.View>
    </View>
  )
}

export default SixthAnimation
