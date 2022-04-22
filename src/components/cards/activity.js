import React, {useState} from "react"
import styles from "../../styles/activity.module.css"

const Activity= ({name, type, label, description, amout}) => {
    
    const [toggle, setToogle] = useState(false)

    const IsExpand = () =>{
        if(!toggle)  return(
            <div className = {`${styles.collapse}`}>
                <div className = {styles.label}>
                    {label} {"  "} <span><i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
        );
        if (toggle) return(
            <div className = {`${styles.collapse}`}>
                <div className = {styles.label}>
                    {label} {"   "} <span><i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
        )
    }

    return(
        <div className = {styles.container}>
            <div className = {styles.header}>
                <div className = {`${styles.area} ${type === "success" ? styles.success : styles.danger}`}>
                    <div className = {`${styles.icon}`}><i className="far fa-newspaper"></i></div>
                    <div className = {`${styles.data}`}>
                        <div className = {styles.number}>{amout} {name}</div>
                        <div className = {styles.name}>{description}</div>
                    </div>
                </div>
                <div  className = {`${styles.area} ${styles.indice} ${type === "success" ? styles.success : styles.danger}`}>
                    <div className = {`${styles.icon} ${styles.angle} ${type === "success" ? styles.success : styles.danger}`}>
                        {
                            type === "success" ? (
                                <i className="fas fa-angle-up"></i>
                            ): (
                                <i className="fas fa-angle-down"></i>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className = {`${styles.expand} ${type === "success" ? styles.success : styles.danger}`}>
                <IsExpand/>
            </div>
        </div>
    )
}

export default Activity