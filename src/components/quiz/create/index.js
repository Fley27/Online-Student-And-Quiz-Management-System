import React, {useState} from "react";
import BasicInformation from "./basic-information";
import styles from "../../../styles/quiz/create.module.css"
import Question from "./questions";
import QuizPreview from "../preview";


const Create = () => {


    const [selectAnswerID, setSelectAnswerID] =  useState("")
    const [selectQuestionID, setSelectQuestionID] =  useState("180983933");
    const [hidden, setHidden] =  useState(true)
    
    const [state, setState] = useState({
        title: "",
        category: "",
        numberOfQuestion: "",
        allowedTime: "",
        description: "",
        questions: [
            {
                id: "180983933",
                category: "",
                question: "",
                audioUrl: "",
                answers: []
            }
        ]
    })

    const generateQuestionForm = () => {
        let questions = [...state.questions];
        const lastIndex = questions.length - 1;
        //alert(questions[lastIndex].category)
        if(questions[lastIndex].category === "listening"){
            if(questions[lastIndex].question === "" || questions[lastIndex].audioUrl === ""){
                alert(`The "Question" and "Audiourl" fields are required.`)
                return 0;
            }
            if(questions[lastIndex].answers.length){
                if(questions[lastIndex].answers.length < 2){
                    alert(`For any questions with multiple choices answers -  2 answers at least is required.`)
                    return 0;
                }
            }
        } else if(questions[lastIndex].category === "writting"){
            if(questions[lastIndex].question === ""){
                alert(`The "Question" field is required.`)
                return 0;
            }
            if(questions[lastIndex].answers.length){
                if(questions[lastIndex].answers.length < 3){
                    alert(`For any questions with multiple choices answers -  2 answers at least is required.`)
                    return 0;
                }
            }
        } else   
            //alert("KK")
            return 0;
        
        const object = {
            id: Date.now(),
            category: "",
            question: "",
            audioUrl: "",
            answers: []
        }
        questions.push(object);
        setSelectQuestionID(object.id)
        setSelectAnswerID("")
        setState(prevState=>({...prevState, questions: questions}));
    }

    const toggleHidden = () => {
        setHidden(!hidden);
    }

    return(
        <div className = {styles.container}>
            <div className = {styles.quiz}>
                <div>
                    <a href = {`/quiz`} className = {styles.btn}>
                        <span><i className = "fas fa-arrow-left"></i></span>
                        Quizzes
                    </a>
                </div>
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
                    selectQuestionID = {selectQuestionID}
                    setSelectQuestionID = {setSelectQuestionID}
                    selectAnswerID = {selectAnswerID}         
                    setSelectAnswerID = {setSelectAnswerID}
                />
                <div onClick = {()=> generateQuestionForm()} className = {styles.add}>
                    <div className = {styles.icon}><i className="fas fa-plus"></i></div>
                    <div className = {styles.label}>Add Question</div>
                </div>

            </div>
            <div className = {`${styles.preview} ${!hidden ? styles.floating : "" }`}>
                <QuizPreview
                    selectQuestionID = {selectQuestionID}
                    questions = {state.questions}
                    setSelectQuestionID = {setSelectQuestionID}
                />
            </div>
            <div onClick = {() => toggleHidden()} className = {styles.btnPreview}>
                {
                    hidden ? (
                        <i className="far fa-file-alt"></i>
                    ): <i className="far fa-times"></i>
                }
            </div>
        </div>
    )
}

export default Create;