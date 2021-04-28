import {Provider} from 'react-redux';

import UserScreen from './components/UserScreen';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <UserScreen/>
    </Provider>
  );
}

export default App;
