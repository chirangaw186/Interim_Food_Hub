import React, { Component } from 'react';


class ShowItems extends Component {

    constructor(props){
        super(props);
        this.state = {
         item: [],
         numbers: [1,2,3,4,5,6]
         
        };
       
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
       

    };
    
  render() {
       
    return (
        <div className="container">
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

export default ShowItems;
