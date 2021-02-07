import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import "./App.css";
import IceCreamsContainer from "./components/IceCreamsContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamsContainer />
      </div>
    </Provider>
  );
}

export default App;
