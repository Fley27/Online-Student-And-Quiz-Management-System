import React from "react"
import img from "../../images/avatar.jpeg"
import styles from "../../styles/table-user.module.css"



export const TableUsers = ({users = [], link}) => {
    return (
        <div className = {styles.container}>
            <div className = {styles.table}>
                <div className = {styles.header}>
                    <div className = {styles.thead}>
                        <div className = {`${styles.th} ${styles.wider}`}>Name</div>
                        <div className = {`${styles.th} ${styles.wider}`}>LOCATION</div>
                        <div className = {`${styles.th}`}>Phone Number</div>
                        <div className = {`${styles.th}`}>Action</div>
                    </div>
                </div>
                <div className = {styles.body}>
                    {/*
                        users.map((item, idx) => (
                            <div key = {idx} className = {styles.tbody}>
                                <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
                                    {
                                        item.avatar ? (
                                            <div className = {`${styles.profile} ${styles.avatar}`}>
                                                <div className = {styles.image}>
                                                    <img
                                                        src= {img}
                                                        alt="Picture of the author"
                                                        layout = "fill"
                                                        placeholder = "blur"
                                                    />
                                                </div>
                                            </div>
                                        ):null
                                    }
                                    <span>{`${item.firstName.trim()} ${item.lastName.trim()}`}</span>
                                </div>
                                <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>{item.location ? item.location : "()"}</div>
                                <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                                    {item.phone ? item.phone : "()"}
                                </div>
                                <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                                    <a href = {`/admin/${link.substring(0, link.length - 1)}/edit/${item._id}`}>
                                        <div className = {styles.span}>
                                            <span><i className = "far fa-edit"></i></span>
                                        </div>
                                    </a>
                                    <a href = {`/admin/${link.substring(0, link.length - 1)}/${item._id}`}>
                                        <div  className = {styles.span}>
                                            <span><i className = "fas fa-arrow-right"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))
                        */
                    }
                        <div className = {styles.tbody}>
                                <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
                                    <span>Lorentz Edma Norga Ménélas</span>
                                </div>
                                <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
                            Camp-Perrin, Haiti</div>
                                <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                                (509) 314-585-96
                                </div>
                                <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                                    <a href = {`/admin/${link.substring(0, link.length - 1)}/edit/${2565}`}>
                                        <div className = {styles.span}>
                                            <span><i className = "far fa-edit"></i></span>
                                        </div>
                                    </a>
                                    <a href = {`/admin/${link.substring(0, link.length - 1)}/${45556}`}>
                                        <div  className = {styles.span}>
                                            <span><i className = "fas fa-arrow-right"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}