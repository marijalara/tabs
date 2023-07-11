import React, { useState } from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';

const Jobs = ({job, index}) => {
    const [selected, setSelected]=useState(null)
    

    const toggleCompany=(company) => {
        setSelected(selected===job.company ? null : company)
    }
    return (
        <section className='section'>
        <div className='center'>
        <div className='container'>
            <button className={`btn ${selected===job.company ? 'active-btn' : ''}`} key={job.id} onClick={() => toggleCompany(job.company)}>
                {job.company}
            </button>
        </div>
        {selected && (
        <article className='info'>
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <p className='dates'>{job.dates}</p>
            {job.duties.map((duty, index) => (
                <div key={index} className='description'>
                    <FaAngleDoubleRight className='icon'/>
                    <p>{duty}</p>
                </div>
            ))}
        </article>
        )}
        </div>
    </section>
    )
}

export default Jobs