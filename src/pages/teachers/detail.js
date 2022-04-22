
import React from "react";
import Details from "../../components/user/details";

export default function DetailsTeacher ({id}){
    return(
        <Details
            title = "Author"
            id = {id}
            link  = "author"
        />
    )
}