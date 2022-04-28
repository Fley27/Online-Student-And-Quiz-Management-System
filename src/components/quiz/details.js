import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { BasicDetailQuiz } from '../cards/quiz/basic-details';
import { DashboardQuiz } from '../cards/quiz/dashboard';
import PropTypes from "prop-types";
import styles from "../../styles/quiz/details-quiz.module.css"
import { detailUser, updateUser } from '../../redux/actions/user';


function QuizDetails (props) {
    const [selected, setSelected] = useState("Details");
    const handleSelect = (item) => {
        setSelected(item)
    };
    useEffect(()=>{
        props.detailUser(props.auth.token, props.id);  
    }, [])

    const handleUpdateUser = () => {
        const body = {
            status: "Approved"
        }
        props.updateUser(props.auth.token, JSON.stringify(body), props.id)
    }
    return(
        <div className = {styles.container}>
            <div>
                <a href = {`/admin/${props.link}`} className = {styles.btn}>
                    <span><i className = "fas fa-arrow-left"></i></span>
                    Quiz
                </a>
            </div>
            <div className = {styles.header}>
                <div className = {styles.avatar}>
                    <div className = {styles.name}>
                        <div className = {styles.dispalyName}>Loremp Ipsum Lo Ipsum</div>
                    </div>
                </div>
                <div className = {styles.buttons}>
                    <div onClick = {()=> window.location = `/admin/${props.link}/edit/${props.id}`} className = {`${styles.button} ${styles.mauvre}`}>
                        Edit <span><i className="far fa-edit"></i></span>
                    </div>
                </div>
            </div>
            <div className = {styles.tab}>
                <div onClick = {()=> handleSelect("Details")} className = {`${styles.item} ${selected === "Details" ? styles.selected : null}`}>
                    Details
                </div>
                <div onClick = {()=> handleSelect("Students")} className = {`${styles.item} ${selected === "Students" ? styles.selected : null}`}>
                    Students
                </div>
            </div>
            <BasicDetailQuiz/>
            <DashboardQuiz/>
        </div>
    )
}

QuizDetails.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    detailUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
});


export default connect(mapStateToProps, {detailUser, updateUser})(QuizDetails);