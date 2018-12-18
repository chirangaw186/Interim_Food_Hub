import React, { Component } from 'react';
import './allinvoicessearch.css';
import { withRouter } from "react-router-dom";
import { stat } from 'fs';


class AI extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shopid: this.props.match.params.id,
            item: [],
            ordered: [],
            examplemod: null,

        }

        this.viewDeliverer = this.viewDeliverer.bind(this);
        this.Bstatus = this.Bstatus.bind(this);
        // this.modalOnClick=this.modalOnClick.bind(this);
        this.deleteInvoice=this.deleteInvoice.bind(this);
    }



    componentDidMount() {

        fetch('http://localhost:4000/index/retrieveallinvoices')
            .then(response => response.json())

            .then((res) => {
                console.log(res);
                console.log(res.length);
                this.setState({

                    item: res
                });
                //console.log(this.state.item);
            })


    };


    modalOnClick(invoiceid) {

        fetch('http://localhost:4000/index/retrieveordereditems/' + invoiceid)
            .then(response => response.json())

            .then((res) => {
                console.log(res);
                console.log(res.length);
                this.setState({

                    ordered: res
                });

            })





        this.setState({
            examplemod: invoiceid
        });
    }


    deleteInvoice(inid){

        const invoiceD={
            invoiceID:inid,
            shopid:this.state.shopid        
        }

        fetch('http://localhost:4000/index/deletefromInvoice',{
            method:"POST",
            headers: {
              "Content-Type": "application/json"
             
            },
            body:JSON.stringify(invoiceD)
           
          })
          .then(function(response){ 
    
               return response.json(); 
            
           })
           .then((res) => {
                console.log(res);
                window.alert('Invoice '+inid+' deleted!');
                window.location.reload();
           });
           
         

    }


    viewDeliverer(inID) {

        this.props.history.push("/vi/" + inID)
    }

    Bstatus(st) {
        if (st == "Assigned")
            return true;
        else
            return false;
    }




    render() {
        let iid = 2;
        return (

            <div>
                <div className="container" style={{ backgroundColor: "#ececec" }}>

                    <h1>
                        Invoices
        </h1>
                    < br />

                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <form class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>

                                    <div class="col">
                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search by Date" />
                                    </div>

                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                    <br />
                    <br />

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Shop Name</th>
                                <th scope="col">Customer Email</th>
                                <th scope="col">Ordered Items</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Date</th>
                                <th scope="col">Delivery Status</th>
                                <th scope="col"></th>
                                <th scope="col">Assign Deliverer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.item.map((item) => <tr key={item.id}>

                                <th scope="row">{item.invoiceID}</th>

                                <td>{item.shopname}</td>
                                <td>{item.customeremail}</td>
                                <td>{item.orderedfooditems}</td>
                                <td>{item.totalprice}</td>
                                <td>{item.date}</td>
                                <td>{item.deliverystatus}</td>
                                <td>

                                    <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal" data-target="#viewModal" onClick={() => this.modalOnClick(item.invoiceID)} >
                                        View
                                    </button>

                                </td>
                                <td>
                                    <button type="button" className="btn btn-info btn-lg" disabled={this.Bstatus(item.assignstatus)} onClick={() => this.viewDeliverer(item.invoiceID)}>
                                        {item.assignstatus}
                                    </button>

                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-lg" onClick={() => this.viewDeliverer(item.invoiceID)}>
                                        <span className="glyphicon glyphicon-pencil"></span>
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-lg" onClick={()=>this.deleteInvoice(item.invoiceID)}>
                                        <span className="glyphicon glyphicon-trash"></span>
                                    </button>
                                </td>




                            </tr>
                            )}
                        </tbody>
                    </table>



                </div>


                <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Invoice {this.state.examplemod}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {/* <p>{this.state.examplemod}</p> */}

                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Item Name</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">No. of Units</th>
                                            <th scope="col">Sub Price</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.ordered.map((item) => <tr key={item.id}>

                                            <th scope="row">{item.itemid}</th>

                                            <td>{item.itemname}</td>
                                            <td>{item.unitprice}</td>
                                            <td>{item.orderedamount}</td>
                                            <td>{item.subprice}</td>

                                        </tr>
                                        )}
                                    </tbody>
                                </table>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(AI);
