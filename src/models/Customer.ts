export type Customer = {
  id: number | undefined;
  name: string;
  email: string;
  status: boolean;
}

const customersMock: Array<Customer> = [
  {
    id: 1
    ,name: 'Jose'
    ,email: 'test@test.com'
    ,status: true
  }
  ,{
    id: 2
    ,name: 'Maria'
    ,email: 'test2@test.com'
    ,status: false
  }
];

export {customersMock};