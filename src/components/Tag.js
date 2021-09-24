import React, { useContext } from 'react';
import { TagContext } from '../context/TagContext';


// import css file
import '../styles/Tag.css';

const Tag = ({ student }) => {

    // Get tagValues from the Context hook
    const { tagValues } = useContext(TagContext);

    return (
        <div className='tags'>
            {Object.values(tagValues).map((tag, i) => (
                student.email === Object.keys(tagValues)[i] && (
                    <p className='tag' key={i}>{tag} </p>)))
            }
        </div>
    )
}

export default Tag;
