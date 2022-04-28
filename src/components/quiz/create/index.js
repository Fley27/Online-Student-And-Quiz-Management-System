import React, {useState} from "react";
import BasicInformation from "./basic-information";
import styles from "../../../styles/quiz/create.module.css"
import Question from "./questions";


const Create = () => {
    
    const [state, setState] = useState({
        title: "",
        category: "",
        numberOfQuestion: "",
        allowedTime: "",
        description: "",
        question: {
            category: "",
            question: "",
            audioUrl: "",
            answers: []
        }
    })

    return(
        <div className = {styles.container}>
            <div className = {styles.quiz}>
                <BasicInformation
                    state = {state}
                    setState = {setState}
                />
                <div className = {styles.questions}>
                    <div className = {styles.question}>Questions</div>
                    <div className = {styles.description}> A varied education on your resume sums up the value that your learnings and background will bring to job.</div>
                </div>
                <Question
                    state = {state}
                    setState = {setState}
                />
                <div className = {styles.add}>
                    <div className = {styles.icon}><i className="fas fa-plus"></i></div>
                    <div className = {styles.label}>Add Question</div>
                </div>

            </div>
            <div className = {styles.preview}>
                kjdsjkd
            </div>
        </div>
    )
}

export default Create;