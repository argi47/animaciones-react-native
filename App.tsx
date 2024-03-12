import React from 'react'
import {
  SafeAreaView,
  Text,
  View
} from 'react-native'
import { classes } from './AppClasses'
import FirstAnimation from './src/components/first-animation/FirstAnimation.tsx'
import SecondAnimation from './src/components/second-animation/SecondAnimation.tsx'

const App = () => {

  return (
    <SafeAreaView style={classes.contenido}>
      <FirstAnimation />
      <SecondAnimation />
    </SafeAreaView >
  )
}

export default App
