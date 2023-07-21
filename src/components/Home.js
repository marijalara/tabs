import React, {useState, useEffect} from 'react';
import Cards from './Cards';
import Jobs from './Jobs';
import axios from 'axios';
import Header from './Header';

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
            <Header />
            <div className='service-container'>
            <header className='head2'>
                Services
                <div className='underline2'></div>
            </header>
            <Cards />
            </div>
            <header className='head3'>
                Expierence
                <div className='underline'></div>
            </header>
            {jobs.length > 0 && <Jobs jobs={jobs} />}
        </div>
    )
}

export default Home