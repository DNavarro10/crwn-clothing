import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage.componen/homepage.component'
import MenuItem from './componets/menu-item/menu-item.component'
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
 
  <div>
    <h1>Router component</h1>
  </div>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
