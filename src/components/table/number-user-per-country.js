import React from "react";
import styles from "../../styles/table-per-country.module.css"


const NumberOfUserPerCountry = ({title}) => (
    <div className = {styles.container}>
        <div className = {styles.title}>{title}</div>
        <div className = {styles.table}>
            <div className = {styles.header}>
                <div className = {styles.thead}>
                    <div className = {`${styles.th} ${styles.wider}`}>COUNTRY</div>
                    <div className = {`${styles.th} ${styles.wider}`}>NUMBER</div>
                </div>
            </div>
            <div className = {styles.body}>
                <div className = {styles.tbody}>
                    <div className = {`${styles.th} ${styles.tb} ${styles.wider}`}>USA</div>
                    <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>31,200</div>
                </div>
                <div className = {styles.tbody}>
                    <div className = {`${styles.th} ${styles.tb} ${styles.wider}`}>Haiti</div>
                    <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>20,520</div>
                </div>
                <div className = {styles.tbody}>
                    <div className = {`${styles.th} ${styles.tb} ${styles.wider}`}>France</div>
                    <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>50,200</div>
                </div>
            </div>
        </div>
        <div className = {styles.footer}>
                <div className = {styles.label}>
                    See more <span><i className="fas fa-arrow-right"></i></span>
                </div>
        </div>
    </div>
)

export default NumberOfUserPerCountry;