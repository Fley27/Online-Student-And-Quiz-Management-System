import React from "react";
import Alert from "./pop-pups/alert";
import SideBar from "./menu/sidebar"
import "../styles/page-wrapper.css";

const PageWrapper = props => {
    return (
        <div className = "page-wrapper">
            <Alert/>
            {
                window.location.pathname !== "/quiz/create" && window.location.pathname !== "/login" && window.location.pathname !== "/register" ? (
                    <SideBar/>
                ): null
            }
            <div className= {`page-content ${window.location.pathname === "/quiz/create" || window.location.pathname === "/login" || window.location.pathname === "/register" ? " extend": ""}`}>
                {props.children}
            </div>
        </div>
    );
};

export default PageWrapper;