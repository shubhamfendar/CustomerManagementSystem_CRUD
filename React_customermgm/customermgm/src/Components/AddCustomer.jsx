
import React, { Component } from 'react'

import CustomerService from '../Service/CustomerService';



export default class AddCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            custId: '',
            name: '',
            city: '',
            age: '',
            category: ''
        }
        this.changeCustidHandler = this.changeCustidHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);

        this.saveCustomer = this.saveCustomer.bind(this);

    }
    changeCustidHandler = (event) => {
        this.setState({ custId: event.target.value })
    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value })
    }
    changeAgeHandler = (event) => {
        this.setState({ age: event.target.value })
    }
    changeCategoryHandler = (event) => {
        this.setState({ category: event.target.value })
    };


    cancel() {
        this.props.history.push("/getCustomer");
    }

    saveCustomer = (e) => {
        e.preventDefault();

        let customerdetails = { custId: this.state.custId, name: this.state.name, city: this.state.city, age: this.state.age, category: this.state.category };
        console.log('customer => ' + JSON.stringify(customerdetails));

        CustomerService.createCustomer(customerdetails).then(res => {
            this.props.history.push('/getCustomer');
        })
    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>

                            <div className='text-center'><h2><i>Add Customer</i></h2></div>
                            <div align="center">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group col-6">
                                            <label> Customer Id </label>
                                            <input placeholder="Customer Id" name="custId" className="form-control"
                                                value={this.state.custId} onChange={this.changeCustidHandler} />
                                        </div>
                                        <br></br>
                                        <div className="form-group col-6">
                                            <label>Name: </label>
                                            <input placeholder="Name" name="name" className="form-control"
                                                value={this.state.name} onChange={this.changeNameHandler} />
                                        </div>
                                        <br></br>
                                        <div className="form-group col-6">
                                            <label> City </label>
                                            <input placeholder="city" name="city" className="form-control"
                                                value={this.state.city} onChange={this.changeCityHandler} />
                                        </div>
                                        <br></br>

                                        <div className="form-group col-6">
                                            <label> Age </label><br></br>
                                            <input placeholder="age" name="age" className="form-control"
                                                value={this.state.age} onChange={this.changeAgeHandler} />
                                        </div>
                                        <br></br>

                                        <div className="form-group col-6">
                                            <label> Category </label>
                                            <input placeholder="category" name="category" className="form-control"
                                                value={this.state.category} onChange={this.changeCategoryHandler} />
                                        </div>
                                        <br></br>

                                        <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
