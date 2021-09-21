import React, { useEffect, useState } from 'react';
import Student from '../components/Student';
// import Loader from '../components/Loader';
import axios from 'axios';
import { STUDENT_URL } from '../api';

// import css file
import '../styles/Home.css';

const Home = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Load the data from the api when isloading changes
    useEffect(() => {
        if (isLoading) {
            const getStudents = async () => {
                const { data } = await axios.get(`${STUDENT_URL}`);
                setStudents(data.students);
                setIsLoading(false);
            }
            getStudents();
        }

    }, [isLoading]);

    // Load the data from the api when searchTerm changes
    useEffect(() => {
        const searchStudent = async () => {
            const { data } = await axios.get(`${STUDENT_URL}`);
            const newStudents = data.students.filter(({ firstName, lastName }) =>
                firstName.toLowerCase().indexOf(searchTerm) !== -1 ||
                lastName.toLowerCase().indexOf(searchTerm) !== -1
            );
            setStudents(newStudents);
        }
        searchStudent();
    }, [searchTerm]);

    console.log(students)
    return (
        isLoading ? <h1>Loading...</h1> : (
            <div className='home'>
                <div className='text_input'>
                    <input
                        type='search'
                        name='search'
                        id='search'
                        value={searchTerm}
                        placeholder='Search by name'
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className='students_list'>
                    {students?.map((student, i) => (
                        <Student key={i} student={student} />
                    ))}
                </div>
            </div>

        )
    )

}

export default Home;