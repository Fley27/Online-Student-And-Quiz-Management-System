import React from "react"
import styles from "../../../styles//quiz/basic-details.module.css"

export const BasicDetailQuiz= ({user}) => (
    <div className = {styles.card}>
            <div className = {styles.header}>
                <div className = {styles.title}>Basic Details</div>
            </div>
            <div className = {styles.content}>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        Title
                    </div> 
                    <span>LOrem Ipsum Lo Ipsum</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        Description
                    </div><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        Teacher 
                    </div>
                    <span>Fenley Menelas</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        N. Of Students
                    </div>
                    <span>32</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        Category
                    </div>
                    <span>A</span>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.left}>
                        date    
                    </div>
                    <span>02/05/2022</span>
                </div>
            </div>
        </div>
) 