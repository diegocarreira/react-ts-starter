import { createContext } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Toaster} from 'react-hot-toast';

import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Customers from "./screens/Customers/Customers";
import NewCustomer from "./screens/NewCustomer/NewCustomer";
import useStorage from './services/storage/useStorage';
import { User } from './models/User';

import './style/global.scss';


type UserContextType = {
  user?: User;
  setUser: (user: User) => void;
}

export const UserContext = createContext({} as UserContextType);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const [user, setUser] = useStorage('user');

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customers" component={Customers} />
          <Route path="/new-customer" exact component={NewCustomer} />
          <Route path="/customer/:id" component={NewCustomer} />
          <Route path="/login" component={Login} />
          <Route component={Home} />
        </Switch>
      </UserContext.Provider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
