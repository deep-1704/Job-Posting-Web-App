import { Stack, Text } from '@chakra-ui/react'
import Job from './components/job';

import { useState, useEffect } from 'react';

import { fetchJobSeekerJobs } from '../../api';

function Jobs() {
    let [jobs, setJobs] =  useState(null)

    useEffect(() => {
        fetchJobSeekerJobs().then((response) => {
            if(response.status === 401){
                alert('Session expired. Please login again.')
                window.location.href = '/login'
            }
            if(response.status === 400){
                alert('Error fetching jobs')
                return;
            }
            setJobs(response.jobs)
        })
    })
    
    if(jobs === null) return (<></>)

    return (
        <div style={{ 'padding': '30px 30px 0 50px', 'width': '93%' }}>
            <Text fontSize='5xl' marginBottom='40px'>Search for Jobs</Text>
            <Stack gap={5}>
                {jobs.map((job) => {
                    return <Job job={job} key={job.job_id} />
                })}
            </Stack>
        </div>
    );
}

export default Jobs;