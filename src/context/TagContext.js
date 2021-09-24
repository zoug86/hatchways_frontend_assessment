import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { STUDENT_URL } from '../api';

export const TagContext = createContext();

export const TagProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [tagValues, setTagValues] = useState({});

    // Load the data from the api when isloading changes
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
    const addTagsToStudents = (student, tag) => {
        setTagValues({})
    }
    return (
        <TagContext.Provider value={{ students, isLoading, setStudents, loading, setLoading, tagValues, addTagsToStudents, setTagValues }} >
            {children}
        </TagContext.Provider >
    )
}