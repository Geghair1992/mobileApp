import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import User from './Components/User/User';
import {Container} from 'react-bootstrap'


function App() {
  return (
    <Router>
     <Container>
       <Switch>
         <Route exact path="/" component={Main} />
         <Route exact path="/setting" component={Main} />
         <Route exact path="/search" component={Main} />
         <Route exact path="/user/:id" component={User} />

       </Switch>
       <Navbar/>
            
     </Container>
    </Router>
  );
}

export default App;
