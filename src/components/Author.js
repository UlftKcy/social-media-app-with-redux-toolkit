import React from 'react';
import { useSelector } from "react-redux";
const Author = ({userId}) => {
const author = useSelector((state)=>state.users.find(user=>user.id===userId))
    return (
        <div className="text-muted">
            by {author ? author.name : "Unknown author"}
        </div>
    )
}

export default Author;
