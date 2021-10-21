
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar.jsx/Navbar';
import Register from './Components/Register/Register';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home/Home';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
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
