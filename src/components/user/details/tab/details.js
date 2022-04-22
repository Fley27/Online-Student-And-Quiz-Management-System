import React from "react"
import { BasicDetailCard } from "../cards/basic-details"
import { DeleteDetailCard } from "../cards/delete"
import styles from "../../../../styles/details-tab.module.css"

export const DetailsTab = ({user}) => {
    return(
        <div className = {styles.container}>
            <BasicDetailCard
                user = {user}
            />
            <DeleteDetailCard
                user = {user}
            />
        </div>
    )
}