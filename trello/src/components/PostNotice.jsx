import React from "react";

const PostNotice=({formFunc})=>{

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formObj={
            author: e.target.author.value,
            title: e.target.title.value,
            description: e.target.description.value
        };
        formFunc(formObj);
    }

    return(
        <div className="formDiv">
            <h1>Create New Notice</h1>
            <form onSubmit={handleSubmit}>
                <input required name="author" type="text" placeholder="Enter Author Name"/>
                <input required name="title" type="text" placeholder="Enter Title"/>
                <input required name="description" type="text" placeholder="Enter Description"/>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    )
};

export default PostNotice;