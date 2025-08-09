import { Provider } from "react-redux";
import Input from "./components/Input"
import List from "./components/List";
import store from "./components/store"

function App() {
  return (
    <Provider store={store}>
      <Input />
      <List />
    </Provider>

  );
}

export default App;
