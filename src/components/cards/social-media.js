import React from "react";
import DoughnutChart from "../chart/doughnut";
import styles from "../../styles//social-media.module.css"


const SocialMedia = ({title, number}) => (
    <div className = {styles.container}>
        <div className = {styles.header}>
            <div className = {styles.title}>{title}</div>
        </div>
        <div className = {styles.body}>
            <div className = {styles.item}>
                <DoughnutChart/>
            </div>
        </div>
    </div>
)

export default SocialMedia;