import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Korea from './components/Korea';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/korea" exact component={Korea} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
