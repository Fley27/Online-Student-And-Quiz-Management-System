import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/login";
import SignUp from "../auth/register";
import Dashboard from "../../pages/dashboard/dashboard-admin";
import Teachers from "../../pages/teachers";
import DetailsTeacher from "../../pages/teachers/detail";
import Edit from "../../pages/teachers/edit";
const Routess = () => {
    return (
        <Fragment>
            <Routes>           
                <Route path='/login' caseSensitive={false} element={<Login/>} />
                <Route path='/Register' caseSensitive={false} element={<SignUp/>} />
                <Route path='/dashboard' caseSensitive={false} element={<Dashboard/>} />
                <Route path='/Teachers' caseSensitive={false} element={<Teachers/>} />
                <Route path='/teacher' caseSensitive={false} element={<DetailsTeacher/>} />
                <Route path='/edit' caseSensitive={false} element={<Edit/>} />
            </Routes>
        </Fragment>
    );
}; 

export default Routess;