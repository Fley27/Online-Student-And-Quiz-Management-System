import React, {useRef, useState} from "react"
import styles from "../../../../styles/details-tab.module.css"

export const BasicEditCard = ({state, handleChange, updateUser, id, token, setCancel}) => {

    const email = useRef();
    const lastName = useRef();
    const firstName = useRef();
    const city = useRef();
    const country = useRef();
    const address = useRef();
    const address2 = useRef();
    const phone = useRef();

    const [error, setError] = useState({
        email : "",
        firstName: "", 
        lastName: "",
        city: "",
        country: "",
        address: "",
        adress2: "",
        phone: ""
    })
    
    const emailValidation = (email) =>{
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    const validatePhoneNumber = (phoneNumber) =>{
        const status = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return status.test(phoneNumber);
    }
    

    const inputValidation = (name, item) => {
        let value = "";
        if(name !== "email" && name !== "phone"){
            if(!item)
                value = `The ${name} is required!`;
        }
        else if(name === "phone"){
            if(!validatePhoneNumber(item))
                value = "Must be a valid phone number"
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
            city: "",
            country: "",
            address: "",
            adress2: "",
            phone: ""
        })

        const firstName = inputValidation("firstName", state.firstName) 
        const lastName = inputValidation("lastName", state.lastName) 
        const email = inputValidation("email", state.email);
        const phone = inputValidation("phone", state.phone) 
        const country = inputValidation("country", state.country) 
        const city = inputValidation("city", state.city) 
        const address = inputValidation("address", state.address) 
        const address2 = inputValidation("address2", state.address2) 

        if( firstName || lastName || email || phone || country || city || address || address2)
            return false;
    
        return true;
    }

    const handleCancel = () => {
        setCancel(true)
    }

    const handleSubmit = () => {
        const status = formValidation()
        if(status) {
            updateUser(token, JSON.stringify(state), id)
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
                phone.current.focus()
        }
    }

    const handleEmailKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("email", state.email))
                phone.current.focus()
        }
    }

    const handlePhoneKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("phone", state.phone))
                country.current.focus()
        }
    }

    const handleCountryKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("country", state.country))
                city.current.focus()
        }
    }

    const handleCityKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("city", state.city))
                address.current.focus()
        }
    }

    const handleAddressKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("address", state.address))
                address2.current.focus()
        }
    }

    const handleAddress2KeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("address2", state.address2))
                handleSubmit()
        }
    }

    return(
    <div className = {styles.card}>
            <div className = {styles.header}>
                <div className = {styles.title}>Basic Details</div>
            </div>
            <div className = {styles.content}>
                <div className = {`${styles.item} ${styles.wrap}`}>
                    <div className = {styles.col}>
                        <div className = {styles.label}>FirstName</div>
                        {
                            error.firstName ? (<div className = {styles.error}>{error.firstName}</div>) : null
                        }
                        <input 
                            ref = {firstName}
                            onKeyPress = {handleFirstNameKeyPress} 
                            onChange = {handleChange} 
                            placeholder = "John" 
                            className = {`${styles.input} ${error.firstName ? styles.error_input : null}`} 
                            name = "firstName" 
                            type = "text"
                            value = {state.firstName}
                        />
                    </div>
                    <div className = {styles.col}>
                        <div className = {styles.label}>LastName</div>
                        {
                            error.lastName ? (<div className = {styles.error}>{error.lastName}</div>) : null
                        }
                        <input 
                            ref = {lastName}
                            onKeyPress = {handleLastNameKeyPress} 
                            onChange = {handleChange}
                            placeholder = "Doe" className = {`${styles.input} ${error.lastName ? styles.error_input : null}`}
                            name = "lastName" 
                            type = "text"
                            value = {state.lastName}
                        />
                    </div>
                </div>
                <div className = {`${styles.item} ${styles.wrap}`}>
                    <div className = {styles.col}>
                        <div className = {styles.label}>Email</div>
                        {
                            error.email ? (<div className = {styles.error}>{error.email}</div>) : null
                        }
                        <input 
                            ref = {email}
                            onKeyPress = {handleEmailKeyPress} 
                            onChange = {handleChange} 
                            placeholder = "johndoe@gmail.com" 
                            className = {`${styles.input} ${error.email ? styles.error_input : null}`}
                            name = "email" 
                            type = "text"
                            value = {state.email}
                            disabled
                        />
                    </div>
                    <div className = {styles.col}>
                        <div className = {styles.label}>Phone</div>
                        {
                            error.phone ? (<div className = {styles.error}>{error.phone}</div>) : null
                        }
                        <input 
                            ref = {phone}
                            onKeyPress = {handlePhoneKeyPress} 
                            onChange = {handleChange}  
                            placeholder = "+ 1 809 100 0000" className = {`${styles.input} ${error.phone ? styles.error_input : null}`}
                            name = "phone" 
                            type = "tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value = {state.phone}
                        />
                    </div>
                </div>
                <div className = {`${styles.item} ${styles.wrap}`}>
                    <div className = {styles.col}>
                        <div className = {styles.label}>Country</div>
                        {
                            error.country ? (<div className = {styles.error}>{error.country}</div>) : null


                        }
                        <input
                            ref = {country}
                            onKeyPress = {handleCountryKeyPress} 
                            onChange = {handleChange}  
                            placeholder = "Haiti" className = {`${styles.input} ${error.country ? styles.error_input : null}`}
                            name = "country" 
                            type = "text"
                            value = {state.country}
                        />
                    </div>
                    <div className = {styles.col}>
                        <div className = {styles.label}>City</div>
                        {
                            error.city ? (<div className = {styles.error}>{error.city}</div>) : null
                        }
                        <input
                            ref = {city}
                            onKeyPress = {handleCityKeyPress} 
                            onChange = {handleChange} 
                            placeholder = "Cayes" 
                            className = {`${styles.input} ${error.city ? styles.error_input : null}`}
                            name = "city" 
                            type = "text"
                            value = {state.city}
                        />
                    </div>
                </div>
                <div className = {`${styles.item} ${styles.wrap}`}>
                    <div className = {styles.col}>
                        <div className = {styles.label}>Address 1</div>
                        {
                            error.address ? (<div className = {styles.error}>{error.address}</div>) : null
                        }
                        <input 
                            ref = {address}
                            onKeyPress = {handleAddressKeyPress} 
                            onChange = {handleChange}  
                            placeholder = "Rue des Fort 44" className = {`${styles.input} ${error.address ? styles.error_input : null}`}
                            name = "address" 
                            type = "text"
                            value = {state.address}
                        />
                    </div>
                    <div className = {styles.col}>
                        <div className = {styles.label}>Address 2</div>
                        {
                            error.adress2 ? (<div className = {styles.error}>{error.adress2}</div>) : null
                        }
                        <input 
                            ref = {address2}
                            onKeyPress = {handleAddress2KeyPress} 
                            onChange = {handleChange} 
                            placeholder = "House #67" 
                            className = {`${styles.input} ${error.address2 ? styles.error_input : null}`}
                            name = "address2" 
                            type = "text"
                            value = {state.address2}
                        />
                    </div>
                </div>
            </div>
            <div className = {`${styles.bottom} ${styles.buttons}`}>
                <div onClick = {() => handleSubmit()} className = {`${styles.button} ${styles.green}`}>
                    Update
                </div>
                <div onClick = {()=> handleCancel()} className = {`${styles.button} ${styles.red}`}>
                    Cancel
                </div>
            </div>
        </div>
    ) 
}