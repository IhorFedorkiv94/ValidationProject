import { Provider } from 'react-redux';
import store from './store';
import Form from "./Form"
import ItemList from "./Table"

console.log(store, "store")

function App() {
  return (
    <Provider store={store}>
      <div style={{width: "100%", height: "100%"}}>
      <Form />
      <ItemList />
      </div>
      
    </Provider>
  );
}

export default App;