import './style/app.css';
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import store from './store';
import Navbar from "./components/layout/Navbar";
import Index from './components/layout/Index'
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
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
              <Navbar/>
              <section className="container">
                  <Alerts/>
                  <Routes>
                      <Route path='/' element={<Index/>}/>
                      <Route path='/dashboard' element={<PrivateRoute component={<Dashboard/>}/>}/>
                  </Routes>
              </section>
          </Router>
      </Provider>
  );
}

export default App;
