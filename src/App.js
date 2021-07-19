import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Product'
import Account from './pages/Account'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
    <Router>
    <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/account' component={Account} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          
        </Switch>
        
      </Router>
    </>
  );
}

export default App;

/*<div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Sign up</a>
                </li>
              </ul>
            </div>*/
