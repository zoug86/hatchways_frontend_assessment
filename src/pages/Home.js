import React, { useEffect, useState, useContext } from 'react';
import Student from '../components/Student';
import { TagContext } from '../context/TagContext';

// import css file
import '../styles/Home.css';

const Home = () => {

    const { students, isLoading, loading, setLoading, tagValues } = useContext(TagContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [tagTerm, setTagTerm] = useState('');

    useEffect(() => {
        if (loading) {

            students.map((student, i) => {
                if (Object.keys(tagValues).includes(student.email)) {
                    student.allTags = tagValues[student.email];
                    console.log(student)
                }
            })
        }
        setLoading(true);
    })

    //console.log(students)
    return (
        isLoading ? <h1>Loading...</h1> : (
            <div className='home'>
                <div className='text_input'>
                    <input
                        type='text'
                        name='search'
                        value={searchTerm}
                        placeholder='Search by name'
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className='text_input'>
                    <input
                        type='text'
                        name='tag'
                        value={tagTerm}
                        placeholder='Search by tag'
                        onChange={(e) => setTagTerm(e.target.value)} />
                </div>
                <div className='students_list'>
                    {students.filter(student => {
                        let newStudent;
                        if ((student.firstName + ' ' + student.lastName).toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            newStudent = student;
                        }
                        return newStudent
                    }).filter(student => {
                        let newStudent;
                        if ((student.allTags.join()).toLowerCase().includes(tagTerm.toLocaleLowerCase())) {
                            newStudent = student;
                        }
                        return newStudent
                    }).map((newStudent, i) => (
                        <Student key={i} student={newStudent} />
                    ))}
                </div>
            </div>

        )
    )

}

export default Home;