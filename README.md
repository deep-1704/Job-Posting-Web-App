# OpenSkill

OpenSkill is a job posting and application web application designed to connect employers with potential employees efficiently and effectively.

## Features

- **User Authentication:** Secured login and registration system for jobPoster and jobSeeker through JWT.
- **JobPosting:** jobPosters can post, edit, and delete their jobs. Also can change status of application submitted.
- **JobSeeking:** jobSeekers can explore relevant jobs and apply jobs in a user-friendly interface.
- **Interactive UI:** Edit and delete functionalities are easily accessible through interactive icons on each Application card.

## Authors

- [@Deep Prajapati](https://github.com/deep-1704)
- [@Ravi Kumar](https://github.com/kravi770)
- [@S.S.V.Raghava](https://github.com/raghava7129)

## Technologies Used

- **Frontend:** React, Chakra UI
- **Backend:** Java with Spring Boot
- **Database:** Oracle SQL
- **SQL Driver:** OJDBC

## Architecture

OpenSkill utilizes a three-tier client-server architecture in Spring Boot, which includes:

- **Controller Layer:** Handles HTTP requests and responds with the appropriate HTTP responses.
- **Service Layer:** Contains the business logic necessary to fulfill requests.
- **DAO (Data Access Object) Layer:** Manages database interactions using Oracle SQL to perform CRUD operations.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

`PORT` -- [Optional] Port on which to run the backend server (default is 8080)

`DB_URL` -- Database url where it is running

`DB_USERNAME` -- Username

`DB_PASSWORD` -- Password

`secretKey` -- Secret key for JWT algorithm (You can add any random string)

`app.tokenExpiration` -- Token expiration time in milliseconds.

## Run Locally

#### Before you start:

- Ensure Node.js, MongoDB, and npm/yarn are installed.

#### Steps:

Clone the project:

```bash
clone  https://github.com/kravi770/Job-Posting-Web-App.git
```

Go to the project directory:

```bash
cd Job-Posting-Web-App
```

### Backend Setup

Navigate to the backend directory:

```bash
cd app_backend
```
Add OJDBC11.jar file as module in file structure.
Open this app_backend in Intellij/Eclipse or any IDE. And run :
```bash
app_backend\src\main\java\com\DBMSProject\JobPostingWebApp\JobPostingWebAppApplication.java
```

### Database Setup

Run below script in Oracle SQL developer or any suitable IDE.
```bash
Job-Posting-Web-App\app_backend\src\main\java\com\DBMSProject\JobPostingWebApp\schema.sql
```
To run sql file:
```bash
@ Complete file path\schema.sql
```

### Frontend Setup

In a new terminal, navigate to the frontend directory:

```bash
cd ../app_frontend
npm install
npm run start
```

Your app should now be running!

## Backend API Endpoints

Below are the HTTP routes available in the AdHub platform backend. All endpoints are prefixed with `/api`.

### Authentication

**Login:** `POST /api/auth/login`

- **Description:**
  - Authenticates a user and returns an access token.
- **Request Body:**
  ```json
  {
    "username": "username",
    "password": "password"
  }
- **Response:**
  - If user does not exist:
    - Status: 404
  - If password is incorrect:
    - Status: 400
  - If successful:
    - Status: 200
  - Body:
  ```json
    {
      "token": "token"
    }

**Register:** `POST /api/auth/register`

- **Description:**
  - Registers a new user and returns an access token.
- **Request Body:**
  ```json
  {
    "username": "username",
    "password": "password",
    "full_name": "full_name",
    "email": "email",
    "phone": "phone",
    "gender": "gender",
    "user_role": "user_role"
  }
  ```
- **Response:**
  - If user already exists:
    - Status: 400
  - If successful:
    - Status: 201
    - Body:
      ```json
      {
        "token": "token"
      }

### Update Users Profile
      
**Update Job Poster Profile:** `PUT /api/user/job_poster`

- **Description:**
  - Updates the profile of a job poster.
- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
  - **Body:**
    ```json
    {
      "full_name": "full_name",
      "email": "email",
      "phone": "phone",
      "company_name": "company_name",
      "position": "position",
      "linkedIn_url": "linkedIn_url"
    }
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If successful:
    - Status: 200

**Update Job Seeker Profile:** `PUT /api/user/job_seeker`

- **Description:**
  - Updates the profile of a job seeker.
- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
  - **Body:**
    ```json
    {
      "full_name": "full_name",
      "email": "email",
      "phone": "phone",
      "gender": "gender",
      "brief_description": "brief_description",
      "skills": ["skill1", "skill2", "skill3"],
      "resume_link": "resume_link",
      "user_role": "job_seeker",
      "job_type_preference": "job_type_preference",
      "expected_salary": "expected_salary",
      "year_of_graduation": "year_of_graduation",
      "degree": "degree",
      "major": "major"
    }
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If successful:
    - Status: 200

### Applications

**Submit Job Application:** `POST /api/application`

- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
  - **Body:**
    ```json
    {
      "job_id": "job_id",
      "application_date": "dd/mm/yyyy",
      "application_status": "application_status"
    }
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If already applied:
    - Status: 400
  - If successful:
    - Status: 201

**View Applications by Job ID:** `GET /api/application?job_id=job_id`

- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If user is not job poster:
    - Status: 400
  - If successful:
    - Status: 200
    - Body:
    ```json
    [
      {
        "username": "username",
        "full_name": "full_name",
        "email": "email",
        "phone": "phone",
        "gender": "gender",
        "brief_description": "brief_description",
        "skills": ["skill1", "skill2", "skill3"],
        "resume_link": "resume_link",
        "job_type_preference": "job_type_preference",
        "expected_salary": "expected_salary",
        "year_of_graduation": "year_of_graduation",
        "degree": "degree",
        "major": "major",
        "application_date": "application_date"
      }
    ]
    ```

**Delete Job Application:** `DELETE /api/application/:application_id`

- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If user is not job seeker:
    - Status: 400
  - If successful:
    - Status: 204

**View Job Applications by User:** `GET /api/application/:username`

- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If user is not job seeker:
    - Status: 400
  - If successful:
    - Status: 200
    - Body:
    ```json
    [
      {
        "job_id": "job_id",
        "job_title": "job_title",
        "job_location": "job_location",
        "job_type": "job_type",
        "job_deadline": "dd/mm/yyyy",
        "company": ["company_name", "relevant_link"],
        "application_date": "application_date",
        "application_status": "application_status"
      }
    ]
    ```

**Update Job Application Status:** `PUT /api/application/:application_id`

- **Description:**
  - Update the status of a job application.
- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
  - **Body:**
    ```json
    {
      "application_status": "application_status"
    }
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If user is not job poster:
    - Status: 400
  - If successful:
    - Status: 200

### Jobs

**Create New Job Listing:** `POST /api/jobs`

- **Description:**
  - Create a new job listing.
- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
  - **Body:**
    ```json
    {
      "job_id": "job_id",
      "job_title": "job_title",
      "job_description": "job_description",
      "job_poster": "job_poster",
      "job_vacancy": "job_vacancy",
      "job_location": "job_location",
      "job_skills": ["skill1", "skill2", "skill3"],
      "job_salary": "job_salary",
      "job_type": "job_type",
      "job_date_posted": "dd/mm/yyyy",
      "job_deadline": "dd/mm/yyyy",
      "company": ["company_name", "relevant_link"]
    }
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If user not job poster:
    - Status: 400
  - If successful:
    - Status: 201

**Retrieve Job Details:** `GET /api/jobs/:job_id`

- **Description:**
  - Returns the job object with the specified job_id.
- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If job does not exist:
    - Status: 404
  - If successful:
    - Status: 200
    - **Body:**
      ```json
      {
        "job_id": "job_id",
        "job_title": "job_title",
        "job_description": "job_description",
        "job_poster": "job_poster",
        "job_vacancy": "job_vacancy",
        "job_location": "job_location",
        "job_salary": "job_salary",
        "job_type": "job_type",
        "job_skills": ["skill1", "skill2", "skill3"],
        "job_date_posted": "dd/mm/yyyy",
        "job_deadline": "dd/mm/yyyy",
        "company": ["company_name", "relevant_link"]
      }
      ```

**List Jobs Posted by Job Poster:** `GET /api/user/job_poster/jobs`

- **Description:**
  - Returns a list of all jobs posted by the job_poster.
- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If user not job poster:
    - Status: 400
  - If successful:
    - Status: 200
    - **Body:**
      ```json
      [
        "array of job_objects"
      ]
      ```

**List Jobs Matching Job Seeker's Skills:** `GET /api/user/job_seeker/jobs`

- **Description:**
  - Returns a list of all jobs where any one of the user's skills matches any one of the job's required skills.
- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If user not job seeker:
    - Status: 400
  - If successful:
    - Status: 200
    - **Body:**
      ```json
      [
        "array of job_objects"
      ]
      ```

**Delete Job Listing:** `DELETE /api/jobs/:job_id`

- **Description:**
  - Delete a specific job listing.
- **Request:**
  - **Headers:**
    ```plaintext
    Authorization: Bearer [token]
    ```
- **Response:**
  - If unauthorized:
    - Status: 401
  - If user not job poster:
    - Status: 400
  - If successful:
    - Status: 204