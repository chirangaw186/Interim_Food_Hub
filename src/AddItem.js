import React, { Component } from 'react';
import './additemCSS.css';


class AddItem extends Component {

    constructor(props){
        super(props);
        this.state = {
          itemid:"C001",
          itemname: "Fried Rice",
          qty: 20,
          price: 100,
          selectedFile: null,
          loaded: 0,
          imagepath:[],
          file:'',
          imagepreviewurl:''
        
          
         };
       this.handleChange=this.handleChange.bind(this);
       this.onIDValueChange=this.onIDValueChange.bind(this);
       this.onNameValueChange=this.onNameValueChange.bind(this);
      //  this.onValueSubmit=this.onValueSubmit.bind(this);
       this.onQtyValueChange=this.onQtyValueChange.bind(this);
       this.onPriceValueChange=this.onPriceValueChange.bind(this);
       this.handleSelectedFiles = this.handleSelectedFiles.bind(this);  
     
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

  handleSelectedFiles(event){
    this.setState({
      selectedFile: event.target.files[0],
      loaded:1
    });


    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file:file,
        imagepreviewurl:reader.result
      });
    }
      reader.readAsDataURL(file);
  }



    // onValueSubmit(){
     
    //   const user ={
    //     itemid: this.state.itemid,
    //     itemname: this.state.itemname,
    //     qty:this.state.qty,
    //     price: this.state.price
    //   }
     
    //       fetch('http://localhost:4000/index/def',{
    //         method:"POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body:JSON.stringify(user)
    //       })
    //       .then(function(response){ 
    //         return response.json();   
    //        })
    //        .then(function(data){ 
             
    //        console.log(data)
    //        });

    // }

 

    handleChange(){

      const data = new FormData();
      data.append('file',this.state.selectedFile);


      console.log(this.state);
      
     
      fetch('http://localhost:4000/index/imageup',{
        mode:"no-cors",
        
        method:"POST",
    
        body:data
      }).then(function(response){ 
         
        return response.json();   
       
        });

      const user ={
        itemid: this.state.itemid,
        itemname: this.state.itemname,
        qty:this.state.qty,
        price: this.state.price,
        imagepath:this.state.imagepath
        
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
       .then((res) => {
            console.log(res);
            this.setState({
              imagepath:res
            })
            console.log(this.state.imagepath['imagepath']);
            window.alert('Food Item added successfully!');
       });
       
     
 
      
      console.log(this.state.selectedFile)
     
    }


  render() {
    
    let {imagepreviewurl} = this.state;
    let $imagePreview = null;

    if(imagepreviewurl) {
      $imagePreview = (<img src={imagepreviewurl}/>);
    } else{
      $imagePreview = (<div>Please select an image for preview</div>)
    }


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

  <div className="form-group">
    <label className="control-label col-sm-2" >Image:</label>
    <div className="col-sm-10">
    <input type="file" className="form-control" onChange={this.handleSelectedFiles}/>
    </div>
  </div>

 
  {/* <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <button type="submit" className="btn btn-default"  >Submit</button>
    </div>
  </div> */}
     

</form> 
<button className="btn btn-primary col-sm-2" id="subButton" onClick={this.handleChange}>Add Item</button>

  
<div className="imgPreview">
    {$imagePreview}
</div>

  {/* <div><img src={require('./upload/'+this.state.imagepath['imagepath'])} className="img-rounded img-responsive" alt="not available"/></div> */}
    

</div>
    );
  }
}

export default AddItem;
