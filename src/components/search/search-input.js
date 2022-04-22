import React, {useRef} from "react";
import styles from "../../styles/search-input.module.css"


export const SearchInput = (props) => {
    const search = useRef();
    const inputValidation = (name, item) => {
        let value = "";
        if(!item)
            value = `The ${name} is required!`;

        if(value)
            return true;
        return false
    }

    const handleSearchKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("search", props.name))
                if(props.status === "blog")
                    props. handleOnClick()
                else    
                    console.log("KK");
        }
    }
    return(
        <div className = {styles.container}>
            <i className="fas fa-search"></i>
            <input 
                ref = {search}
                onKeyPress = {handleSearchKeyPress} 
                onChange = {props.handleChange} 
                value = {props.name}  
                placeholder = "Search...." 
                type = "search"
            />
        </div>
    )
}