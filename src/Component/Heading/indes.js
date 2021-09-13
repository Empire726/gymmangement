import React from 'react'
import style from "../../StyleSheet/Other/other.module.css"
import {NavLink} from "react-router-dom"

const Heading = () => {
    return (
        <div className={style["headers"]}>
        <h2>GET YOUR PERSONALISED TRANSFORMATION PLAN NOW!</h2>
        <div className={style["head-div"]}>
           
               <button ><NavLink to="/plan">CLICK HERE {'>'}</NavLink></button>
             </div>
        
            
        </div>
    )
}

export default Heading;
