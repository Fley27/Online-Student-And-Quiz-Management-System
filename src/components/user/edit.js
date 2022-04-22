import React, {useState, useEffect} from 'react'; 
import { connect } from 'react-redux';
import img from "../../images/avatar.jpeg"
import { updateUser, detailUser } from "../../redux/actions/user";
import { BasicEditCard } from './details/cards/edit-basic-card';
import PropTypes from "prop-types";
import styles from "../../styles/details-user.module.css"

const Edit = ({updateUser, link, title, detailUser, user, auth, id}) => {

    const [cancel, setCancel] = useState(false)

    useEffect(()=>{
        detailUser(auth.token, id);  
        setCancel(false)
    }, [cancel])

    const [state, setState] = useState({
        email : "",
        firstName: "", 
        lastName: "",
        city: "",
        country: "",
        address: "",
        address2: "",
        phone: ""
    })

    useEffect(()=>{
        console.log(user);
        if(user.user){
            setState({
                email : user.user.email,
                firstName: user.user.firstName, 
                lastName: user.user.lastName,
                city: user.user.city ? user.user.city : "",
                country: user.user.country ? user.user.country : "",
                address: user.user.address ? user.user.address : "",
                address2: user.user.address2 ? user.user.address2 : "",
                phone: user.user.phone ? user.user.phone : ""
            })
        }
    }, [user])
    

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value})) 
    }

    return(
        <div className = {styles.container}>
            <div>
                <a href = {`/admin/${link}`} className = {styles.btn}>
                    <span><i className = "fas fa-arrow-left"></i></span>
                    {title}
                </a>
            </div>
            <div className = {styles.header}>
                <div className = {styles.avatar}>
                    <div className = {`${styles.profile}`}>
                        <div className = {styles.image}>
                            <img
                                src= {img}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className = {styles.name}>
                        <div className = {styles.dispalyName}>Fenley Jude Viky Menelas</div>
                        <div className = {styles.username}>@fenleyMenelas</div>
                    </div>
                </div>
            </div>
            <BasicEditCard
                state = {state}
                handleChange = {handleChange}
                updateUser = {updateUser}
                id  = {id}
                token = {auth.token}
                setCancel = {setCancel}
            />
        </div>
    )
}

Edit.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
    detailUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user,
});


export default connect(mapStateToProps, {updateUser, detailUser})(Edit);