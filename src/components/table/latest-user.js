import React from "react"
import img from "../../images/avatar.jpeg"
import styles from "../../styles/table-latest.module.css"



const TableUsers = ({title}) => {
    return (
        <div className = {styles.container}>
            <div className = {styles.title}>{title}</div>
            <div className = {styles.table}>
                <div className = {styles.header}>
                    <div className = {styles.thead}>
                        <div className = {`${styles.th}`}>Avatar</div>
                        <div className = {`${styles.th} ${styles.wider}`}>FullName</div>
                        <div className = {`${styles.th} ${styles.wider}`}>Subscribed At</div>
                    </div>
                </div>
                <div className = {styles.body}>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.tb}`}>
                            <div className = {styles.profile}>
                                <div className = {styles.image}>
                                    <img
                                        src= {img}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Fenley MENELAS</div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Today</div>
                    </div>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.tb}`}>
                            <div className = {styles.profile}>
                                <div className = {styles.image}>
                                    <img
                                        src= {img}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Lorentz Norga MENELAS</div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Yesterday</div>
                    </div>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.tb}`}>
                            <div className = {styles.profile}>
                                <div className = {styles.image}>
                                    <img
                                        src= {img}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Patrick John Bruce</div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Last Week</div>
                    </div>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.tb}`}>
                            <div className = {styles.profile}>
                                <div className = {styles.image}>
                                    <img
                                        src= {img}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Joseph Pierre Wendy</div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>08/07/2021</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableUsers;