import React from "react";
import Alert from "./pop-pups/alert";
import "../styles/page-wrapper.css";

const PageWrapper = props => {
    return (
        <div className = "page-wrapper">
            <Alert/>
            <button className = "btn-sidebar">
                <div className = "bar-sidebar"></div>
                <div className = "bar-sidebar"></div>
                <div className = "bar-sidebar"></div>
            </button>
            <div className = "sidebar"></div>
            <main className='page-content'>
                {props.children}
            </main>
        </div>
    );
};

export default PageWrapper;