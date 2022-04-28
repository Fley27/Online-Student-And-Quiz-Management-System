import React, {useRef, useEffect} from "react";
import autosize from "autosize";
import styles from "../../../styles/quiz/question/question.module.css"


const Answers = ({state, changeAnswerStatus, ...props}) => {
    useEffect(() => {
        autosize(answer.current);
    })

    const answer = useRef();

    if(state.question.answers.length){
        return(
            <>
                <div className = {styles.title}>Answers</div>
                {
                    state.question.answers.map(item => (
                        <div key = {item.id} className = {`${styles.container} 
                        ${!item.status && props.selectAnswerID !== item.id  ?  styles.red :item.status && props.selectAnswerID !== item.id ? styles.blue: null} 
                        ${props.selectAnswerID !== item.id ? styles.collapsed : "" }`}>
                            <div onClick = {() => props.setSelectAnswerID(item.id)} className = {styles.header}>
                                <div className = {styles.item}>
                                    <div className = {styles.title}>
                                        {!item.answer ? "Not specified": item.answer}
                                    </div>
                                    <div className = {styles.category}>
                                        {!item.status  ? "Wrong": "Good"}
                                    </div>
                                </div>
                                <div className = {styles.item}>
                                    <div className = {styles.dots}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className = {styles.angle}>
                                        {
                                            props.selectAnswerID === item.id ? (
                                                <i className="far fa-angle-up"></i>
                                            ): (
                                                <i className="far fa-angle-down"></i>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className = {styles.column}>
                                <>
                                    <div className = {styles.label}>Answer</div>
                                    {
                                        props.error.answer && props.selectAnswerID === item.id ? (
                                            <div className = {styles.error}>{props.error.answer}</div>
                                        ):null
                                    }
                                    <textarea 
                                        placeholder = "Ex: Is a little cake." 
                                        className = {`${styles.input} ${styles.textarea} ${props.error.answer ? styles.error_input : ""}`} 
                                        name = "answer"
                                        ref = {answer}
                                        rows = {1}
                                        onChange = {props.handleAnswerChange}
                                    />
                                </>
                            </div>
                            <div className = {styles.column}>
                                <>
                                    <div className = {styles.label}>Is it a Good Answer?</div>
                                    <div onClick = {()=> changeAnswerStatus(item.id)} className = {`${styles.radioButton} ${item.status ? styles.green : null}`}>
                                        <div className = {styles.status}></div>
                                    </div>
                                </>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }else
        return<></>
}

export default Answers;