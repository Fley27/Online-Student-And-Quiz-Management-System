import React, {useRef, useEffect} from "react";
import autosize from "autosize";
import styles from "../../../../../styles/quiz/question/question.module.css"

const ListeningQuestion = ({state, index, handleChange, error, setError}) => {
    useEffect(() => {
        autosize(question.current);
        autosize(audioUrl.current);
    })

    const question = useRef();
    const audioUrl = useRef();

    return(
        <div className = {`${styles.container} ${styles.hidden}`}>
            <div className = {styles.column}>
                <>
                    <div className = {styles.label}>Describe the following task.</div>
                    {
                        error.question ? (
                            <div className = {styles.error}>{error.question}</div>
                        ):null
                    }
                    <textarea 
                        placeholder = "Ex: Write what you heard. " 
                        className = {`${styles.input} ${styles.textarea} ${error.question ? styles.error_input : ""}`} 
                        name = "question"
                        ref = {question}
                        rows = {1}
                        onChange = {e => handleChange(index, e)}
                        value = {state.question}
                    />
                </>
            </div>
            <div className = {styles.column}>
                <>
                    <div className = {styles.label}>Link of the Audio</div>
                    {
                        error.audioUrl ? (
                            <div className = {styles.error}>{error.audioUrl}</div>
                        ):null
                    }
                    <textarea 
                        placeholder = "Ex: https://vocaroo.com/embed/1l8y8WMfbHYy?autoplay=0" 
                        className = {`${styles.input} ${styles.textarea} ${error.audioUrl ? styles.error_input : ""}`} 
                        name = "audioUrl"
                        ref = {audioUrl}
                        rows = {1}
                        onChange = {e => handleChange(index, e)}
                        value = {state.audioUrl}
                    />
                </>
            </div>
        </div>
    )
}

export default ListeningQuestion;