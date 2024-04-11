const BASE_URL = "http://localhost:8080";

const fetchUser1 = async (username, token) => {
    const response = await fetch(`${BASE_URL}/api/user/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if (response.status !== 200) {
        return response.status;
    }

    const data = await response.json();
    return data;
}

const fetchUser = async (username, token) => {
    return {
        "username": "lemonade69",
        "full_name": "Deep Prajapati",
        "email": "dp1245516334@gmail.com",
        "phone": "7436005772",
        "gender": "Male",
        "brief_description": "I'm a coder",
        "skills": [
            "skill1",
            "skill2",
            "skill3"
        ],
        "resume_link": "https://google.com",
        "user_role": "job_seeker",
        "job_type_preference": "Onsite",
        "expected_salary": 6000000,
        "year_of_graduation": 2025,
        "degree": "Bachelor of Technology",
        "major": "Computer Science and Engineering"
    }
}

const updateUser1 = async (user, token) => {
    const response = await fetch(`${BASE_URL}/api/user/${user.user_role}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
    return response.status;
}

const updateUser = async (user, token) => {
    return 200;
}

const registerUser = async (user) => {
    return {
        'status': 201,
        'token': 'token'
    };
}

const registerUser1 = async (user) => {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })

    if (response.status !== 201) {
        return {
            'status': response.status
        }
    }

    let data = await response.json();
    return {
        'status': 201,
        'token': data.token
    };
}

const loginUser = async (user) => {
    return {
        'status': 200,
        'token': 'token'
    }
}

const loginUser1 = async (user) => {
    let response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })

    if (response.status !== 200) {
        return {
            'status': response.status
        }
    }

    let data = await response.json();
    return {
        'status': 200,
        'token': data.token
    }
}

const postApplication = async (application, token) => {
    return {
        'status': 201
    };
}

const postApplication1 = async (application, token) => {
    let response = fetch(`${BASE_URL}/api/application`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(application)
    })
    return {
        'status': response.status
    }
}

const fetchApplicationsWithJobId = async (jobId, token) => {
    return {
        'status': 200,
        'applications': [
            {
                "username": "lemonade69",
                "full_name": "Deep Prajapati",
                "email": "dp124551634@gmail.com",
                "phone": "7436005772",
                "gender": "Male",
                "brief_description": "brief_description",
                "skills": [
                    "skill1",
                    "skill2",
                    "skill3"
                ],
                "resume_link": "resume_link",
                "job_type_preference": "Remote",
                "expected_salary": "expected_salary",
                "year_of_graduation": "year_of_graduation",
                "degree": "degree",
                "major": "major",
                "application_date": "application_date"
            },
            {
                "username": "lemonade69",
                "full_name": "Deep Prajapati",
                "email": "dp124551634@gmail.com",
                "phone": "7436005772",
                "gender": "Male",
                "brief_description": "brief_description",
                "skills": [
                    "skill1",
                    "skill2",
                    "skill3"
                ],
                "resume_link": "resume_link",
                "job_type_preference": "Remote",
                "expected_salary": "expected_salary",
                "year_of_graduation": "year_of_graduation",
                "degree": "degree",
                "major": "major",
                "application_date": "application_date"
            },
            {
                "username": "lemonade69",
                "full_name": "Deep Prajapati",
                "email": "dp124551634@gmail.com",
                "phone": "7436005772",
                "gender": "Male",
                "brief_description": "brief_description",
                "skills": [
                    "skill1",
                    "skill2",
                    "skill3"
                ],
                "resume_link": "resume_link",
                "job_type_preference": "Remote",
                "expected_salary": "expected_salary",
                "year_of_graduation": "year_of_graduation",
                "degree": "degree",
                "major": "major",
                "application_date": "application_date"
            },
            {
                "username": "lemonade69",
                "full_name": "Deep Prajapati",
                "email": "dp124551634@gmail.com",
                "phone": "7436005772",
                "gender": "Male",
                "brief_description": "brief_description",
                "skills": [
                    "skill1",
                    "skill2",
                    "skill3"
                ],
                "resume_link": "resume_link",
                "job_type_preference": "Remote",
                "expected_salary": "expected_salary",
                "year_of_graduation": "year_of_graduation",
                "degree": "degree",
                "major": "major",
                "application_date": "application_date"
            },
        ]
    }
}

const fetchApplicationsWithJobId1 = async (jobId, token) => {
    let response = await fetch(`${BASE_URL}/api/application/job_id=${jobId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if (response.status !== 200) {
        return {
            'status': response.status
        }
    }

    let data = await response.json();
    return {
        'status': 200,
        'applications': data
    }
}

const deleteApplication = async (applicationId, token) => {
    return {
        'status': 204
    };
}

const deleteApplication1 = async (applicationId, token) => {
    let response = await fetch(`${BASE_URL}/api/application/${applicationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    return {
        'status': response.status
    }
}

const fetchApplicationsWithUsername = async (username, token) => {
    return {
        'status': 200,
        'applications': [
            {
                "job_id": 0,
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
                "job_id": 1,
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
                "job_id": 2,
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
    }
}

const fetchApplicationsWithUsername1 = async (username, token) => {
    let response = await fetch(`${BASE_URL}/api/application/username=${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if (response.status !== 200) {
        return {
            'status': response.status
        }
    }

    let data = await response.json();
    return {
        'status': 200,
        'applications': data
    }
}

const fetchRecruiterJobs = async (token) => {
    return {
        'status': 200,
        'jobs': [
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
    }
}

const fetchRecruiterJobs1 = async (token) => {
    let response = await fetch(`${BASE_URL}/api/job_poster/jobs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if (response.status !== 200) {
        return {
            'status': response.status
        }
    }

    let data = await response.json();
    return {
        'status': 200,
        'jobs': data
    }
}

const fetchJobSeekerJobs = async (token) => {
    return {
        'status': 200,
        'jobs': [
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
    }
}

const fetchJobSeekerJobs1 = async (token) => {
    let response = await fetch(`${BASE_URL}/api/job_seeker/jobs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if (response.status !== 200) {
        return {
            'status': response.status
        }
    }

    let data = await response.json();
    return {
        'status': 200,
        'jobs': data
    }
}

const postJob = async (job, token) => {
    return {
        'status': 201
    };
}

const postJob1 = async (job, token) => {
    let response = await fetch(`${BASE_URL}/api/jobs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(job)
    })

    return {
        'status': response.status
    }
}

const fetchJobWithId = async (jobId, token) => {
    return {
        'status': 200,
        'job': {
            "job_id": 0,
            "job_title": "Sr. Software Engineer",
            "job_description": "Zenskar is building new-age billing and pricing infrastructure for SaaS companies. As SaaS pricing evolves from vanilla subscription based models to more granular usage based models, billing and pricing infrastructure needs to be completely reimagined.",
            "job_poster": "job_poster",
            "job_vacancy": 100,
            "job_location": "Banglore",
            "job_salary": 1200000,
            "job_type": "On-site",
            "job_date_posted": "08/04/2024",
            "job_deadline": "17/04/2024",
            "company": [
                "Zenskar",
                "https://www.zenskar.com"
            ],
            "job_skills": ["C", "C++", "Java", "Python", "JavaScript", "React", "Node.js", "MongoDB", "SQL"]
        }
    }
}

const fetchJobWithId1 = async (jobId, token) => {
    let response = await fetch(`${BASE_URL}/api/jobs/${jobId}`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if(response.status !== 200){
        return {
            'status': response.status
        }
    }

    let data = await response.json();
    return {
        'status': 200,
        'job': data
    }
}

const deleteJob = async (jobId, token) => {
    return {
        'status': 204
    };
}

const deleteJob1 = async (jobId, token) => {
    let response = await fetch(`${BASE_URL}/api/jobs/${jobId}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return {
        'status': response.status
    }
}

const updateApplicationStatus = async (applicationId, status, token) => {
    return {
        'status': 204
    };   
}

const updateApplicationStatus1 = async (applicationId, status, token) => {
    let response = await fetch(`${BASE_URL}/api/application/${applicationId}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            'application_status': status
        })
    })

    return {
        'status': response.status
    }
}

export {
    fetchUser,
    updateUser,
    registerUser,
    loginUser,
    postApplication,
    fetchApplicationsWithJobId,
    deleteApplication,
    fetchApplicationsWithUsername,
    fetchRecruiterJobs,
    fetchJobSeekerJobs,
    postJob,
    fetchJobWithId,
    deleteJob,
    updateApplicationStatus
};