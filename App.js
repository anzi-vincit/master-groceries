import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import MainContainer from './containers/main-container';
import { store } from './store';

const App = () => {

  const [fontsLoaded] = useFonts({
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
     <MainContainer />
    </Provider>      
  );
}

export default App;
