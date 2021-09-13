import React from 'react';
import style from "../../StyleSheet/Other/other.module.css"
import lofe from "../image/our sevice.jpg"
import lofe1 from '../image/our service-1.jpg'
import lofe2 from '../image/our service-2.jpg'
import { NavLink } from 'react-router-dom';


export const Service = () => {
  return (
    <>
    <div className={style['heading_hed']}>
  <h2>OUR SERVICES</h2>
  <div>
    {/* border */}
  </div>
 
</div>

      <div className={style["our_service"]}>
           
        <div className={style["body_tag"]}>
        
          <div className={style["image"]}>
            <img src={lofe} alt="..." />
          </div>
          <div className={style["heading"]}>
            <h4>TRANFORMATION PLAN</h4>
          </div>
          <div className={style["btn"]}>
           <NavLink to="/plan"><button> GET NOW {'>'}</button></NavLink>
          </div>

        </div>
        <div className={style['body_tag']}>
          <div className={style['image']}>
            <img src={lofe1} alt="..." />
          </div>
          <div className={style['heading']}>
            <h4>EXERCISE TUTORIALS</h4>
          </div>
          <div className={style["btn"]}>
            <NavLink to="/workout"><button> VIEW MORE {'>'}</button></NavLink>
          </div>

        </div>
        <div className={style['body_tag']}>
          <div className={style['image']}>
            <img src={lofe2} alt="..." />
          </div>
          <div className={style['heading']}>
            <h4>HEALTH CALCULATORS</h4>
          </div>
          <div className={style["btn"]}>
            <NavLink to="/workout"><button> USE NOW {'>'}</button></NavLink>
          </div>

        </div>
      </div>
    </>
  )
}
export default Service;
