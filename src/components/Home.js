import React, {useState, useEffect} from 'react';
import Cards from './Cards';
import Jobs from './Jobs';
import axios from 'axios';

const url='https://course-api.com/react-tabs-project'

const Home = () => {
    const [jobs, setJobs]=useState([])

    const fetchJobs=async () => {
        const response= await axios.get(url)
        const jobsData=response.data
        setJobs(jobsData)
    }
    useEffect(() => {
        fetchJobs()
    },[])

    return (
        <div>
            <header className='head2'>
                Services
                <div className='underline2'></div>
            </header>
            <Cards />
            <header className='head3'>
                Expierence
                <div className='underline'></div>
            </header>
            {jobs.map((job, index) => (
                <Jobs job={job} index={index}/>
            ))}
        </div>
    )
}

export default Home