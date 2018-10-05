import React, { Component } from 'react';

import './App.css';
import Home from './Home';
import Header from './Header';
import Orders from './Orders';
import AddItem from './AddItem';
import FullPageIntroWithNonFixedNavbar from './mynav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowItems from './ShowItems';
import UpdateItem from './UpdateItem';


class App extends Component {
  render() {
    return (

      <Router>
      <Switch>
        <Route exact path="/" component={FullPageIntroWithNonFixedNavbar}/>
        <Route path="/about" component={Header}/>
        <Route path="/Orders" component={Orders}/>
        <Route path="/add" component={AddItem}/>
        <Route path="/show" component={ShowItems}/>
        <Route path="/update" component={UpdateItem}/>
      </Switch>
    </Router>
       

       
    );
  }
}

export default App;
