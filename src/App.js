import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <h1>It&apos;s a Doggy Dog World</h1>
            <p>find your fuzzy companion today!</p>
          </Route>
          <Route exact path="/dogs" />
          <Route path="/dogs/:id" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
