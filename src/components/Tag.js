import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// import css file
import '../styles/Tag.css';

const Tag = ({ student }) => {
    console.log(student.allTags)
    return (
        <div className='tags'>
            {student.allTags.map((tag, i) => (
                <p className='tag' key={uuidv4()}>{tag} </p>))
            }
        </div>
    )
}

export default Tag;
