import React, { useState, useEffect, useRef } from "react";
import styles from "styles/components/dashboard/dashboard.module.scss";
import Image from 'next/image';
import { useAuth } from "@/lib/hooks/AuthHook";

function Dashboard() {
    return (
        <>
            <useAuth>
                <section className={styles.dashboard}>
                    <h1 className={styles.title}>Your Trip</h1>
                    <div className={styles.where}>
                        <div>icon</div>
                        <div className="styles.holder"><input type="text" placeholder="Where to" /></div>
                        <div>icon</div>
                        <div className="styles.holder"><input type="text" placeholder="Where from" /></div>

                    </div>
                    <div className={styles.date}>
                        <div>icon</div>
                        <div>Date</div>
                        <div><input type="date" placeholder="from" /></div>
                        <div>-</div>
                        <div><input type="date" name="till" /></div>
                    </div>
                    <div className={styles.ppl}>
                        <div>icon</div>
                        <div>No. of travellers</div>
                        <div><input type="number" placeholder="num" /></div>
                    </div>
                    <div className={styles.money}>
                        <div>icon</div>
                        <div>Budget</div>
                        <div><input type="number" placeholder="num" /></div>
                    </div>
                    <div className={styles.travel}>
                        <div>icon</div>
                        <div>Travel</div>
                        <div><input type="radio" name="radio" />Flight</div>
                        <div><input type="radio" name="radio" />Train</div>
                    </div>
                    <div className={styles.food}>
                        <div>icon</div>
                        <div className="styles.holder">Food</div>
                        <div><input type="radio" name="radio" />Veg</div>
                        <div><input type="radio" name="radio" />Non Veg</div>
                    </div>
                    <button className={styles.submit}>Submit</button>
                    <div className={styles.img}>
                    </div>
                    <h1 className={styles.recc}>Recommendation</h1>
                    <div className={styles.card1}></div>
                    <h1 className={styles.tra}>Travel</h1>
                    <div className={styles.card2}></div>
                    <h1 className={styles.sta}>Stay</h1>
                    <div className={styles.card3}></div>
                    <h1 className={styles.sigh}>Sightseeing</h1>
                    <div className={styles.card4}></div>
                </section>

            </useAuth>
        </>
    );
}

export default Dashboard;
