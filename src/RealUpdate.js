import React, { Component } from 'react';
import background from './Images/whitecup.jpg';
import './RealUpdateCSS.css';


class RealUpdate extends Component {

  constructor(props){
    super(props);

    this.state={
      item:[]
    };
  }

  

//   componentDidMount(){

//     fetch('http://localhost:4000/index/retrieve')
//     .then(response => response.json())

//    .then((res) => {
//        console.log(res);   
//        console.log(res.length);
//        this.setState({
         
//           item:res
//       });
//       console.log(this.state.item);
//    })
  


// }





  render() {
    var sectionStyle = {
      width: "100%",
      height: "100vh",
      backgroundImage: "url(" +  background  + ")"
    };

  
    return (

      <div className="panel panel-default" style={ sectionStyle }>
               <div className="container">

<h2>Pizza Hut</h2>

<div className="form-group" style={{marginTop:'100px'}}>
  <label className="control-label col-sm-2">Item ID : </label>
  <div className="col-sm-10">
  <input type="text" className="form-control"    placeholder="Enter ID"/>
  </div>
</div>
<br/>
<br/>
<div className="form-group">
<label className="control-label col-sm-2" >Item Name :</label>
<div className="col-sm-10">
<input type="text" className="form-control" id="pwd"  onChange={this.onNameValueChange} placeholder="Enter Name"/>
</div>
</div>
<br/>
<br/>
<div className="form-group">
<label className="control-label col-sm-2">Available Quantity :</label>
<div className="col-sm-10">
<input type="Number" className="form-control"  id="email" placeholder="Enter Available Quantity"/>
</div>
</div>
<br/>
<br/>
<div className="form-group">
<label className="control-label col-sm-2" >Price:</label>
<div className="col-sm-10">
<input type="Number" className="form-control" id="pwd"  placeholder="Enter Price"/>
</div>
</div>

         





          

      
    <div className="inner-addon left-addon">
      <i className="glyphicon glyphicon-user"></i>      
      <input type="text" className="form-control" placeholder="Username" />
    </div>

    <div className="inner-addon right-addon">
      <i className="glyphicon glyphicon-search"></i>
      <input type="text" className="form-control" placeholder="Search" />
    </div>
    
    <br/>
    <br/>
    
    <form className="webform-client-form webform-client-form-48" action="/estimation" method="post" id="webform-client-form-48" accept-charset="UTF-8">
        <div>
            <div class="col-lg-5 col-md-12 col-xs-12 col-sm-12">
                <label className="control-label" for="edit-submitted-codepostal">Code postal <span className="form-required" title="Ce champ est requis.">*</span></label>
                <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-user"></i>
                    <input placeholder="Code postal" className="form-control form-text" id="edit-submitted-codepostal" name="submitted[CodePostal]" value="" size="60" maxlength="5" autocomplete="off" type="text"/>
                </div>
            </div>
        </div>
    </form>
    
    <br/>
    <br/>
    
    <form className="webform-client-form webform-client-form-48" action="/estimation" method="post" id="webform-client-form-48" accept-charset="UTF-8">
        <div>
            <div className="input-group add-on col-lg-5 col-md-12 col-xs-12 col-sm-12">
                <label className="control-label" for="edit-submitted-codepostal">Code postal <span class="form-required" title="Ce champ est requis.">*</span></label>

                    <input placeholder="Code postal" class="form-control form-text" id="edit-submitted-codepostal" name="submitted[CodePostal]" value="" size="60" maxlength="5" autocomplete="off" type="text"/>
                    <div className="input-group-btn vertical-align-bottom">
                        <button className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
                    </div>

            </div>
        </div>
    </form>    
    <br/>
    <br/>
    
    <div className="col-md-12">
    	<div className="input-group add-on col-md-2 date datepicker" data-date-format="yyyy-mm-dd">
    		<input name="name" value="" className="form-control date-picker" data-date-format="yyyy-mm-dd" type="text"/>
          <div className="input-group-btn">
            <button className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
          </div>
   		</div>
    </div>

    <br/>
    <br/>

    <div className="row">

      <div className="form-group col-xs-6">
        <label className="control-label"><code>.inner-addon.<i>left</i>-addon</code></label>
        <div className="inner-addon left-addon">
          <i className="glyphicon glyphicon-user"></i>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
      </div>

      <div className="form-group col-xs-6">
        <label className="control-label">
          <code>.inner-addon.<i>right</i>-addon</code>
        </label>
        <div className="inner-addon right-addon">
          <i className="glyphicon glyphicon-search"></i>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
    </div>

 

  </div>

        </div>
       
    );
  }
}

export default RealUpdate;
