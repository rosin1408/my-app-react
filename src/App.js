import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import EmptyLayout from './components/Layout/EmptyLayout';
import MainLayout from './components/Layout/MainLayout';
import LayoutRoute from './components/Layout/LayoutRoute';
import PrivateRoute from './components/Layout/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/app/dashboard/Dashboard';
import './App.css';

import 'typeface-roboto';
import Customers from './components/app/customers/CustomersView';
import CustomerForm from './components/app/customers/CustomerForm';

function App() {
  return (
    <Router>
      <Switch>

        <LayoutRoute
                exact
                path="/login"
                layout={EmptyLayout}
                component={props => (
                  <Login  {...props} />
                )}
              />

        <MainLayout>
          <PrivateRoute exact path="/" component={Dashboard}/>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <PrivateRoute exact path="/customers" component={Customers}/>
          <PrivateRoute exact path="/customer" component={CustomerForm}/>
        </MainLayout>
        
      </Switch>
    </Router>
  );
}

export default App;

// import './App.css';

// import 'typeface-roboto';
// import Application from './components/app/Application'

// function App() {
//   return (
//     <div className="App">
//       <Application />
//     </div>
//   );
// }

// export default App;
