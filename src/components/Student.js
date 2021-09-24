import React, { useState, useContext, useEffect } from 'react';
import Grades from '../components/Grades';
import Tag from '../components/Tag';
import { TagContext } from '../context/TagContext';

//import css file
import '../styles/Student.css';

const Student = ({ student }) => {

    // load global state from the Context hook
    const { students, loading, setLoading, tagValues, setTagValues } = useContext(TagContext);

    // Component specific states
    const [toggle, setToggle] = useState('false');// needed to trigger the Grades component
    const [tag, setTag] = useState(''); // this is the tag input field state
    const [allTags, setAllTags] = useState([]); // we need this to get all the input tags

    //Calcalute the student grades avergae
    const sum = student.grades.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    const average = (sum / student.grades.length) || 0;

    // handle the tag input form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setAllTags([...allTags, tag])
        setLoading(false);
        setTag('');
    }

    // useEffect used here to update tagValues everytime there is a new tag input
    useEffect(() => {
        if (!loading) {
            setTagValues({ ...tagValues, [student.email]: allTags });
            //setLoading(false);
        }
    }, [tag])

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
                            <Tag student={student} />
                            <div className='tag_input'>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type='text'
                                        name='tag'
                                        id='tag'
                                        value={tag}
                                        placeholder='Add a tag'
                                        onChange={(e) => setTag(e.target.value)} />
                                </form>
                            </div>
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
