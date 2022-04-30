import React, {useState, useRef, useEffect} from "react";
import autosize from "autosize";
import styles from "../../../styles/quiz/basic-information.module.css"


const BasicInformation = ({state, setState}) => {

    useEffect(() => {
        autosize(textarea.current);
    })


    const email = useRef();
    const lastName = useRef();
    const firstName = useRef();
    const password = useRef();
    const textarea = useRef("");

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
            //signUp(JSON.stringify(state))
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
            <div className = {styles.row}>
                <div className = {styles.col}>
                    <div className = {styles.label}>Title</div>
                    {
                        error.firstName ? (
                            <div className = {styles.error}>{error.firstName}</div>
                        ):null
                    }
                    <input 
                        onKeyPress = {handleFirstNameKeyPress} 
                        onChange = {handleChange} 
                        ref = {firstName} placeholder = "Ex: Evaluate your skills." 
                        className = {`${error.firstName ? styles.error_input : styles.input}`} 
                        name = "firstName" 
                        type = "text"
                        
                    />
                </div>
                <div className = {styles.col}>
                    <div className = {styles.label}>Category</div>
                    {
                        error.firstName ? (
                            <div className = {styles.error}>{error.firstName}</div>
                        ):null
                    }
                    <select 
                        onKeyPress = {handleFirstNameKeyPress} 
                        onChange = {handleChange} 
                        ref = {firstName} placeholder = "EX: Schedule" 
                        className = {`${error.firstName ? styles.error_input : styles.input}`} 
                        name = "firstName" 
                        type = "text"
                        
                    >
                        <option value = "schedule">Schedule</option>
                        <option value = {3}>Live</option>
                    </select>
                </div>
            </div>
            <div className = {styles.row}>
                <div className = {styles.col}>
                    <div className = {styles.label}>Allowed Time</div>
                    {
                        error.firstName ? (
                            <div className = {styles.error}>{error.firstName}</div>
                        ):null
                    }
                    <select 
                        onKeyPress = {handleFirstNameKeyPress} 
                        onChange = {handleChange} 
                        ref = {firstName} placeholder = "EX: 5 minunte" 
                        className = {`${error.firstName ? styles.error_input : styles.input}`} 
                        name = "firstName" 
                        type = "text"
                        
                    >
                        <option>Ex: 5 minutes</option>
                        <option value = {3}>3 minutes</option>
                        <option value = {5}>5 minutes</option>
                        <option value = {10}>10 minutes</option>
                        <option value = {15}>15 minutes</option>
                        <option value = {30}>30 minutes</option>
                        <option value = {45}>45 minutes</option>
                        <option value = {60}>60 minutes</option>
                        <option value = {90}>1h 30 minutes</option>
                    </select>
                </div>
                <div className = {styles.col}>
                    <div className = {styles.label}>Date</div>
                    {
                        error.firstName ? (
                            <div className = {styles.error}>{error.firstName}</div>
                        ):null
                    }
                    <input 
                        onKeyPress = {handleFirstNameKeyPress} 
                        onChange = {handleChange} 
                        ref = {firstName} placeholder = "Ex: 04/05/2022" 
                        className = {`${error.firstName ? styles.error_input : styles.input}`} 
                        name = "firstName" 
                        type = "text"
                        
                    />
                </div>
            </div>
            <div className = {styles.column}>
                <>
                    <div className = {styles.label}>Description</div>
                    {
                        error.firstName ? (
                            <div className = {styles.error}>{error.firstName}</div>
                        ):null
                    }
                    <textarea 
                        placeholder = "...." 
                        className = {`${styles.input} ${styles.textarea} ${error.firstName ? styles.error_input : ""}`} 
                        name = "firstName"
                        ref = {textarea}
                        rows = {1}
                    />
                </>
            </div>
        </div>
    )
}

export default BasicInformation;