import { Provider } from 'react-redux';
import store from './store';
import Form from "./Form"

console.log(store, "store")

function App() {
  return (
    <Provider store={store}>
      <div style={{border: '1px solid red', width: "100%", height: "100%"}}>
      <Form />
      </div>
      
    </Provider>
  );
}

export default App;