import React from 'react';
import Activity from '../../components/cards/activity';
import Line from "../../components/chart/chart";
import SocialCard from '../../components/cards/social-media';
import TableUsers from '../../components/table/latest-user';
import UserPerCountry from "../../components/table/number-user-per-country"
import styles from '../../styles/dashboard.module.css';

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <div className = {styles.activities}>
                <div className = {styles.item}>
                    <Activity
                        type = "danger"
                        description = "Active students"
                        label = "See more"
                        amout = "3.9K"
                        name = "Students"
                    />
                </div>
                <div  className = {styles.item}>
                    <Activity
                        type = "success"
                        name = "Teachers"
                        label = "See more"
                        amout = "10"
                        description = "Active Teachers"
                    />
                </div>
            </div>
            <div className = {styles.charts}>
                <div className = {`${styles.chart}`}>
                    <Line
                        period = "Jan 2022"
                        title = "Total of Post per Category"
                    />
                </div>
                <div className = {`${styles.card}`}>
                    <UserPerCountry
                        title = "Students per Country"
                    />
                </div>
            </div>
            <div className = {styles.charts}>
                <div className = {`${styles.chart}`}>
                    <TableUsers
                        title = "The Latest Students"
                    />
                </div>
                <div className = {`${styles.card}`}>
                    <SocialCard
                        title = "Number of Students per Course"
                    />
                </div>
            </div>
        </div>
    )
}