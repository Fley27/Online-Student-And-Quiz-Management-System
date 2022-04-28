import React from 'react';
import QuizPage from '../../components/quiz';
import {Search} from "../../components/search"
import styles from '../../styles/dashboard.module.css';

export default function Quiz (){
    return (
        <div className={styles.container}>
            <Search
                item1 = "Today"
                item2 = "Is coming"
                item3 = "Expired"
            />
            <QuizPage/>
        </div>
    )
}