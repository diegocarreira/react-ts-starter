import { Customer } from '../../models/Customer';
import './CustomersList.scss';

type CustomersListProps = {
  customers: Customer[],
  handleClick?: (id: number) => void
}
const CustomersList = ({customers, handleClick}:CustomersListProps) => {

  const handleClickCustomer = (id: number) => {
    if(handleClick && id > 0){
      handleClick(id);
    }
  }
  
  return (
    <ul className="customers-list">
          <li className="list-header">
            <span>ID</span>
            <span>Name</span>
            <span>E-mail</span>
            <span>Status</span>
          </li>
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            customers.map((customer:any) => {
              return (
                <li 
                key={customer.id} 
                className="customers-item"
                onClick={()=>{
                  handleClickCustomer(customer.id);
                }}
                >
                  <span data-testid={`customer-${customer.id}-id`}>#{customer.id}</span>
                  <span data-testid={`customer-${customer.id}-name`}>{customer.name}</span>
                  <span data-testid={`customer-${customer.id}-email`}>{customer.email}</span>
                  {
                    customer.status ? 'Active' : 'Inactive'
                  }
                </li>
              )
            })
          }
          {
            (!customers || customers.length <= 0 ) && ( <span className="empty">There is no customers to show</span> )
          }
        </ul>
  ) 
}

export default CustomersList;