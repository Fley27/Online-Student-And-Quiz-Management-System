import React from "react";
import Edit from "../../components/user/edit";

export default function AuthorEdit ({id}){
    return(
            <Edit
                title = "Author"
                id = {id}
                link  = "author"
            />
    )
}