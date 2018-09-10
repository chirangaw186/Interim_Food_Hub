import React, { Component } from 'react';


class Orders extends Component {

    constructor(props){
        super(props);
        this.state={
            invoice:false,
    
    
        }
    }
    
      showinvo(){
        this.setState({ invoice: true });
      }
      
  render() {
    return (
        <div className="container">
          
        <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
        <div className="list-group">
 <button type="button" className="list-group-item list-group-item-action "  onClick={this.showinvo.bind(this)} >Invoice 1</button>
 <button type="button" className="list-group-item list-group-item-action" onClick={this.showinvo.bind(this)}> Invoice 2</button>
 <button type="button" className="list-group-item list-group-item-action" onClick={this.showinvo.bind(this)}>Invoice 3</button>
 <button type="button" className="list-group-item list-group-item-action" onClick={this.showinvo.bind(this)}>Invoice 4</button>
 </div>
 <div className="row">
     <div className="col-md-12" >
     
   {this.state.invoice ? 
   <div className="card h-50 ">
   <h3 className="card-header">Invoice Details</h3>
   <div className="card-body">
   <h4 className="card-text">Shop name:</h4>
   <h4 className="card-text">Invoice ID:</h4>
     <h4 className="card-title">Ordered food items:</h4>
     <h4 className="card-text">Total price:</h4>
     <h4 className="card-text">Date:</h4>
     <h4 className="card-text">Delivery Status:</h4>



   </div>
 </div>
 
 :
 <div></div>
   
   }
     </div>
   </div>
        
        </div>
        <div className="col-md-1"></div>
<div  className="well col-md-3"  style={{borderLeft:'2px solid #711F26'}}>
<div className="media">

 <div className="media-body">
   <h3  className="mt-0">Deliverer 1</h3>
   <h4><small>User Name : </small>Tharindu_Madushanka</h4>
   <h4><small>Deliverying Area : </small>Moratuwa</h4>
   <h4><small>Mobile No : </small>071-3335252</h4>
   <button type="submit"  onClick={() => this.props.toggleit("login1")}   className="btn btn-danger">{this.props.login1 ? "Assign to Order" : "Assigned"}</button>
   
 </div>
</div>
<hr/>

<div className="media">
 
 <div className="media-body">
   <h3 className="mt-0">Deliverer 2</h3>
   <h4><small>User Name : </small>Nadeesha_Chathumal</h4>
   <h4><small>Deliverying Area : </small>Katubadda</h4>
   <h4><small>Mobile No : </small>071-1243552</h4>

   <button type="submit"  onClick={() => this.props.toggleit("login2")}   className="btn btn-danger">{this.props.login2 ? "Assign to Order" : "Assigned"}</button>

 </div>
</div>
<hr/>
<div class="media">
 
 <div class="media-body">
   <h3  class="mt-0">Deliverer 3</h3>
   <h4><small>User Name : </small>Hasitha_Perea</h4>
   <h4><small>Deliverying Area : </small>Piliyandala</h4>
   <h4><small>Mobile No : </small>071-8763552</h4>

   <button type="submit"  onClick={() => this.props.toggleit("login3")}   className="btn btn-danger">{this.props.login3 ? "Assign to Order" : "Assigned"}</button>

 </div>
</div>
<hr/>

<div class="media">
 
 <div class="media-body">
   <h3  class="mt-0">Deliverer 4</h3>
    <h4><small>User Name : </small>Kavindu_Gihan</h4>
<h4><small>Deliverying Area : </small> Panadura</h4>
  <h4><small>Mobile No : </small>071-1243252</h4>
   <button type="submit"  onClick={() => this.props.toggleit("login4")}   className="btn btn-danger">{this.props.login4 ? "Assign to Order" : "Assigned"}</button>
   
 </div>

</div>
<hr/>

</div>
</div>

 
</div>
    );
  }
}

export default Orders;
