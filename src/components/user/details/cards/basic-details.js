import React from "react"
import styles from "../../../../styles/details-tab.module.css"

export const BasicDetailCard = ({user}) => (
    <div className = {styles.card}>
            <div className = {styles.header}>
                <div className = {styles.title}>Basic Details</div>
            </div>
            <div className = {styles.content}>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        FirstName
                    </div> 
                    <span>Fenley Jude Viky Menelas</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        LastName 
                    </div><span>Menelas</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        Email 
                    </div>
                    <span>fenleymenelas@gmail.com</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        Country 
                    </div>
                    <span>Haiti</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        City    
                    </div>
                    <span>Santiago de los caballeros</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        Adress 1    
                    </div>
                    <span>Street villa Noa 51</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        Adress 2   
                    </div>
                    <span>Villa Olímpica, manzana b</span>
                </div>
            </div>
            <div className = {styles.bottom}>
                <div className = {`${styles.button} ${styles.mauvre}`}>
                    Reset Password
                </div>
            </div>
        </div>
) 