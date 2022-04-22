import React, {useState} from 'react'
import Form from './forms/register'
import Card from '../cards/auth'
import styles from '../../styles/register.module.css'

export default function SignUp({auth, ...props}) {
    const [state, setState] = useState({
        email : "",
        firstName: "", 
        lastName: "",
        password: "",
        userType: ""
    })
    
    return (
        <div className={styles.container}>
            <div className = {styles.card}>
                <Card
                    title = "Greetings !!!"
                    subtitle = "Stay connected with us, and build the largest platform dedicated to educating people every day."
                    button = "SIGN IN"
                    link = "login"
                />
            </div>
            <div className  = {styles.form}>
                {
                    auth ? (
                        <div></div>
                    ): (
                        <>
                            <div className = {styles.title}>Create Your Account</div>
                            <Form
                                state = {state}
                                setState = {setState}
                            />
                        </>
                    )
                }
            </div> 
        </div>
    )
}