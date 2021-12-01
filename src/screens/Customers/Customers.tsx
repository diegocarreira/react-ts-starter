import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CustomersList from "../../components/CustomersList/CustomersList";
import './Customers.scss';
import { Customer } from "../../models/Customer";

import Api from "../../services/Api";
import { useHistory } from "react-router-dom";
import LoaderOverlay from "../../components/LoaderOverlay/LoaderOverlay";

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();

  const getCustomersApi = async () => {
    const {data} = await Api.get('customers');
    if(data){
      setCustomers(data);
      setLoading(false);
    }
  }
  
  const handleClick = async (id:number) => {
    console.log('Customer clicked: ',id);
    history.push('customer/'+id);
  }
  
  useEffect(() => {
    getCustomersApi();
  }, []);
  
  const goToNewCustomer = () => {
    history.push('new-customer');
  }
  return (
    <>
      <LoaderOverlay active={loading} size={'100px'} message={'Loading...'} />
      <Header />
      <h2 className="page-title"> Customers  <button onClick={goToNewCustomer}>New</button> </h2>
      <div className="container">
        <CustomersList customers={customers} handleClick={handleClick} />
      </div>
    </> 
  );
};
export default Customers;
