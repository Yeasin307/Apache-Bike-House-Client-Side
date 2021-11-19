import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Explore from './Pages/Explore/Explore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
