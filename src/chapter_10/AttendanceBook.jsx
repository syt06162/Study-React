import React from "react";

const students = [
    {
        name: "Inje",
        id: 1
    },
    {
        name: "Steve",
        id: 2
    },
    {
        name: "Yejoon",
        id: 3
    },
    {
        name: "Sherlock",
        id: 4
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;