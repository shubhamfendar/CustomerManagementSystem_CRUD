import axios from 'axios'

const Get_Customer_URL = "http://localhost:8080/customers";

const Add_Customer_URl = "http://localhost:8080/addcustomer";

const Single_Customer_URL = "http://localhost:8080/customers";

const Delete_URl = "http://localhost:8080";

const Edit_URL = "http://localhost:8080";

const SignUp="http://localhost:8080/signup";

class CustomerService {



    addCustomer(customer) {
        return axios.post(Add_Customer_URl, customer);
    }

    signUp(data) {
        return axios.post(SignUp, data);
    }

    getAllCustomer() {
        return axios.get(Get_Customer_URL);
    }

    getSingleCustomer(id) {
        return axios.get(Single_Customer_URL + '/' + id);
    }

    deleteCustomer(custID) {
        return axios.delete(Delete_URl + "/customers/" + custID);
    }

    editCustomer(customer) {
        return axios.put(Edit_URL + "/updatecustomer/" + customer.custId, customer);
    }

}
export default new CustomerService()