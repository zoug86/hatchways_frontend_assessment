import React, { useState } from 'react';
import Grades from '../components/Grades';


//import css file
import '../styles/Student.css';

const Student = ({ student }) => {

    const [toggle, setToggle] = useState('false');
    const sum = student.grades.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    const average = (sum / student.grades.length) || 0;

    return (
        <div className='container'>
            <div className='student_card'>
                <div className='student'>
                    <div className='student_img'>
                        <img src={student.pic} alt={student.firstName} />
                    </div>
                    <div className='student_info'>
                        <span className='student_name'>{student.firstName} {student.lastName}</span>
                        <div className='student_sub_info'>
                            <span className='student_email'>Email: {student.email}</span>
                            <span className='student_company'>Company: {student.company}</span>
                            <span className='student_skill'>Skill: {student.skill}</span>
                            <span className='student_avg'>Average: {average}%</span>
                            {!toggle && <Grades grades={student.grades} />}
                        </div>
                    </div>
                </div>

                <div className='btn_div'>
                    <button className='btn' onClick={() => setToggle(!toggle)}><span className='plus_sign'>
                        {toggle ? (<span>&#43;</span>) : (<span>&#8722;</span>)}</span>
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Student;
