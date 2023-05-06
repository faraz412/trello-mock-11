import React from "react";

const ViewNotice=({notices,deleteFunc})=>{

    return(
        <div className="noticeDiv">
            <h1>Notices</h1>
            <div className="noticeCards">
                {notices.map((elem)=>{
                    return(
                        <div key={elem._id}>
                            <h2>Author: {elem.author}</h2>
                            <h3>Title: {elem.title}</h3>
                            <p>Description: {elem.description}</p>
                            <button onClick={(e)=>{deleteFunc(elem._id)}}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default ViewNotice;