import {
    Stack,
    Heading
} from '@chakra-ui/react'

import JobPosterJobs from './components/job';

function JobPosterDashboard() {
    let jobs = [
        {
            "job_id": 0,
            "job_title": "Sr. Software Engineer",
            "job_description": "Zenskar is building new-age billing and pricing infrastructure for SaaS companies. As SaaS pricing evolves from vanilla subscription based models to more granular usage based models, billing and pricing infrastructure needs to be completely reimagined.",
            "job_poster": "job_poster",
            "job_vacancy": 20,
            "job_location": ["Bangalore", "Delhi", "Mumbai"],
            "job_salary": 2000000,
            "job_type": "Remote",
            "job_date_posted": "09/04/2024",
            "job_deadline": "17/04/2024",
            "company": [
                "Google",
                "https://www.google.com"
            ],
            "total_applications": 25
        },
        {
            "job_id": 0,
            "job_title": "Sr. Software Engineer",
            "job_description": "Zenskar is building new-age billing and pricing infrastructure for SaaS companies. As SaaS pricing evolves from vanilla subscription based models to more granular usage based models, billing and pricing infrastructure needs to be completely reimagined.",
            "job_poster": "job_poster",
            "job_vacancy": 20,
            "job_location": ["Bangalore", "Delhi", "Mumbai"],
            "job_salary": 2000000,
            "job_type": "Remote",
            "job_date_posted": "09/04/2024",
            "job_deadline": "17/04/2024",
            "company": [
                "Google",
                "https://www.google.com"
            ],
            "total_applications": 25
        },
        {
            "job_id": 0,
            "job_title": "Sr. Software Engineer",
            "job_description": "Zenskar is building new-age billing and pricing infrastructure for SaaS companies. As SaaS pricing evolves from vanilla subscription based models to more granular usage based models, billing and pricing infrastructure needs to be completely reimagined.",
            "job_poster": "job_poster",
            "job_vacancy": 20,
            "job_location": ["Bangalore", "Delhi", "Mumbai"],
            "job_salary": 2000000,
            "job_type": "Remote",
            "job_date_posted": "09/04/2024",
            "job_deadline": "17/04/2024",
            "company": [
                "Google",
                "https://www.google.com"
            ],
            "total_applications": 25
        }
    ]
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