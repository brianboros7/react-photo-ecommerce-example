import './styles/App.css';
import Header from './components/header/Header' 
import Home from './pages/Home'
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

      
      </Switch>
    </Router>
  );
}

export default App;
