import React, {useState} from 'react'
import Form from './forms/login'
import Card from '../cards/auth'
import styles from "../../styles/login.module.css"

export default function Login({auth, ...props}) {
    const [state, setState] = useState({
        email : "",
        password: ""
    })
    return (
        <div className={styles.container}>
            <div className  = {styles.form}>
                {
                    auth? (
                        <div>KK</div>
                    ): (
                        <>
                            <div className = {styles.title}>Login into Your Account</div>
                            <Form
                                state = {state}
                                setState = {setState}
                            />
                        </>
                    )
                }
            </div>
            <div className = {styles.card}>
                <Card
                    title = "Welcome !!!"
                    subtitle = "Hope you're doing well. Don't have any account yet. Let's fix it now."
                    button = "Register Now"
                    handleToggle = {props.handleToggle}
                    link = "register"
                />
            </div>
        </div>
    )
}