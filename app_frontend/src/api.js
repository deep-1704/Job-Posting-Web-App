const BASE_URL = 'http://localhost:8080';

const fetchUser = async (username, token) => {
  const response = await fetch(`${BASE_URL}/api/user/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return {
      status: response.status,
    };
  }

  const data = await response.json();
  return {
    status: 200,
    data: data,
  };
};

const updateUser = async (user, token) => {
  const response = await fetch(`${BASE_URL}/api/user/${user.user_role}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });
  return {
    status: response.status,
  };
};

const registerUser = async (user) => {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.status !== 201) {
    return {
      status: response.status,
    };
  }

  let data = await response.json();
  return {
    status: 201,
    token: data.token.split(' ')[1],
  };
};

const loginUser = async (user) => {
  let response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.status !== 200) {
    return {
      status: response.status,
    };
  }

  let data = await response.json();
  return {
    status: 200,
    token: data.token.split(' ')[1],
  };
};

const postApplication = async (application, token) => {
  let response = await fetch(`${BASE_URL}/api/application`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(application),
  });
  return {
    status: response.status,
  };
};

const fetchApplicationsWithJobId = async (jobId, token) => {
  let response = await fetch(`${BASE_URL}/api/application?job_id=${jobId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return {
      status: response.status,
    };
  }

  let data = await response.json();
  return {
    status: 200,
    applications: data,
  };
};

const deleteApplication = async (applicationId, token) => {
  let response = await fetch(`${BASE_URL}/api/application/${applicationId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    status: response.status,
  };
};

const fetchApplicationsWithUsername = async (username, token) => {
  let response = await fetch(`${BASE_URL}/api/application/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return {
      status: response.status,
    };
  }

  let data = await response.json();
  return {
    status: 200,
    applications: data,
  };
};

const fetchRecruiterJobs = async (token) => {
  let response = await fetch(`${BASE_URL}/api/user/job_poster/jobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return {
      status: response.status,
    };
  }

  let data = await response.json();
  return {
    status: 200,
    jobs: data,
  };
};

const fetchJobSeekerJobs = async (token) => {
  let response = await fetch(`${BASE_URL}/api/user/job_seeker/jobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return {
      status: response.status,
    };
  }

  let data = await response.json();
  return {
    status: 200,
    jobs: data,
  };
};

const postJob = async (job, token) => {
  let response = await fetch(`${BASE_URL}/api/jobs/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(job),
  });

  return {
    status: response.status,
  };
};

const fetchJobWithId = async (jobId, token) => {
  let response = await fetch(`${BASE_URL}/api/jobs/${jobId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return {
      status: response.status,
    };
  }

  let data = await response.json();
  return {
    status: 200,
    job: data,
  };
};

const deleteJob = async (jobId, token) => {
  let response = await fetch(`${BASE_URL}/api/jobs/${jobId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    status: response.status,
  };
};

const updateApplicationStatus = async (applicationId, status, token) => {
  let response = await fetch(`${BASE_URL}/api/application/${applicationId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: status,
  });

  return {
    status: response.status,
  };
};

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
  updateApplicationStatus,
};
