import React, { Component } from 'react';


class UpdateItem extends Component {

    constructor(props){
        super(props);
        this.state = {
         item: [],
        itemname:"Enter the item name"
         
        };
      this.onValueChange=this.onValueChange.bind(this);
    }

    onValueChange(event){
        this.setState({
            itemname:event.target.value
        });
    }

    handleChange(){
        console.log(this.state.itemname);

        const food ={
          
            itemname: this.state.itemname,
           
          }
         
              fetch('http://localhost:4000/index/deletef',{
                method:"POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body:JSON.stringify(food)
              })
              .then(function(response){ 
                return response.json();   
               })
               .then(function(data){ 
                 
               console.log(data)
               });
        
    }

    componentDidMount(){

        fetch('http://localhost:4000/index/retrieve')
        .then(response => response.json())

       .then((res) => {
           console.log(res);   
           console.log(res.length);
           this.setState({
             
              item:res
          });
          console.log(this.state.item);
       })
      


    }


  render() {
    return (
       <div className="container">
             <form className="form-inline">
                <div className="form-group">
                    <label >Food Item Name    :      </label>
              
                    <input type="text" className="form-control" id="email" onChange={(event)=>{this.onValueChange(event)}} placeholder={this.state.itemname} value={this.state.itemname}/>
                </div>
 
                
             </form> 
             <br />
             <br />
             <button type="submit" className="btn btn-primary" onClick={() => {this.handleChange()}}>Delete</button>

         <div>
                <hr/>
               <h2>Food Items</h2>
               <br />
               <br />
                <ul className="unorder">{this.state.item.map(item => <li key={item.id}>{item.itemname}
                <ul><li>Item ID: {item.itemid}</li></ul>
                <ul><li>Available Quantity : {item.qty}</li></ul>
                <ul><li>Price : {item.price}</li></ul>
                </li>)}</ul>
                    
               
            </div>




       </div>
    );
  }
}

export default UpdateItem;
