import React, { Component } from 'react';
import './ViewInvoiceCSS.css';
import background from './Images/whitecup.jpg';

class ViewInvoice extends Component {

  constructor(props) {
    super(props);

    this.state = {
      invoiceID: this.props.match.params.id,
      item: [],
      currentDelivererName:""
    }

    this.defaultI = this.defaultI.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    fetch('http://localhost:4000/index/retdel')
      .then(response => response.json())

      .then((res) => {
        console.log(res);
        this.setState({

          item: res
        });
        console.log(this.state.item);
      })

  }

  handleClick(id,name) {

    
    const invoice = {
      delivererID: id,
      delivererName: name,
      assignstatus: "Assigned"
    }

    console.log(this.state.currentDelivererName)

    fetch('http://localhost:4000/index/assignD/' + this.state.invoiceID, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify(invoice)
    })
      .then(function (response) {

        return response.json();

      })
      .then((res) => {
        console.log(res);
        window.alert('Deliverer Assigned to invoice' + this.state.invoiceID + " !");
        this.props.history.push("/ai/" + 2)
      });




  }


  defaultI = () => {
    return <img src={require("./DelivererImages/default.png")}></img>
  }

  render() {

    // var sectionStyle = {
    //   width: "100%",
    //   height: "100vh",
    //   backgroundImage: "url(" + background + ")",

    // };


    return (
      <div id="DelBody">
        <div id="x" >

          {this.state.item.map((item) => <div key={item.id} className="card" style={{ width: "30rem", background: "#cecece" }}>

            <img src={require("./DelivererImages/default.png")} className="card-img-top" alt="No image to display" />
            <div className="card-body">
              {/* <h5 className="card-title">{item.name}</h5> */}
              <div>
              <p className="card-text">Name :{item.name}</p>
                <p className="card-text">Email :{item.email}</p>
                <p className="card-text">Address :{item.address}</p>
                <p className="card-text">Telephone :{item.mobile}</p>
              </div>
              <a className="btn btn-info btn-lg" onClick={() => this.handleClick(item.driverID,item.name)}>Assign</a>
            </div>
          </div>


          )}
        </div>
      </div>

    );
  }
}

export default ViewInvoice;
