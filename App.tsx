import 'react-native-gesture-handler'

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { GlobalNavigator } from '@/root/src/navigations'
import { store } from '@/root/src/redux'

enableScreens()

const fetchFonts = (): Promise<void> => {
  return Font.loadAsync({
    ml: require('@/root/assets/fonts/Montserrat-Light.ttf'),
    mr: require('@/root/assets/fonts/Montserrat-Regular.ttf'),
    mm: require('@/root/assets/fonts/Montserrat-Medium.ttf'),
    ms: require('@/root/assets/fonts/Montserrat-SemiBold.ttf'),
    mb: require('@/root/assets/fonts/Montserrat-Bold.ttf'),
    rl: require('@/root/assets/fonts/RobotoSlab-Light.ttf'),
    rr: require('@/root/assets/fonts/RobotoSlab-Regular.ttf'),
    rm: require('@/root/assets/fonts/RobotoSlab-Medium.ttf'),
    rs: require('@/root/assets/fonts/RobotoSlab-SemiBold.ttf'),
    rb: require('@/root/assets/fonts/RobotoSlab-Bold.ttf')
  })
}

const App: React.FC = () => {
  const [dataLoaded, setDataLoaded] = useState(false)
  if (!dataLoaded) {
    return (
      <AppLoading
        onError={err => console.log(err)}
        onFinish={() => setDataLoaded(true)}
        startAsync={fetchFonts}
      />
    )
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GlobalNavigator />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
