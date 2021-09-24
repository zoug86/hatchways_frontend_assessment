import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { STUDENT_URL } from '../api';

//import css file
import '../styles/Filter.css';

const Filter = ({ students, search, setStudents, filterKey, original }) => {
    const [searchTerm, setSearchTerm] = useState('');
    //const newarray = students;
    // Load the data from the api when searchTerm changes
    useEffect(() => {
        const searchStudent = async () => {
            const { data } = await axios.get(`${STUDENT_URL}`);
            if (filterKey === 'search') {
                const newStudents = data.students.filter(({ firstName, lastName }) =>
                    firstName.toLowerCase().indexOf(searchTerm) !== -1 ||
                    lastName.toLowerCase().indexOf(searchTerm) !== -1
                );
                setStudents(newStudents);
            }
            // if (filterKey === 'tag') {
            //     const newStudents = original.filter(({ tagValues }) => {

            //         return (tagValues.join().toLowerCase().indexOf(searchTerm) !== -1)

            //     });
            //     setStudents(newStudents);
            // }

        }
        searchStudent();

    }, [searchTerm]);

    const resetStudents = () => {
        setStudents(students);
    }

    return (
        <div className='text_input'>
            <input
                type='text'
                name='search'
                id='search'
                value={searchTerm}
                placeholder={search}
                onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    )
}

export default Filter;
