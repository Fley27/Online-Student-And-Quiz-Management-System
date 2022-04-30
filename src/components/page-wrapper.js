import React from "react";
import Alert from "./pop-pups/alert";
import SideBar from "./menu/sidebar"
import NavigationBar from "./menu/navigation-bar";
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
            {
                window.location.pathname !== "/quiz/create" && window.location.pathname !== "/login" && window.location.pathname !== "/register" ? (
                    <NavigationBar/>
                ): null
            }            
        </div>
    );
};

export default PageWrapper;