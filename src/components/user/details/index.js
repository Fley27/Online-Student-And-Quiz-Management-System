import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import img from "../../../images/avatar.jpeg"
import styles from "../../../styles/details-user.module.css"
import { DetailsTab } from './tab/details';
import { detailUser, updateUser } from '../../../redux/actions/user';


function UserDetails (props) {
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
                    {props.title}
                </a>
            </div>
            <div className = {styles.header}>
                <div className = {styles.avatar}>
                    <div className = {`${styles.profile}`}>
                        <div className = {styles.image}>
                            <img
                                src= {img}
                                alt="Picture of the author"
                                layout = "fill"
                                placeholder = "blur"
                            />
                        </div>
                    </div>
                    <div className = {styles.name}>
                        <div className = {styles.dispalyName}>Fenley Menelas</div>
                        <div className = {styles.username}>@fenleyMenelas</div>
                    </div>
                </div>
                <div className = {styles.buttons}>
                    <div onClick = {()=> window.location = `/admin/${props.link}/edit/${props.id}`} className = {`${styles.button} ${styles.mauvre}`}>
                        Edit <span><i className="far fa-edit"></i></span>
                    </div>
                    {
                        props.user.user ? !props.user.user.status || props.user.user.status === "Pending" ? (
                            <div onClick = {()=>handleUpdateUser()} className = {`${styles.button} ${styles.green}`}>
                                Approve <span><i className="far fa-check-circle"></i></span>
                            </div>
                        ) : null : null
                    }
                </div>
            </div>
            <div className = {styles.tab}>
                <div onClick = {()=> handleSelect("Details")} className = {`${styles.item} ${selected === "Details" ? styles.selected : null}`}>
                    Details
                </div>
                <div onClick = {()=> handleSelect("Quizes")} className = {`${styles.item} ${selected === "Quizes" ? styles.selected : null}`}>
                    Quizes
                </div>
                <div onClick = {()=> handleSelect("Drafts")} className = {`${styles.item} ${selected === "Drafts" ? styles.selected : null}`}>
                    Drafts
                </div>
            </div>
                {/*
                    props.user.user ? (
                        
                    ):null
                    */
                }
            <DetailsTab/>
        </div>
    )
}

export const Tab = ({selected, user, id, link}) => {
    if(selected === "Details") return(
        <DetailsTab
            user = {user}
        />
    )
}

UserDetails.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    detailUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
});


export default connect(mapStateToProps, {detailUser, updateUser})(UserDetails);