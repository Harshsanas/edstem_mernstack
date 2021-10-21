
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar.jsx/Navbar';
import Register from './Components/Register/Register';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/">
        <Home/>
        </PrivateRoute>

        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
