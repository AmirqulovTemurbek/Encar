import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
