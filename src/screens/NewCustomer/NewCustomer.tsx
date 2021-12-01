import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import './NewCustomer.scss';
import { Customer } from "../../models/Customer";
import CustomerForm from "../../components/CustomerForm/CustomerForm";
import { useHistory, useParams } from "react-router-dom";
import Api from "../../services/Api";
import toast from "react-hot-toast";

type RouteParams = {
  id: string | undefined;
}

const NewCustomer = () => {
  
  const [customerBeforeEdit, setCustomerBeforeEdit] = useState<Customer>();
  const { id } = useParams<RouteParams>();
  const history = useHistory();

  
  const getCustomerApi = async (id : string) => {
    const endpoint = (id) ? 'customers/'+id : 'customers';
    const {data} = await Api.get(endpoint);
    if(data){
      setCustomerBeforeEdit(data);
    }
  }
  
  const handleSubmit = async (values:Customer) => {
    if(id){
      const {data} = await Api.put('customers/'+id , values);
      if(data){
        toast.success('Updated');
        history.push('/customers');
      }
    }else{
      const {data} = await Api.post('customers' , values);
      if(data){
        toast.success('Saved');
        history.push('/customers');
      }
    }
  }
  
  const deleteCustomer = async () => {
    if(confirm("Are you sure you want to delete this customer ?")){
      if(id){
        const {data} = await Api.delete('customers/'+id);
        if(data){
          toast.success('Removed');
          history.push('/customers');
        }
      }
    }
  }

  useEffect(() => {
    if(id !== undefined){
      getCustomerApi(id);
    }
  }, [id]);


  return (
    <>
      <Header />
      <h2 className="page-title"> 
        { id && ('Customer #' + id) || 'New Customer'  }
      </h2>    
      { id && ( <button className="deleteButton" onClick={deleteCustomer}>Delete</button> )}  
      <CustomerForm handleSubmit={handleSubmit} customerBeforeEdit={customerBeforeEdit} />
    </> 
  );
};
export default NewCustomer;
