import React, { Component } from 'react';


class ViewInvoice extends Component {

  constructor(props) {
    super(props);

    this.state={
      invoiceID:this.props.match.params.id
    }

    this.defaultI=this.defaultI.bind(this);

  }


  defaultI = ()=>{
    return <img src={require("./DelivererImages/default.png")}></img>
  }

  render() {

    

      return (
        <div >
            <div className="card" style={{width:"18rem"}}>
      <img src={require("./DelivererImages/default.png")} className="card-img-top"  alt="No image to display"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-info">Assign</a>
              </div>
            </div>
        </div>
    );
  }
}

export default ViewInvoice;
