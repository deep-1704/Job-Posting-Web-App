import { Stack, Text } from '@chakra-ui/react'
import Application from './components/application';
import { useState, useEffect } from 'react';

import { fetchApplicationsWithUsername } from '../../api';

function Applications() {
    let [applications, setApplications] = useState([]);

    useEffect(()=>{
        let token = localStorage.getItem('token')
        let username = localStorage.getItem('username')
        fetchApplicationsWithUsername(username, token)
            .then((response) => {
                if (response.status === 401) {
                    localStorage.removeItem('token')
                    alert('Session expired. Please login again.')
                    window.location.href = '/login'
                    return
                }
                if (response.status === 400) {
                    alert('Error fetching applications')
                    return
                }
                setApplications(response.applications)
            })
    },[])

    return (
        <div style={{ 'padding': '30px 30px 0 50px', 'width': '93%' }}>
            <Text fontSize='5xl' marginBottom='40px'>Applications</Text>
            <Stack>
                {applications.map((application) => {
                    return <Application application={application} key={application.job_id} />
                })}
            </Stack>
        </div>
    );
}

export default Applications;