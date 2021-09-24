import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { STUDENT_URL } from '../api';

export const TagContext = createContext();// called TagContext because it is mainly created to update students with input tags

export const TagProvider = ({ children }) => {

    // Global states: sudents, tagValues, loading
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [tagValues, setTagValues] = useState({});

    // Load the data from the api URL using axios when the app loads automatically(async operation)
    useEffect(() => {
        if (isLoading) {
            const getStudents = async () => {
                const { data } = await axios.get(`${STUDENT_URL}`);
                const newStudents = data.students.map(student => ({ ...student, allTags: [] }))
                setStudents(newStudents);
                setIsLoading(false);
            }
            getStudents();
        }
    }, [isLoading]);

    return (
        <TagContext.Provider value={{ students, isLoading, setStudents, loading, setLoading, tagValues, setTagValues }} >
            {children}
        </TagContext.Provider >
    )
}