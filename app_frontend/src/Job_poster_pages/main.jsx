import {
    Stack,
    Heading
} from '@chakra-ui/react'

import JobPosterJobs from './components/job';
import { useEffect, useState } from 'react';
import { fetchRecruiterJobs } from '../api';

function JobPosterDashboard() {
    let [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetchRecruiterJobs().then((response) => {
            if (response.status === 401) {
                localStorage.removeItem('token')
                alert('Session expired. Please login again.')
                window.location.href = '/login'
                return
            }
            if (response.status === 400) {
                alert('Error fetching jobs')
                return
            }
            setJobs(response.jobs)
        })
    },[])
    return (
        <Stack marginLeft='5%' marginTop='20px' marginRight='5%' gap={10}>
            <Heading as='h2' size='2xl' noOfLines={1} color='#045149'>
                Your Jobs
            </Heading>
            <Stack gap={5}>
                {jobs.map((job) => {
                    return <JobPosterJobs job={job} key={job.job_id} />
                })}
            </Stack>
        </Stack>
    );
}

export default JobPosterDashboard;