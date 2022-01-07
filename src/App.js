import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import DogList from './views/DogList/DogList';
import DogDetail from './views/DogDetail/DogDetail';
import Error from './views/Error/Error';
import DogEdit from './views/DogEdit/DogEdit';
import DogCreate from './views/DogCreate/DogCreate';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Redirect exact from="/dogs" to="/" />
          <Route exact path="/" component={DogList} />
          <Route exact path="/dogs/:id" component={DogDetail} />
          <Route exact path="/dogs/:id/edit" component={DogEdit} />
          <Route exact path="/admin" component={DogCreate} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
