import React from "react"
import Line from "../../chart/chart"
import styles from "../../../styles//quiz/dashboard.module.css"

export const DashboardQuiz= ({user}) => (
    <div className = {styles.card}>
        <div className = {styles.header}>
            <div className = {styles.title}>Dashboard</div>
        </div>
        <div className = {styles.charts}>
            <div className = {styles.item}>
                <Line
                    title = "Marks of Student per Qualifications"
                />
            </div>
            <div className = {styles.item}>
                
            </div>
        </div>
    </div>
) 