import {Provider} from "react-redux";
import store from './store';
import Index from './components/Index'

const App = () => {

  return (
      <Provider store={store}>
            <Index/>
      </Provider>
  );
}

export default App;
