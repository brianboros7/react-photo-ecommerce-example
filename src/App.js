import './styles/App.css';
import Header from './components/header/Header' 
import Home from './pages/Home'
import Shop from './pages/Shop'

// import Cart from './pages/Cart'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Header /> 
      <Switch>
        <Route
          path="/" exact>
            <Home /> 
        </Route>
        <Route
          path="/shop">
            <Shop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
