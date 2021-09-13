import React from 'react'
import styles from "../../StyleSheet/Home/home.module.css"
// import Plan from '../Transformation/Plan'
import Card from '../ScrollCard'
import Service from "../Service"
import Heading from '../Heading/indes';
import Front from '../Front';
import Trans from '../Transformation'
import { NavLink } from 'react-router-dom'
// import Contact from '../Contact'
import Cartviwer from '../Cartviwer'
// import Client from '../Client'
// import Menu from '../Menu'
import Homes from '../Homes'
// import Workout from '../Workout'





export const Home = () => {
  return (<>
    <div className={styles["home-div"]}>
      <div className={styles["body_div"]}>
      <div className={styles["image-div"]}>
       <h2>Gym Trainer</h2>
       </div>
      <div className={styles["headering"]}>
      <p>BEST PLATFORM FOR TRAINER</p>
      <h2>we're sure we are provide<br/> best trainer!</h2>
      <span>Now we are the provider for trainer in the world best training
      this platform is <br />mainly used for the trainer </span> <br/>
      <button> <NavLink to="client">Read more</NavLink></button>
</div>
      </div>
    </div>
    <Trans />
    <Homes/>
    <Front />
    <Service />
    <Heading />
    <Card />
    <Cartviwer />
  
   

  </>
  )
}
export default Home;

