import React, { Component } from 'react';


class AddItem extends Component {

    constructor(props){
        super(props);
        this.state = {
          itemid:"C001",
          itemname: "Fried Rice",
          qty: 20,
          price: 100

          
         };
       this.handleChange=this.handleChange.bind(this);
       this.onIDValueChange=this.onIDValueChange.bind(this);
       this.onNameValueChange=this.onNameValueChange.bind(this);
       this.onValueSubmit=this.onValueSubmit.bind(this);
       this.onQtyValueChange=this.onQtyValueChange.bind(this);
       this.onPriceValueChange=this.onPriceValueChange.bind(this);

    }

      

    componentDidMount(){
          
            // const user ={
            //     email:this.state.username,
            //     password:this.state.password
            //   }
             
            //   fetch('http://localhost:4000/index/abc',{
            //     method:"POST",
            //     headers: {
            //       "Content-Type": "application/json",
                 
            //     },
            //     body:JSON.stringify(user)
            //   })
            //   .then(function(response){ 
            //     return response.json();   
            //    })
            //    .then(function(data){ 
                 
            //    console.log(data)
            //    });
    
    }

    onIDValueChange (event) {
        event.preventDefault();
        this.setState({
            itemid: event.target.value
        });
    }

    onNameValueChange (event) {
        event.preventDefault();
        this.setState({
            itemname: event.target.value
        });
    }
    onQtyValueChange (event) {
      event.preventDefault();
      this.setState({
          qty: event.target.value
      });
  }

  onPriceValueChange (event) {
      event.preventDefault();
      this.setState({
          price: event.target.value
      });
  }

    onValueSubmit(){
     
      const user ={
        itemid: this.state.itemid,
        itemname: this.state.itemname,
        qty:this.state.qty,
        price: this.state.price
      }
     
          fetch('http://localhost:4000/index/def',{
            method:"POST",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify(user)
          })
          .then(function(response){ 
            return response.json();   
           })
           .then(function(data){ 
             
           console.log(data)
           });

    }

    handleChange(){
      console.log(this.state);
      const user ={
        itemid: this.state.itemid,
        itemname: this.state.itemname,
        qty:this.state.qty,
        price: this.state.price
      }
     
      fetch('http://localhost:4000/index/def',{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
      })
      .then(function(response){ 
        return response.json();   
       })
       .then(function(data){ 
         
       console.log(data)
       });

    }


  render() {
    return (
        <div className="container" >

        <form className="form-horizontal" onSubmit={this.onValueSubmit}>
        <h2>Add Item</h2>
        <br />
        <br />

  <div className="form-group">
    <label className="control-label col-sm-2">Item ID : </label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={this.state.itemid} onChange={this.onIDValueChange}  placeholder="Enter ID"/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2" >Item Name :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="pwd" value={this.state.itemname} onChange={this.onNameValueChange} placeholder="Enter Name"/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2">Available Quantity :</label>
    <div className="col-sm-10">
      <input type="Number" className="form-control" value={this.state.qty} onChange={this.onQtyValueChange} id="email" placeholder="Enter Available Quantity"/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2" >Price:</label>
    <div className="col-sm-10">
      <input type="Number" className="form-control" id="pwd" value={this.state.price} onChange={this.onPriceValueChange} placeholder="Enter Price"/>
    </div>
  </div>
 
  {/* <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <button type="submit" className="btn btn-default"  >Submit</button>
    </div>
  </div> */}
  

</form> 
<button className="btn btn-primary" id="subButton" onClick={this.handleChange}>Add Item</button>
</div>
    );
  }
}

export default AddItem;
