import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';

const Jobs = ({job}) => {
    return (
        <section className='section'>
        <div className='center'>
        <div className='container'>
            <button className='btn' key={job.id}>
                {job.company}
            </button>
        </div>
        <article className='info'>
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <p>{job.dates}</p>
            {job.duties.map((duty, index) => (
                <div key={index} className='description'>
                    <FaAngleDoubleRight className='icon'/>
                    <p>{duty}</p>
                </div>
            ))}
        </article>
        </div>
    </section>
    )
}

export default Jobs