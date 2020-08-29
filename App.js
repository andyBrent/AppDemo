import React from 'react';
import AppContainer from './src/createNavigator';
import {Provider} from 'react-redux';
import rootReducer from './src/edit/reducer';
import store from './src/configureStore';
// import {withAuthenticator} from 'aws-amplify-react-native';

const App = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
