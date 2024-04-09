import { Stack, Text } from '@chakra-ui/react'
import Job from './components/job';

function Jobs() {
    let jobs = [
        {
            "job_id": 0,
            "job_title": "Sr. Software Engineer",
            "job_location": ["Bangalore", "Hyderabad", "Chennai"],
            "job_salary": 1000000,
            "job_type": "Remote",
            "job_deadline": "17/04/2004",
            "company": [
                "Google",
                "https://www.google.com"
            ]
        },
        {
            "job_id": 1,
            "job_title": "Software Engineer",
            "job_location": ["Bangalore", "Hyderabad", "Chennai"],
            "job_salary": 800000,
            "job_type": "On-site",
            "job_deadline": "17/04/2004",
            "company": [
                "Microsoft",
                "https://www.microsoft.com"
            ]
        },
        {
            "job_id": 2,
            "job_title": "Hardware Engineer",
            "job_location": ["Bangalore", "Hyderabad", "Chennai"],
            "job_salary": 1600000,
            "job_type": "Hybrid",
            "job_deadline": "17/04/2004",
            "company": [
                "Amazon",
                "https://www.amazon.com"
            ]
        }
    ]
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