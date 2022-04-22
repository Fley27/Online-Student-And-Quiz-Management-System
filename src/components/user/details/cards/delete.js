import React from "react"
import styles from "../../../../styles/details-tab.module.css"

export const DeleteDetailCard = ({user}) => (
    <div className = {styles.card}>
            <div className = {styles.header}>
                <div className = {styles.title}>Data Management</div>
            </div>
            <div className = {styles.bottom}>
                <div className = {`${styles.button} ${styles.red}`}>
                    Delete Account
                </div>
                <div className = {styles.caution}>
                    Remove this customer’s chart if he requested that, if not please be aware that what has been deleted can never brought back
                </div>
            </div>
        </div>
) 