import React from 'react'
import svg from "../image/undraw_personal_trainer_ote3.svg";
import styles from "../../StyleSheet/Other/other.module.css"

const Homes = () => {
    return (
        <>

<div className={styles["savge"]}>

<div className={styles["srce"]}>
<span>OUR PLAN</span>
<h1>FEATURES</h1>
<h4>HIRE TRAINER</h4>
<p>Whether it be gym or home workout, your program 
will be written from scratch keeping in account your
 unique goals, exercise experience and circumstances.
  The highly custom nature of the program means that we 
  remove wasted 
effort and guesswork from your exercise regime.</p>

<div className={styles["svgeimg"]}>
<img src={svg} alt="none" />
</div>
</div>

</div>
        </>
    )
}

export default Homes;
