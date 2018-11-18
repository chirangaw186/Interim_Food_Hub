import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ShopUpdateCSS.css'
import background from '../Images/whitecup.jpg';

class ShopUpdate extends Component {
  render() {
    var sectionStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: "url(" +  background  + ")"
      };
   
    return (
        <div style={ sectionStyle }>
       <div className="container" >

            <div className="panel panel-default">
                <div className="panel-body">

            <h2>Update Food Items   <FontAwesomeIcon icon="coffee" /></h2> 
            <br />
            <br />

            <h3>Search for Items :</h3>
            <br />

                <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<br/>


             <div class="search">
  <span class="fa fa-search"></span>
  <input class="form-control form-control-lg" placeholder="search "/>
</div>
        
        </div>        
        </div>
       </div>
       </div>
    );
  }
}

export default ShopUpdate;
