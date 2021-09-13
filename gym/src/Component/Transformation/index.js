import React from 'react'
import styles from "../../StyleSheet/Transformation/Formation.module.css"
import img from "../image/trans.png"


const Trans = () => {
    return (
        <>
            <div className={styles["trans-container"]}>
                <div className={styles["trans-image"]} >
                    <img src={img} alt="loading" />
                </div>
                <div className={styles["paragraph"]}>
                    <h3>WHAT</h3>
                    <span>WE DO?</span>
                    <p>Our coaching is based on scientifically-backed nutrition and training protocols,
                     which are personalized according to your preferences, schedule, level of experience,
                      and availability of equipment or without equipment.<br/><br/>We will track progress through weekly 
                      follow-ups via calls and texts to ensure extraordinary results, and to make sure you don’t hit a 
                      plateau.<br/><br/><br/>During the process, if you have any doubts, our team will solve them on the same business
                       day. This makes us a lot better than the rest.So now that you know how we work, Let’s get started!


                      </p>
                </div>
                
            </div>
           

        </>
    )
}

export default Trans;
