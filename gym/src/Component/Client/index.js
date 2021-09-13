import React from 'react'
import style from "../../StyleSheet/client/client.module.css"
import { Dclint } from './Dclint'

const Client = () => {
    return (
        <>
       
        <div className={style["para"]}>
        <h3>TRANSFORMATION</h3>
                <div className={style["input"]}>
                    <div className="form-outline">
                        <input type="search" id="form1" className="form-control" />
                        {/* <label className="form-label" for="form1">Search</label> */}
                    </div>
                    {/* <button type="button" className="btn btn-primary">
                        <i className="fas fa-search"></i>
                    </button> */}
                </div>

        </div>
            <div className={style["container"]}>
                {
                    Dclint.map((ite, index) => {
                        return (
                             <div className={style["image-container"]}>
                            <div className={style['image-body']} key={index}>
                                <div className={style['image']}>
                                    <img src={ite.imgs} alt="Client" />
                                </div>

                            </div>

           </div>
                        )
                    })
                }


</div>
 

        </>
    )
}


export default Client;
