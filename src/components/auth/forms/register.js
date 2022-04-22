import React, {useState, useRef} from 'react'; 
import { connect } from 'react-redux';
import {signUp} from "../../../redux/actions/auth"
import PropTypes from "prop-types";
import styles from "../../../styles/auth-form.module.css"

const Form = ({state, setState, signUp}) => {

    const email = useRef();
    const lastName = useRef();
    const firstName = useRef();
    const password = useRef();

    const [error, setError] = useState({
        email : "",
        firstName: "", 
        lastName: "",
        password: "",
        userType: ""
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
            firstName: "", 
            lastName: "",
            password: ""
        })

        const firstName = inputValidation("firstName", state.firstName) 
        const lastName = inputValidation("lastName", state.lastName) 
        const email = inputValidation("email", state.email) 
        const password = inputValidation("password", state.password)

        if( firstName, lastName, email, password)
            return false;
    
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const status = formValidation()
        if(status) {
            signUp(JSON.stringify(state))
        }
    }

    const handleFirstNameKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("firstName", state.firstName))
                lastName.current.focus();
        }
    }

    const handleLastNameKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("lastName", state.lastName))
                email.current.focus()
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
                <div className = {styles.row}> 
                    <div className = {styles.col}>
                        <div className = {styles.label}>FirstName</div>
                        <div className = {styles.error}>{error.firstName}</div>
                        <input 
                            onKeyPress = {handleFirstNameKeyPress} 
                            onChange = {handleChange} 
                            ref = {firstName} placeholder = "John" 
                            className = {error.firstName ? styles.error_input : styles.input} 
                            name = "firstName" 
                            type = "text"
                            value = {state.firstName}
                        />
                    </div>
                    <div className = {styles.col}>
                        <div className = {styles.label}>LastName</div>
                        <div className = {styles.error}>{error.lastName}</div>
                        <input 
                            onKeyPress = {handleLastNameKeyPress} 
                            onChange = {handleChange} ref = {lastName}  
                            placeholder = "Doe" className = {error.lastName ? styles.error_input : styles.input} 
                            name = "lastName" 
                            type = "text"
                            value = {state.lastName}
                        />
                    </div>
                </div>
                <div className = {styles.col_}>
                    <div className = {styles.label}>Email</div>
                    <div className = {styles.error}>{error.email}</div>
                    <input 
                        onKeyPress = {handleEmailKeyPress} 
                        onChange = {handleChange} ref = {email}  
                        placeholder = "johndoe@gmail.com" 
                        className = {error.email ? styles.error_input : styles.input} 
                        name = "email" 
                        type = "text"
                        value = {state.email}
                    />
                </div>
                <div className = {styles.col_}>
                    <div className = {styles.label}>Password</div>
                    <div className = {styles.error}>{error.password}</div>
                    <input 
                        onKeyPress = {handlePasswordKeyPress} 
                        onChange = {handleChange} ref = {password}  
                        placeholder = "Password (8 characters minimum)" 
                        className = {state.password.length && error.password? styles.error_password 
                        : state.password.length && !error.password ? styles.password 
                        : !state.password.length && !error.password ? styles.input
                        : !state.password.length && error.password ? styles.error_input
                        : styles.input} 
                        name = "password" 
                        type = "password"
                        value = {state.password}
                    />
                </div>
                <div className = {styles.btnContainer_}>
                        <button className = {styles.btnSubmit}>SIGN UP</button>
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


export default connect(mapStateToProps, {signUp})(Form);