import React from "react"
import { SearchInput } from "../search/search-input"
import styles from "../../styles/search.module.css"

export const Search = (props) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.tab}>
                <div onClick = {()=> props.handleSelect(`${props.item1}`)} className = {`${styles.item} ${props.selected === `${props.item1}` ? styles.selected : null}`}>
                    {props.item1}
                </div>
                <div onClick = {()=> props.handleSelect(`${props.item2}`)} className = {`${styles.item} ${props.selected === `${props.item2}` ? styles.selected : null}`}>
                    {props.item2}
                </div>
                <div onClick = {()=> props.handleSelect(`${props.item3}`)} className = {`${styles.item} ${props.selected === `${props.item3}` ? styles.selected : null}`}>
                    {props.item3}
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