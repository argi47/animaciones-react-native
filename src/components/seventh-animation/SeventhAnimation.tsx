import React, { useEffect, useState } from 'react'
import {
  View,
  Animated
} from 'react-native'
import { classes } from './SeventhAnimation'

const SeventhAnimation = () => {

  const [animationOne] = useState(new Animated.Value(0))
  const [animationTwo] = useState(new Animated.Value(1))

  const estiloAnimacion = {
    transform: [
      { translateY: animationOne },
      { scale: animationTwo }
    ]
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationOne, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.spring(animationTwo, {
          toValue: 10,
          useNativeDriver: false
        }),
        Animated.spring(animationTwo, {
          toValue: 1,
          useNativeDriver: false
        }),
        Animated.timing(animationOne, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
        }),
      ])
    ).start()
  }, [])

  return (
    <View>
      <Animated.View style={[classes.box, estiloAnimacion]}>

      </Animated.View>
    </View>
  )
}

export default SeventhAnimation
