import React from 'react';
import style from "../../StyleSheet/Menu/menu.module.css";
import { Item } from './Item';
import work from "../../Component/image/undraw_working_out_6psf.svg"
import back from "../../Component/image/bg-2.jpg"



const Menu = () => {
  return (<>
 
    <div className={style["workout-container"]} >
    <div className={style["working"]}>
    <div className={["heading_div"]}>
      <h2>WORKOUT PLAN</h2>
          <p>Lacking motivation to get back into the 
          gym? Back in the gym already but feel 
          stagnated? Or maybe you’re just looking for
           new inspiration for a the new year.
            Whatever your situation, reading words of 
            wisdom from successful people can be 
            super-inspiring</p>
        </div>
      <img src={work} alt="none" />
      </div>
      <div className={style["none"]}><img src={back} alt="no"/>  </div>
      <div className={style["workcomp"]}>
        {
          Item.map((item,index) =>{
          return(
            <div className={style['card']} key={index}>
          <div className={style['image']}>
            <img src={item.imgsrc} alt="none" />
          </div>
          <div className={style['plan']}>
                <a href="/"> <h3>{item.head}</h3></a>
            <span>{item.title}</span>
          </div>
        </div>
 )
        })
      }

      </div>
    </div>
    </>
  )
}
export default Menu;
