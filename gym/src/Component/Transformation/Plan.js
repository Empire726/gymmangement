import React from 'react'
import styles from '../../StyleSheet/Transformation/Formation.module.css';
import lofe from "../image/plan-1.jpg"
import svg from "../image/undraw_working_out_6psf.svg"

const Plan = () => {
    return (
        <div className={styles["plan-container"]}>
            <div className={styles["heading"]}>
                <h4>SELECT YOUR PLAN</h4>
                <span>GET TRANSFORMED</span>
                <div className={styles["trans"]}>
                    <img src={svg} alt=".." />
                </div>
            </div>
            <div className={styles["carts"]}>

                <div className={styles["card-div"]}>
                    <div className={styles["cards"]}>
                        <img src={lofe} alt="..." />
                        <h4>8 WEEKS</h4>
                        <p>STARTER PLAN</p>
                        <p className={styles["para"]}>KICK START YOUR FITNESS JOURNEY WITH US. HOW YOU LOOK  ON YOUR AADHAR CARD.</p>
                    </div>
                    <div className={styles["price"]}>
                        <span>₹ 5,999</span><p>INR</p>
                    </div>
                    <div className={styles["neutrins"]}>

                        <p><i className="fas fa-check-circle"> 2 Nutrition Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 2 Nutrition Protocols</i></p>
                        <p><i className="fas fa-check-circle"> Supplement Protocol</i></p>
                        <p><i className="fas fa-check-circle"> 2 Nutrition Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 8 Follow Ups</i></p>
                        <p><i className="fas fa-check-circle"> Unlimited WhatsApp Assistance</i></p>
                        <p><i className="fas fa-check-circle"> Video Tutorials</i></p>
                        <p><i className="fas fa-check-circle"> Stretch Guide</i></p>
                        <p><i className="fas fa-check-circle"> Free Guidelines</i></p>

                    </div>
                    <div className={styles["btns"]}>
                        <a href="#"><span>GET STARTED</span></a>
                    </div>
                </div>
                {/* -------------------------------------------------------------------- */}
                <div className={styles["card-div"]}>
                    <div className={styles["cards"]}>
                        <img src={lofe} alt="..." />
                        <h4>12 WEEKS</h4>
                        <p>100-DAY TRANSFORMATION PLAN</p>
                        <p className={styles["para"]}>KICK START YOUR FITNESS JOURNEY WITH US. HOW YOU LOOK  ON YOUR AADHAR CARD.</p>
                    </div>
                    <div className={styles["price"]}>
                        <span>₹ 9,999</span><p>INR</p>
                    </div>
                    <div className={styles["neutrins"]}>

                        <p><i className="fas fa-check-circle"> 4 Nutrition Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 4 Workout Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 2 Supplement Protocol</i></p>
                        <p><i className="fas fa-check-circle"> 13 Follow Ups</i></p>
                        <p><i className="fas fa-check-circle"> Unlimited WhatsApp Assistance</i></p>
                        <p><i className="fas fa-check-circle"> Video Tutorials</i></p>
                        <p><i className="fas fa-check-circle"> Stretch Guide</i></p>
                        <p><i className="fas fa-check-circle"> 4 Trainer Calls</i></p>
                        <p><i className="fas fa-check-circle"> Free Guidelines</i></p>
                        {/* <p><i className="fas fa-check-circle">4 Trainer Calls</i></p> */}





                    </div>
                    <div className={styles["btns"]}>
                        <a href="#"><span>GET STARTED</span></a>
                    </div>
                </div>
                <div className={styles["card-div"]}>
                    <div className={styles["cards"]}>
                        <img src={lofe} alt="..." />
                        <h4>24 WEEKS</h4>
                        <p>WARDROBE CHANGE</p>
                        <p className={styles["para"]}>WE ASSURE YOU WON’T NEED THE SAME CLOTHES AGAIN.</p>
                    </div>
                    <div className={styles["price"]}>
                        <span>₹ 19,999</span><p>INR</p>
                    </div>
                    <div className={styles["neutrins"]}>

                        <p><i className="fas fa-check-circle"> 8 Nutrition Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 8 Workout Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 2 Supplement Protocol</i></p>
                        <p><i className="fas fa-check-circle">Unlimited WhatsApp Assistance</i></p>
                        <p><i className="fas fa-check-circle"> 24 Follow Ups</i></p>
                        <p><i className="fas fa-check-circle"> 6 Trainer Calls</i></p>
                        {/* <p><i className="fas fa-check-circle"> Video Tutorials</i></p> */}
                        {/* <p><i className="fas fa-check-circle"> Stretch Guide</i></p> */}
                        <p><i className="fas fa-check-circle"> 5% Product Discount on the Website</i></p>
                        <p><i className="fas fa-check-circle"> Daily Reminders</i></p>
                        <p><i className="fas fa-check-circle">After plan guidance on how to go ahead</i></p>


                    </div>
                    <div className={styles["btns"]}>
                        <a href="#"><span>GET STARTED</span></a>
                    </div>
                </div>
                <div className={styles['card-div']}>
                    <div className={styles['cards']}>
                        <img src={lofe} alt="..." />
                        <h4>48 WEEKS</h4>
                        <p>360 DAYS FITNESS CHANGE PLAN</p>
                        <p className={styles["para"]}>YOUR ONLY CHANCE TO CHANGE HOW YOU LOOK  ON YOUR AADHAR CARD.</p>
                    </div>
                    <div className={styles['price']}>
                        <span>₹ 28,999</span><p>INR</p>
                    </div>
                    <div className={styles['neutrins']}>

                        <p><i className="fas fa-check-circle"> 18 Nutrition Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 18 Workout Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 4 Supplement Protocol</i></p>
                        <p><i className="fas fa-check-circle"> 2 Nutrition Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 48 Follow Ups</i></p>
                        <p><i className="fas fa-check-circle"> Unlimited WhatsApp Assistance</i></p>
                        <p><i className="fas fa-check-circle"> Video Tutorials</i></p>
                        <p><i className="fas fa-check-circle"> Stretch Guide</i></p>
                        <p><i className="fas fa-check-circle"> 12 Trainer Calls</i></p>
                        <p><i className="fas fa-check-circle"> Daily Remainder</i></p>
                        <p><i className="fas fa-check-circle"> After plan guidance on how to go ahead</i></p>
                        <p><i className="fas fa-check-circle"> 10% Product Discount on the Website</i></p>
                        <p><i className="fas fa-check-circle"> Daily Reminders</i></p>
                        <p><i className="fas fa-check-circle"> 1-month plan freeze option</i></p>

                    </div>
                    <div className={styles['btns']}>
                        <a href="#"><span>GET STARTED</span></a>
                    </div>
                </div>
                <div className={styles['card-div']}>
                    <div className={styles['cards']}>
                        <img src={lofe} alt="..." />
                        <h4>12 WEEKS</h4>
                        <p>GET READY FOR A WEDDING PLAN</p>
                        <p className={styles["para"]}>WE KNOW YOU ARE THE SHOWSTOPPER, LOOK LIKE ONE.</p>


                    </div>
                    <div className={styles['price']}>
                        <span>₹ 19,999</span><p>INR</p>
                    </div>
                    <div className={styles['neutrins']}>

                        <p><i className="fas fa-check-circle"> 4 Nutrition Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 4 Workout Protocols</i></p>
                        <p><i className="fas fa-check-circle"> 2 Supplement Protocol</i></p>
                        <p><i className="fas fa-check-circle"> 13 Follow Ups</i></p>
                        <p><i className="fas fa-check-circle"> Unlimited WhatsApp Assistance</i></p>
                        <p><i className="fas fa-check-circle"> Video Tutorials</i></p>
                        <p><i className="fas fa-check-circle"> Stretch Guide</i></p>
                        <p><i className="fas fa-check-circle"> 4 Trainer Calls</i></p>
                        <p><i className="fas fa-check-circle"> Daily Remainder</i></p>
                        <p><i className="fas fa-check-circle"> Free Guidelines</i></p>
                        <p><i className="fas fa-check-circle"> 4 Trainer Calls</i></p>
                        <p><i className="fas fa-check-circle"> Daily Remainder</i></p>
                        <p><i className="fas fa-check-circle"> Skin Care</i></p>
                        <p><i className="fas fa-check-circle"> Hair care</i></p>

                    </div>
                    <div className={styles['btns']}>
                        <a href="#"><span>GET STARTED</span></a>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Plan;
