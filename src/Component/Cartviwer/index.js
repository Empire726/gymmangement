// import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "../../StyleSheet/Other/other.module.css"
import React, { Component } from 'react';
import Carousel from 'react-spring-3d-carousel';
// import uuidv4 from 'uuid';
import * as uuidv4 from "uuid"
import { config } from 'react-spring';

export default class Cartviwer extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 5,
        showNavigation: false,
        config: config.gentle,
    };

    slides = [
        {
            key: uuidv4,
            content: <img src="images/Recipe.png" alt="1" />,
        },
        {
            key: uuidv4,
            content: <img src="images/Exercise-Video.png" alt="2" />,
        },
        {
            key: uuidv4,
            content: <img src="images/Recipe.png" alt="3" />,
        },
        {
            key: uuidv4,
            content: <img src="images/recp.jpg" alt="4" />,
        },
        {
            key: uuidv4,
            content: <img src="images/Recipe.png" alt="5" />,
        },
        {
            key: uuidv4,
            content: <img src="images/Food-Nutrition-Facts.png" alt="6" />,
        },
        {
            key: uuidv4,
            content: <img src="images/yoga.jpg" alt="7" />,
        },
        {
            key: uuidv4,
            content: <img src="images/recp.jpg" alt="8" />,
        },
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    onChangeInput = e => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0,
        });
    };

    render() {
        return (<>

<div className={styles['explore_div']}>
   <h1>EXPLORE</h1>
   <p>
    Gym has something for everyone! Whether you want to lose weight or build muscle, improve your exercise form or learn how
                 to cook a healthy meal, Gym can help you adopt a healthy lifestyle and have fun doing it.
  </p>
   <span><NavLink to="/menu">Explore All</NavLink></span>
  
</div>
         
   
      <div className={styles["carasoual-div"]}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
        //   showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
      </>
        );
    }
}



// export const Cartviwer = () => {
//     return (<>
//         <div className={styles["explore_div"]}>
//            <h1>EXPLORE</h1>
//            <p>Fittr has something for everyone! Whether you want to lose weight or build muscle, improve your exercise form or learn how
//             to cook a healthy meal, Fittr can help you adopt a healthy lifestyle and have fun doing it.</p>
//            <span><NavLink to="#">Explore All</NavLink></span>
//         </div>
//         <div className={styles["carder"]}>
//         <img src="" alt="none"/>

//         </div>



//         </>
//     )
// }

// export default Cartviwer;

