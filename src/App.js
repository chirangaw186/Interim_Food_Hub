import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 



import './App.css';
import Home from './Home';
import Header from './Header';
import Orders from './Orders';
import AddItem from './AddItem';
import RealUpdate from './RealUpdate';
import ShopUpdate from './Components/ShopUpdate'
import ImageUpload from './ImageUpload';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowItems from './ShowItems';
import UpdateItem from './UpdateItem';


class App extends Component {
 
  render() {
    library.add(fab, faCheckSquare, faCoffee)
    
    return (

      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={Header}/>
        <Route path="/Orders" component={Orders}/>
        <Route path="/add" component={AddItem}/>
        <Route path="/show" component={ShowItems}/>
        <Route path="/update" component={UpdateItem}/>
        <Route path="/rupdate" component={RealUpdate}/>
        <Route path="/supdate" component={ShopUpdate}/>
        <Route path="/imageupload" component={ImageUpload}/>
      </Switch>
    </Router>
       

       
    );
  }
}

export default App;
