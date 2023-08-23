import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/* Your components go here */}
    </Provider>
  );
}

export default App;