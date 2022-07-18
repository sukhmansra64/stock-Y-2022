import './style/app.css';
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import store from './store';
import Index from './components/layout/Index'
import Alerts from "./components/layout/Alerts";
import {useEffect} from "react";
import setAuthToken from "./utilities/setAuthToken";

const App = () => {
    useEffect(()=>{
        setAuthToken(localStorage.getItem("token"));
    },[])
  return (
      <Provider store={store}>
          <Router>
              <section className="container">
                  <Alerts/>
                  <Routes>
                      <Route path='/' element={<Index/>}/>
                  </Routes>
              </section>
          </Router>
      </Provider>
  );
}

export default App;
