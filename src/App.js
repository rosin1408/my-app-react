import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmptyLayout from './components/Layout/EmptyLayout';
import MainLayout from './components/Layout/MainLayout';
import LayoutRoute from './components/Layout/LayoutRoute';
import Login from './components/login/Login';
import Dashboard from './components/app/dashboard/Dashboard';
import './App.css';

import 'typeface-roboto';

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
          <Route exact path="/dashboard" component={Dashboard}/>
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
