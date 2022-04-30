import React from "react";
import styles from "../../styles/menu/navigation-bar.module.css"

export default function NavigationBar (){
    return(
        <div className = {styles.container}>
            <div className = {styles.section}>
                <div onClick = {()=> window.location.href = "/"} className = {`${styles.item} ${window.location.pathname === "/" ? styles.selected : ""}`}>
                    <div className = {styles.icon}>
                        <i className="far fa-chart-bar"></i>
                    </div>
                    <div className = {styles.badge}></div>
                </div>
            </div>

            <div className = {styles.section}>
                <div onClick = {()=> window.location.href = "/teachers"} className = {`${styles.item} ${window.location.pathname === "/teachers" ? styles.selected : ""}`}>
                    <div className = {styles.icon}>
                        <i class="far fa-chalkboard-teacher"></i>
                    </div>
                    <div className = {styles.badge}></div>
                </div>
            </div>

            <div className = {styles.section}>
                <div onClick = {()=> window.location.href = "/quiz/create"} className = {`${styles.item} ${window.location.pathname === "/quiz/create" ? styles.selected : ""}`}>
                    <div className = {styles.icon}>
                        <i className="fal fa-plus-octagon"></i>
                    </div>
                    <div className = {styles.badge}> </div>
                </div>
            </div>


            <div className = {styles.section}>
                <div onClick = {()=> window.location.href = "/students"} className = {`${styles.item} ${window.location.pathname === "/students" ? styles.selected : ""}`}>
                    <div className = {styles.icon}>
                        <i class="fal fa-users-class"></i>
                    </div>
                    <div className = {styles.badge}></div>
                </div>
            </div>

            <div className = {styles.section}>
                <div onClick = {()=> window.location.href = "/quiz"} className = {`${styles.item} ${window.location.pathname === "/quiz" ? styles.selected : ""}`}>
                    <div className = {styles.icon}>
                        <i className="fal fa-question-circle"></i>
                    </div>
                    <div className = {styles.badge}></div>
                </div>
            </div>            
        </div>
    )
}