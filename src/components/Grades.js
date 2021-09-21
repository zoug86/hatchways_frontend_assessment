import React from 'react';

// import css file
import '../styles/Grades.css'
const Grades = ({ grades }) => {
    return (
        <div className='grades'>
            {grades.map((grade, i) => (
                <pre>Test {i + 1}:       {grade}%</pre>
            ))}
        </div>
    )
}

export default Grades;
