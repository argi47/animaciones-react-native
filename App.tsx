import React from 'react'
import {
  SafeAreaView
} from 'react-native'
import { classes } from './AppClasses'
import FirstAnimation from './src/components/first-animation/FirstAnimation.tsx'
import SecondAnimation from './src/components/second-animation/SecondAnimation.tsx'
import ThirdAnimation from './src/components/third-animation/ThirdAnimation.tsx'
import FourthAnimation from './src/components/fourth-animation/FourthAnimation.tsx'

const App = () => {

  return (
    <SafeAreaView style={classes.contenido}>
      {/* <FirstAnimation />
      <SecondAnimation />
      <ThirdAnimation /> */}
      <FourthAnimation />
    </SafeAreaView >
  )
}

export default App
