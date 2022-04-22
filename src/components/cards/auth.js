import React from "react"
import styles from "../../styles/card-auth.module.css"

const CardAuth = ({title, subtitle, button, link}) => {
    const handleSwitch = () => {
        window.location.href = `/${link}`
    } 
    return(
        <div className = {styles.container}>
            <div className = {styles.overlay}></div>
            <div className = {styles.title}>{title}</div>
            <div className = {styles.subtitle}>{subtitle}</div>
            <button onClick = {()=>handleSwitch()} className = {styles.button}>{button}</button>
        </div>
    )
}

export default CardAuth;