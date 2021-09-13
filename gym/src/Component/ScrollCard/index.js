import React from 'react'
import styles from "../../StyleSheet/Scroll/scroll.module.css"
import { NavLink } from 'react-router-dom';
import { Itemda } from './itemda';

const Card = () => {
    return (
        <>

            <div className={styles['card-container']}>
                {Itemda.map((item, index) => {
                    return (
                        <div className={styles['card']} key={index}>
                           
                                
                                <div className={styles["img_section"]}>
                                <img src={item.img} alt="none" />
                               
                              
                                </div>
                              
                            <div className={styles['tags']}>
                                <div><NavLink to="/client">MORE {">>"}</NavLink></div>
                                
                            </div>
                        </div>

                             )
                })}

                
            </div>

        </>
    )
};

export default Card;
