import React, { Component } from 'react'
import CustomerService from '../Service/CustomerService'

export default class ListCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer=this.editCustomer.bind(this);
    }

    componentDidMount() {
        CustomerService.getCustomer().then((res) => {
            this.setState({ customers: res.data });

        });
    }

    addCustomer() {
        this.props.history.push('/add-customer');
    }

    editCustomer(id){
        this.props.history.push(`/updateCustomer/${id}`);
    }



    render() {
        return (
            <div>
                <h2 className='text-center'>List of All Customers</h2>
                <div className='row-6' >
                    <button className='btn btn-primary' onClick={this.addCustomer}>Add Customer</button>
                </div>
                <br></br>
                <div className='row-6 colspan-4'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Customer Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                        <tr key={customer.custId}>
                                            <td>{customer.custId}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.city}</td>
                                            <td>{customer.age}</td>
                                            <td>{customer.category}</td>
                                            <td>
                                                <button onClick={()=>this.editCustomer(customer.custId)} className='btn btn-warning'><i>Update</i></button>
                                            </td>

                                        </tr>


                                )
                            }

                        </tbody>

                    </table>
                </div>


            </div>
        )
    }
}
