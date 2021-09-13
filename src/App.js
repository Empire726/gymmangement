import './App.css';
import Team from './Component/Team';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import Cartviwer from "./Component/Cartviwer"
import About from "./Component/About"
import Service from "./Component/Service"
import Menu from "./Component/Menu"
import Contact from "./Component/Contact"
import Home from "./Component/Home"
import Client from './Component/Client';
import Trans from './Component/Transformation';
import Plan from './Component/Transformation/Plan';
import Heading from './Component/Heading/indes';
import Card from './Component/ScrollCard';
import Footer from './Component/Footer';
import Workout from './Component/Workout';


function App() {
  return (
    <>
    <Router>
    
    
  
    {/* <Menu/> */}
  
  <Switch>

    <Route exact path="/" component={Home} />
    <Route exact path="/cartviwer" component={Cartviwer} />
    <Route exact path="/about" component={About} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/team" component={Team} />
   <Route exact path="/plan" component={Plan} />
    <Route exact path="/client" component={Client} />
     <Route exact path="/workout" component={Workout} />
          <Route exact path="/trans" component={Trans} />
    <Redirect exact to="/" />
  </Switch>
<Footer/>
</Router>
</>

  );
}

export default App;
