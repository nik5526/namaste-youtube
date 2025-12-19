import React from "react";
import {User_Icon} from "../utilities/links"


//here we will do n level hoisting , means we can see n level of comments , for that youtube dont provide us the data we have to take dummy data .
const commentData = [
    {
        Name : "Nikhil Raj",
        comment : "Hii this is the dummy comment we are using.",
        replies : []
    },
    {
        Name : "Nikhil Raj",
        comment : "Hii this is the dummy comment we are using.",
        replies : [
            {
                Name : "Nikhil Raj",
                comment : "Hii this is the dummy comment we are using.",
                replies : [
                    {
                        Name : "Nikhil Raj",
                        comment : "Hii this is the dummy comment we are using.",
                        replies : [
                            {
                                Name : "Nikhil Raj",
                                comment : "Hii this is the dummy comment we are using.",
                                replies : []
                            },
                        ]
                    },
                ]
            },
            {
                Name : "Nikhil Raj",
                comment : "Hii this is the dummy comment we are using.",
                replies : []
            },
        ]
    },
    {
        Name : "Nikhil Raj",
        comment : "Hii this is the dummy comment we are using.",
        replies : []
    },
    {
        Name : "Nikhil Raj",
        comment : "Hii this is the dummy comment we are using.",
        replies : []
    },
    {
        Name : "Nikhil Raj",
        comment : "Hii this is the dummy comment we are using.",
        replies : [
            {
                Name : "Nikhil Raj",
                comment : "Hii this is the dummy comment we are using.",
                replies : [
                    {
                        Name : "Nikhil Raj",
                        comment : "Hii this is the dummy comment we are using.",
                        replies : []
                    },
                ]
            },
        ]
    },
    {
        Name : "Nikhil Raj",
        comment : "Hii this is the dummy comment we are using.",
        replies : []
    },
    
]

const Comment = ({data})=>{

    const {Name, comment ,replies} = data;

    return (<div className=" flex m-2 p-2">
        <img className="w-11 h-11" src={User_Icon} alt="user-icon"/>
        <div className="pt-1 pl-2">
            <p className="text-sm font-bold">{Name}</p>
            <p className="text-sm">{comment}</p>
        </div>
    </div>);
}

const CommentList = ({comment})=>{
    return comment.map((comments,index)=> 
    <div className="border border-l-2" key={index}>
        <Comment data={comments}/>
        {/* here we will use recurssion to visible the comments to n level . */}
        <div className="pl-4 ml-3">
            <CommentList comment={comments.replies}/>
        </div>
    </div>
)};

const CommentsContainer = ()=>{
    return (
        <div>
            <div className="text-xl font-semibold m-2 p-2">Comments : </div>
            <div><CommentList comment={commentData}/></div>
        </div>
    );
}

export default CommentsContainer;