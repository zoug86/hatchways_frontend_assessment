import React, { useContext } from 'react';
import { TagContext } from '../context/TagContext';
import { v4 as uuidv4 } from 'uuid';


// import css file
import '../styles/Tag.css';

const Tag = ({ student }) => {
    const { tagValues } = useContext(TagContext);

    return (
        <div className='tags'>
            {Object.values(tagValues).map((tag, i) => (
                student.email === Object.keys(tagValues)[i] && (
                    <p className='tag' key={uuidv4()}>{tag} </p>)))
            }
        </div>
    )
}

export default Tag;
