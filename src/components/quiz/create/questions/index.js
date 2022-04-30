import React, {useState, useRef, useEffect} from "react";
import styles from "../../../../styles/quiz/question/question.module.css"
import ListeningQuestion from "./listening";
import WrittingQuestion from "./writting";
import Answers from "../answer";

const Question = ({state, setState, selectAnswerID, setSelectAnswerID, ...props}) => {

    const category = useRef();

    const [error, setError] = useState({
        category : "",
        question : "",
        audioUrl: "",
        answer: ""
    })
    
    const handleChange = (index, e) =>{
        const {name, value} = e.target;
        let questions = [...state.questions];
        questions[index][name] = value;

        setState(prevState => ({...prevState, questions: questions}))
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

    const formValidation = (index) =>{
        const questions = [...state.questions];
        setError({
            category : "",
            question : "",
            audioUrl: "",
            answer: ""
        })
        let audioUrl = false;
        const category = inputValidation("category", questions[index].category);
        const question = inputValidation("question", questions[index].question) 
        if(questions[index].category === "listening")
            audioUrl = inputValidation("audioUrl", questions[index].audioUrl) 
        //alert(`${audioUrl} ${question}`)
        if(category || question || audioUrl)
            return false;
    
        return true;
    }

    const generateAnswerForms =(index)=>{
        let questions = [...state.questions];
        let answers = questions[index].answers;

        const isAllowed = formValidation(index)

        if(!isAllowed)
            return 0;

        if(answers.length){
            const currentIndex = answers.findIndex(element => element.id === selectAnswerID)

            if(currentIndex !== -1)
                if(answers[currentIndex].answer === ""){ 
                    setError(prevState=>({...prevState, answer: "This Field is required."}))
                    return 0;
                }
        }

        const object = {
            id: Date.now(),
            answer: "",
            status: false
        }

        questions[index].answers.push(object);
        setSelectAnswerID(object.id)

        setState(prevState=>({...prevState, questions: questions}))
    }


    const collapseAnswer = (index) => {
        setError(prevState=>({...prevState, answer: ""}))
        let questions = [...state.questions];
        let answers = questions[index].answers;
        const currentIndex = answers.findIndex(element => element.id === selectAnswerID)


        if(answers[currentIndex].answer === ""){ 
            setError(prevState=>({...prevState, answer: "This Field is required."}))
            return 0;
        }

        setSelectAnswerID("")
    }

    const changeAnswerStatus = (index, questionIndex) =>{
        let questions = [...state.questions];
        questions[questionIndex].answers[index].status = !questions[questionIndex].answers[index].status;
        //alert(JSON.stringify(questions))
        setState(prevState => ({...prevState, questions: questions}))
        //alert(JSON.stringify(state))
    }

    const handleAnswerChange = (index, questionIndex, e) => {
        let questions = [...state.questions];
        let answers = questions[questionIndex].answers;

        const {name, value} = e.target;

        answers[index][name] = value;

        questions[questionIndex].answers = answers;

        setState(prevState=>({...prevState, questions: questions}))
    } 

    if(state.questions.length){
        return(
            <>
                {
                    state.questions.map((item, index )=> (
                        <div key = {item.id} className = {`${styles.container} ${props.selectQuestionID !== item.id ? styles.collapsed : "" }`}>
                            <div className = {styles.header}>
                                <div onClick = {() => props.setSelectQuestionID(item.id)} className = {styles.item}>
                                    <div className = {styles.title}>
                                        {!item.question ? "Not specified": item.question}
                                    </div>
                                    <div className = {styles.category}>
                                        {!item.category ? "Not specified": item.category}
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
                                            props.selectQuestionID === item.id ? (
                                                <i onClick = {() => props.setSelectQuestionID("")} className="far fa-angle-up"></i>
                                            ): (
                                                <i onClick = {() => props.setSelectQuestionID(item.id)} className="far fa-angle-down"></i>
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
                                        value = {item.category}
                                        onChange = {e => handleChange(index, e)}
                                    >
                                        <option value="">Select...</option>
                                        <option value="listening">Listening</option>
                                        <option value="writting">Writting</option>
                                    </select>
                                </>
                            </div>
                            <div className = {styles.main}>
                                {
                                    item.category === "listening" ? (
                                        <ListeningQuestion
                                            state = {item}
                                            index = {index}                                        
                                            handleChange = {handleChange}
                                            error = {error}
                                            setError =  {setError}
                                        />
                                    ): item.category === "writting" ? (
                                        <WrittingQuestion
                                            state = {item}
                                            index = {index} 
                                            handleChange = {handleChange}
                                            error = {error}
                                            setError =  {setError}
                                        />
                                    ) : null
                                }
                                <Answers
                                    state = {item}
                                    index = {index}
                                    changeAnswerStatus = {changeAnswerStatus}
                                    selectAnswerID = {selectAnswerID}
                                    setSelectAnswerID = {setSelectAnswerID}
                                    handleChange = {handleAnswerChange}
                                    error = {error}
                                    collapseAnswer = {collapseAnswer}
                                />
                                {
                                    item.category && item.answers.length <= 4? (
                                        <div onClick = {()=> generateAnswerForms(index)} className = {styles.add}>
                                            <div className = {styles.icon}><i className="fas fa-plus"></i></div>
                                            <div className = {styles.label_add}>Add Answer</div>
                                        </div>
                                    ): null
                                }
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }else return <></>
}

export default Question;