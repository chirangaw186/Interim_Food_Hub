import React, { Component } from 'react';


class Edit extends Component {

constructor(props){
    super(props);
    this.state={
        itemid:this.props.match.params.id,
        mitemid:"",
        itemname:"",
        qty:null,
        price:null,
        imagepath:""

       
    }

    this.onIDValueChange=this.onIDValueChange.bind(this);
    this.onNameValueChange=this.onNameValueChange.bind(this);
    this.onQtyValueChange=this.onQtyValueChange.bind(this);
    this.onPriceValueChange=this.onPriceValueChange.bind(this);
    
   

}


onIDValueChange (event) {
  event.preventDefault();
  this.setState({
      mitemid: event.target.value
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



componentDidMount(){
    const item ={
          
        itemid: this.state.itemid
       
      }
     
          fetch('http://localhost:4000/index/retrieveone',{
            method:"POST",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify(item)
          })
          .then(response => response.json())

        .then((res) => {
           
           
            this.setState({

              itemname:res.itemname,
              mitemid:res.itemid,
              qty:res.qty,
              price:res.price,
              imagepath:res.imagepath

             
           });
        
        })

       
    

}


  render() {

    return (
        <div className="container">
               <div>  
        <hr/>
        <div style={{backgroundColor:"#FFF0F5" }}>
        <div className="form-group" >
          <label className="col-lg-3 control-label">Item ID:</label>
          <div className="col-lg-8">
          <input className="form-control" type="text" value={this.state.mitemid} onChange={this.onIDValueChange} />
          </div>
        </div>
     
        <div className="form-group">
          <label className="col-lg-3 control-label">Item name:</label>
          <div className="col-lg-8">
          <input className="form-control" type="text" value={this.state.itemname} onChange={this.onNameValueChange}/>
          </div>
        </div>

        <div className="form-group">
              <label className="col-lg-3 control-label">Price (Rs):</label>
          <div className="col-lg-8">
          <input className="form-control" type="text" value={this.state.price} onChange={this.onPriceValueChange}/>
          </div>
          </div>

            <div class="form-group">
              <label className="col-lg-3 control-label">Available Quantity:</label>
          <div className="col-lg-8">
          <input className="form-control" type="text" value={this.state.qty} onChange={this.onQtyValueChange}/>
          </div>
          </div>


          <div className="form-group">
          <label className="col-lg-3 control-label">Item image:</label>
          <div className="col-lg-8">
          <input type="file" className="form-control"/>
          </div>
        </div>
              

          <div className="form-group">
          <label className="col-md-3 control-label"></label>

            
          
                 <button type="button" className="btn btn-danger btn-sm" style={{margin:"20px" }} >
                    <span className="glyphicon glyphicon-trash"></span> Delete this item
                 </button> 

                </div>

                <div className="imgPreview">
                        <img src={require("./upload/"+this.state.imagepath)} alt={<div>Please select an image to preview</div>}/>    
                </div>
                </div>
         </div>
        </div>
    );
  }
}

export default Edit;
