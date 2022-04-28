import React from "react";
import styles from "../../styles/menu/sidebar.module.css"

export default function Sidebar (){
    return(
        <div className = {styles.container}>
            <div className = {styles.logo}>LHSSF</div>
            <div className = {styles.section}>
                <div className = {styles.title}>Analytics</div>
                <div onClick = {()=> window.location.href = "/dashboard"} className = {styles.item}>
                    <div className = {styles.icon}>
                        <i className="far fa-chart-bar"></i>
                    </div>
                    <div className = {styles.option}>
                        Dashboard
                    </div>
                </div>
            </div>

            <div className = {styles.section}>
                <div className = {styles.title}>Users</div>
                <div onClick = {()=> window.location.href = "/teachers"} className = {styles.item}>
                    <div className = {styles.icon}>
                        <i class="far fa-chalkboard-teacher"></i>
                    </div>
                    <div className = {styles.option}>
                        Teachers
                    </div>
                </div>
                <div onClick = {()=> window.location.href = "/students"} className = {styles.item}>
                    <div className = {styles.icon}>
                        <i class="fal fa-users-class"></i>
                    </div>
                    <div className = {styles.option}>
                        Students
                    </div>
                </div>
            </div>

            <div className = {styles.section}>
                <div className = {styles.title}>Quiz</div>
                <div onClick = {()=> window.location.href = "/quiz/create"} className = {styles.item}>
                    <div className = {styles.icon}>
                        <i className="fal fa-plus-octagon"></i>
                    </div>
                    <div className = {styles.option}>
                        Create
                    </div>
                </div>
                <div onClick = {()=> window.location.href = "/quiz"} className = {styles.item}>
                    <div className = {styles.icon}>
                        <i className="fal fa-question-circle"></i>
                    </div>
                    <div className = {styles.option}>
                        Quizzes
                    </div>
                </div>
            </div>

            <div className = {styles.section}>
                <div className = {styles.title}>More</div>
                <div className = {styles.item}>
                    <div className = {styles.icon}>
                        <i className="far fa-sign-out"></i>
                    </div>
                    <div className = {styles.option}>
                        Logout
                    </div>
                </div>
            </div>
            
        </div>
    )
}