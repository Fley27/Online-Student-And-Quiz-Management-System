import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/login";
import SignUp from "../auth/register";
import Dashboard from "../../pages/dashboard/dashboard-admin";
import Teachers from "../../pages/teachers";
import DetailsTeacher from "../../pages/teachers/detail";
import Edit from "../../pages/teachers/edit";
import Quiz from "../../pages/quiz";
import DetailsQuiz from "../../pages/quiz/details";
import CreateQuiz from "../../pages/quiz/create"
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
                <Route path='/quiz' caseSensitive={false} element={<Quiz/>} />
                <Route path='/quiz/:id' caseSensitive={false} element={<DetailsQuiz/>} />
                <Route path='/quiz/create' caseSensitive={false} element={<CreateQuiz/>} />
            </Routes>
        </Fragment>
    );
}; 

export default Routess;