import React from "react";
import { Meta } from "./Meta";
import "../../StyleSheet/Team/team.css";


const Team = () => {
    return (
        <>
            <div className="card-body">
                <div className="cart">
                    {
                        Meta.map((item, index) => {
                            return (
                                <div className="card-wrapper" key={index}>
                                    <div className="card" >
                                        <div className="card-image">
                                            <img src={item.image} alt="Reload" />
                                        </div>
                                        <ul className="social-icons">
                                            <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="/"><i className="fab fa-instagram" /></a></li>
                                            <li><a href="/"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="/"><i className="fab fa-dribbble" /></a></li>
                                        </ul>
                                        <div className="details">
                                            <h2>{item.Nam}</h2>
                                            <span className="job-title">{item.Pro}</span>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>


        </>
    )
};
export default Team;






























;
