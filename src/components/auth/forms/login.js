import React, {useState, useRef} from 'react';
import { connect } from 'react-redux';
import {signIn} from "../../../redux/actions/auth"
import PropTypes from "prop-types";
import styles from "../../../styles/auth-form.module.css"

const Form = ({state, setState, signIn}) => {

    const email = useRef(); 
    const password = useRef();

    const [error, setError] = useState({
        email : "",
        password: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value}))
    }

    const emailValidation = (email) =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true
        }
        return false
    }

    const inputValidation = (name, item) => {
        let value = "";
        if(name === "lastName" || name === "firstName"){
            if(!item)
                value = `Your ${name} is required.`;
        }
        else if(name === "password"){
            if(item.length < 8)
                value = "Must be at least 8 characters long."
        }
        else if(name === "email"){
            if(!emailValidation(item))
                value = "Enter a valid email address.";
        }
        setError(prevState=>({...prevState, [name]: value}))

        if(value)
            return true;
        return false
    }

    const formValidation = () =>{
        setError({
            email : "",
            password: ""
        })

        const email = inputValidation("email", state.email) 
        const password = inputValidation("password", state.password)

        if(email, password)
            return false;
    
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const status = formValidation()
        if(status) {
            signIn(JSON.stringify((state)))
        }
    }

    const handleEmailKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("email", state.email))
            password.current.focus()
        }
    }

    const handlePasswordKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("password", state.password))
                handleSubmit(e)
        }
    }

    return(
        <div className = {styles.container}>
            <form onSubmit = {handleSubmit} className = {styles.form}>
                <div className = {styles.col_}>
                    <div className = {styles.label}>Email</div>
                    <div className = {styles.error}>{error.email}</div>
                    <input 
                        onKeyPress = {handleEmailKeyPress} 
                        onChange = {handleChange} 
                        ref = {email} 
                        value = {state.email}  
                        placeholder = "johndoe@gmail.com" 
                        className = {error.email ? styles.error_input : styles.input} 
                        name = "email" 
                        type = "text"
                    />
                </div>
                <div className = {styles.col_}>
                    <div className = {styles.label}>Password</div>
                    <div className = {styles.error}>{error.password}</div>
                    <input 
                        onKeyPress = {handlePasswordKeyPress} 
                        onChange = {handleChange} 
                        ref = {password} 
                        value = {state.password}  
                        placeholder = "Password (8 characters minimum)" 
                        className = {state.password.length && error.password? styles.error_password 
                        : state.password.length && !error.password ? styles.password 
                        : !state.password.length && !error.password ? styles.input
                        : !state.password.length && error.password ? styles.error_input
                        : styles.input} 
                        name = "password" 
                        type = "password"
                    />
                </div>
                <div className  = {styles.text}>
                    Forgot Your Password ?
                </div>
                <div className = {styles.btnContainer}>
                        <button className = {styles.btnSubmit}>Login</button>
                </div>
                </form>
        </div>
    )
}

Form.propTypes = {
    auth: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});


export default connect(mapStateToProps, {signIn})(Form);