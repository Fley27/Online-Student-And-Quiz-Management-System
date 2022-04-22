import React from "react";
import Example from "./line";
import styles from "../../styles/bar-chart.module.css";

const Line = ({period, title}) => {
    return (
        <div className = {styles.container}>
            <div className = {styles.title}>{title}</div>
            <div className = {styles.period}>{period}</div>
            <div className = {styles.wrapper}>
                <Example/>
            </div>
        </div>
    )
}

export default  Line;
