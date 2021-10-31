import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"
import Formulario from './Components/Form.jsx'
import Home from './Components/Home.jsx'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Formulario}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
