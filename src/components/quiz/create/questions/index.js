import React, {useState, useRef} from "react";
import styles from "../../../../styles/quiz/question/question.module.css"
import ListeningQuestion from "./listening";
import WrittingQuestion from "./writting";
import Answers from "../answer";

const Question = ({state, setState}) => {

    const category = useRef();

    const [error, setError] = useState({
        category : "",
        question : "",
        audioUrl: "",
        answer: ""
    })

    const [selectAnswerID, setSelectAnswerID] =  useState("")
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, question: { ...prevState.question, [name]: value}})) 
    }


    const inputValidation = (name, item) => {
        let value = "";
        if(!item)
            value = `This field is required.`;
        setError(prevState=>({...prevState, [name]: value}))

        if(value)
            return true;
        return false
    }

    const formValidation = () =>{
        setError({
            category : "",
            question : "",
            audioUrl: "",
            answer: ""
        })
        let audioUrl = false;
        const category = inputValidation("category", state.question.category);
        const question = inputValidation("question", state.question.question) 
        if(state.question.category === "listening")
            audioUrl = inputValidation("audioUrl", state.question.audioUrl) 
        //alert(`${audioUrl} ${question}`)
        if(category || question || audioUrl)
            return false;
    
        return true;
    }

    const generateAnswerForms =()=>{
        let answers = [];

        const isAllowed = formValidation()

        if(!isAllowed)
            return 0;

        if(state.question.answers.length){
            answers = state.question.answers;
            const index = answers.findIndex(element => element.id === selectAnswerID)
            if(answers[index].answer === ""){ 
                setError(prevState=>({...prevState, answer: "This Field is required."}))
                return 0;
            }
        }

        const object = {
            id: Date.now(),
            answer: "",
            status: false
        }

        answers.push(object)
        setSelectAnswerID(object.id)

        setState(prevState=>({...prevState, question: { ...prevState.question, answers: answers}}))
    }

    const changeAnswerStatus = (id) =>{
        let answers = state.question.answers;

        answers.map(element => {
            if(element.id === id){
                element.status = !element.status;
                return 0;
            }
        })
        setState(prevState=>({...prevState, question: { ...prevState.question, answers: answers }}))
    }

    const handleAnswerChange = (e) => {
        let answers = state.question.answers;

        const {value} = e.target;

        answers.map(element => {
            if(element.id === selectAnswerID){
                element.answer = value;
                return 0;
            }
        })

        setState(prevState=>({...prevState, question: { ...prevState.question, answers: answers }}))
    } 

    return(
        <div className = {styles.container}>
            <div className = {styles.header}>
                <div className = {styles.item}>
                    <div className = {styles.title}>
                        {!state.question.question ? "Not specified": state.question.question}
                    </div>
                    <div className = {styles.category}>
                        {!state.question.category ? "Not specified": state.question.category}
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
                            1 ? (
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
                    <div className = {styles.label}>Category</div>
                    {
                        error.category ? (
                            <div className = {styles.error}>{error.category}</div>
                        ):null
                    }
                    <select 
                        className = {`${styles.input} ${error.category ? styles.error_input : ""}`} 
                        name = "category"
                        ref = {category}
                        value = {state.question.category}
                        onChange = {handleChange}
                    >
                        <option value="">Select...</option>
                        <option value="listening">Listening</option>
                        <option value="writting">Writting</option>
                    </select>
                </>
            </div>
            {
                state.question.category === "listening" ? (
                    <ListeningQuestion
                        state = {state}
                        setState = {setState}
                        handleChange = {handleChange}
                        error = {error}
                        setError =  {setError}
                    />
                ): state.question.category === "writting" ? (
                    <WrittingQuestion
                        state = {state}
                        setState = {setState}
                        handleChange = {handleChange}
                        error = {error}
                        setError =  {setError}
                    />
                ) : null
            }
            <Answers
                state = {state}
                changeAnswerStatus = {changeAnswerStatus}
                selectAnswerID = {selectAnswerID}
                setSelectAnswerID = {setSelectAnswerID}
                handleAnswerChange = {handleAnswerChange}
                error = {error}
            />
            {
                state.question.category && state.question.answers.length <= 4? (
                    <div onClick = {()=> generateAnswerForms()} className = {styles.add}>
                        <div className = {styles.icon}><i className="fas fa-plus"></i></div>
                        <div className = {styles.label_add}>Add Answer</div>
                    </div>
                ): null
            }
        </div>
    )
}

export default Question;