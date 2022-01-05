import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import DogList from './views/DogList/DogList';
import DogDetail from './views/DogDetail/DogDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={DogList} />
          <Route path="/dogs/:id" component={DogDetail} />
          <Redirect exact from="/dogs" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
