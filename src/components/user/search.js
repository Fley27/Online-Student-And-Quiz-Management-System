import React from "react"
import { SearchInput } from "../search/search-input"
import styles from "../../styles/search.module.css"

export const Search = (props) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.tab}>
                <div onClick = {()=> props.handleSelect("All")} className = {`${styles.item} ${props.selected === "All" ? styles.selected : null}`}>
                    ALL
                </div>
                <div onClick = {()=> props.handleSelect("Active")} className = {`${styles.item} ${props.selected === "Active" ? styles.selected : null}`}>
                    Active
                </div>
                <div onClick = {()=> props.handleSelect("Suspended")} className = {`${styles.item} ${props.selected === "Suspended" ? styles.selected : null}`}>
                    Suspended
                </div>
            </div>
            <div className = {styles.search}>
                <SearchInput
                    handleChange  = {props.handleChange}
                    name = {props.name}
                />
            </div>
        </div>
    )
}