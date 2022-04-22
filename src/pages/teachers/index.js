import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { fetchUsers } from "../../redux/actions/user";
import User from "../../components/user";

const Teacher = (props) =>{
    return(
        <>
            <User
                title = "Teacher"
                fetchUsers = {props.fetchUsers}
                link = "Teachers"
                auth = {props.auth}
                user = {props.user}
            />
        </>
    )
}

Teacher.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
});


export default connect(mapStateToProps, {fetchUsers})(Teacher);