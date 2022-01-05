import './App.css';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import DogList from './views/DogList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/">Home</NavLink>
        </header>
        <Switch>
          <Route path="/dogs/:id" />
          <Route exact path="/" component={DogList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
