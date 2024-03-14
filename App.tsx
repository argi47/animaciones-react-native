import React from 'react'
import {
  SafeAreaView
} from 'react-native'
import { classes } from './AppClasses'
import FirstAnimation from './src/components/first-animation/FirstAnimation.tsx'
import SecondAnimation from './src/components/second-animation/SecondAnimation.tsx'
import ThirdAnimation from './src/components/third-animation/ThirdAnimation.tsx'
import FourthAnimation from './src/components/fourth-animation/FourthAnimation.tsx'
import FifthAnimation from './src/components/fifth-animation/FifthAnimation.tsx'
import SixthAnimation from './src/components/sixth-animation/SixthAnimation.tsx'
import SeventhAnimation from './src/components/seventh-animation/SeventhAnimation.tsx'

const App = () => {

  return (
    <SafeAreaView style={classes.contenido}>
      {/* <FirstAnimation />
      <SecondAnimation />
      <ThirdAnimation />
      <FourthAnimation />
      <FifthAnimation />
      <SixthAnimation /> */}
      <SeventhAnimation />
    </SafeAreaView >
  )
}

export default App
