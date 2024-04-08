import { Stack, Text } from '@chakra-ui/react'
import Application from './components/application';

function Applications() {
    let applications = [
        {
            "job_id":0,
            "job_title": "Sr. Software Engineer",
            "job_location": "Bangalore",
            "job_type": "On-site",
            "job_deadline": "17/04/2024",
            "company": [
                "Google",
                "http://google.com"
            ],
            "application_date": "08/04/2024",
            "application_status": "Applied"
        },
        {
            "job_id":1,
            "job_title": "Jr. Software Engineer",
            "job_location": "Bangalore",
            "job_type": "Remote",
            "job_deadline": "17/04/2024",
            "company": [
                "Google",
                "http://google.com"
            ],
            "application_date": "08/04/2024",
            "application_status": "Shortlisted"
        },
        {
            "job_id":2,
            "job_title": "Software Engineer",
            "job_location": "Bangalore",
            "job_type": "On-site",
            "job_deadline": "17/04/2024",
            "company": [
                "Google",
                "http://google.com"
            ],
            "application_date": "08/04/2024",
            "application_status": "Rejected"
        }
    ]
    return (
        <>
            <div style={{ 'padding': '30px 30px 0 50px', 'width':'93%' }}>
                <Text fontSize='5xl' marginBottom='40px'>Applications</Text>
                <Stack>
                    {applications.map((application) => {
                        return <Application application={application} key={application.job_id} />
                    })}
                </Stack>    
            </div>
        </>
    );
}

export default Applications;