import React, {useState} from 'react';
import { PropsHome } from './Home';
import {FaAngleDoubleRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface PropsJobs {
    jobs: PropsHome[]
}

const Jobs: React.FC<PropsJobs>= ({jobs}) => {
    const [selectedCompany, setSelectedCompany] = useState(jobs[0]?.company || null)

    const toggleCompany = (company: string) => {
        setSelectedCompany((prevCompany) => (prevCompany === company ? null : company))
    }
    
    let navigate=useNavigate()
    const routheChangeAbout=() => {
        let path=`/about`
        navigate(path)
    }

    return (
        <section className='selection'>
        <div className='center'>
        <div className='container1'>
        <div className='buttons'>
            {jobs.map((job) => (
                <button
                    className={`btn ${selectedCompany === job.company ? 'active-btn' : ''}`}
                    key={job.id}
                    onClick={() => toggleCompany(job.company)}
                >
                    {job.company}
                </button>
            ))}
        </div>
        {jobs.map((job) =>
        selectedCompany === job.company ? (
        <article className='info' key={job.id}>
            <h3>{job.title}</h3>
            <br />
            <h4>{job.company}</h4>
            <p className='dates'>{job.dates}</p>
            <br />
            {job.duties.map((duty, index) => (
                <div className='description' key={index}>
                    <FaAngleDoubleRight className='icon' />
                    <p>{duty}</p>
                </div>
            ))}
            <button className='button2' onClick={routheChangeAbout}>
                more info
            </button>
        </article>
        ) : null
        )}
        </div>
        </div>
        </section>
    )
}

export default Jobs