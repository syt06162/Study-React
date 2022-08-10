import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "셜록",
        comment: "리액트 맛보기"
    },
    {
        name: "권예준",
        comment: "공부할게 많네요"
    },
    {
        name: "소플",
        comment: "제 강의를 보고 계시군요"
    }
];

function CommentList(props) {
    return (
        <div>
            {comments.map( (one) => {
                    return (
                        <Comment name={one.name} comment={one.comment}/>
                    );
                } )}
        </div>
    );
}

export default CommentList;