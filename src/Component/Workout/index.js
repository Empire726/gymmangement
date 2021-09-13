import React from 'react'
import style from "../../StyleSheet/Other/other.module.css"
import { Workdata } from './Workdata'

const Workout = () => {
    return (
        <>
            <div className={style["work"]}>
                <div className={style["side-left"]}>

                    <div className={style["side-row"]}><a href="#">Workout</a> </div>
                    <div className={style["side-row"]}><a href="#">Chest</a> </div>
                    <div className={style["side-row"]}><a href="#">Back</a> </div>
                    <div className={style["side-row"]}><a href="#">Solder</a> </div>
                    <div className={style["side-row"]}><a href="#">Leg</a> </div>
                    <div className={style["side-row"]}><a href="#">Apps</a> </div>
                    <div className={style["side-row"]}><a href="#">Front</a> </div>
                    <div className={style["side-row"]}><a href="#">Walking</a> </div>
                    <div className={style["side-row"]}><a href="#">Fat Burn</a> </div>
                    <div className={style["side-row"]}><a href="#">Fat Loss</a> </div>
                    <div className={style["side-row"]}><a href="#">Lunges</a> </div>
                    <div className={style["side-row"]}><a href="#">Push-up</a> </div>
                    <div className={style["side-row"]}><a href="#">Leg</a> </div>
                    <div className={style["side-row"]}><a href="#">Apps</a> </div>
                    

                </div>
                <div className={style["side-right"]}>
               {Workdata.map((item,ind) =>{
                   return(
                       <div className={style["side-img"]} key={ind}>
                           <img src={item.img} alt="none" />
                           <h3>{item.para}</h3>
                       </div>
                   )

               })  
                    }
                </div>
            </div>
        </>
    )
}

export default Workout;
