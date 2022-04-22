import React, {useState} from "react"
import styles from "../../styles/box-analytic.module.css"

const BoxAnalytic= ({period, type, label, description, amount, isExpandable}) => {

    const IsExpand = () =>{
        if(isExpandable)  return(
            <div className = {`${styles.collapse} ${styles.exo}`}>
                <div className = {styles.label}>
                    {label} {"  "} <span><i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
        );
        if (!isExpandable) return(
            <div  className = {`${styles.collapse} ${styles.indice} ${type === "success" ? styles.success : styles.danger}`}>
                <div className = {`${styles.icon} ${styles.angle} ${type === "success" ? styles.success : styles.danger}`}>
                    {
                        type === "success" ? (
                            <i className="fas fa-angle-up"></i>
                        ): (
                            <i className="fas fa-angle-down"></i>
                        )
                    }
                </div>
                <div className = {styles.label}>
                    {label} 
                </div>
            </div>
        )
    }

    return(
        <div className = {styles.container}>
            <div className = {styles.header}>
                <div className = {`${styles.area}`}>
                    <div className = {styles.data}>
                        <div className = {styles.name}>{description}</div>
                        <div className = {styles.period}>{period}</div>
                    </div>
                    <div className = {styles.number}>{amount}</div>
                </div>
            </div>

            <div className = {`${styles.expand} ${type === "success" ? styles.success : styles.danger}`}>
                <IsExpand/>
            </div>
        </div>
    )
}

export default BoxAnalytic