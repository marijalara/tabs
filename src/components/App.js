import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import Jobs from './Jobs';

const url='https://course-api.com/react-tabs-project'

const App = () => {
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
            {jobs.map((job) => (
                <Jobs job={job}/>
            ))}
        </div>
    )
}

export default App