create table users
(
    username varchar(50) not null primary key,
    password varchar(100) not null,
    full_name varchar(100) not null,
    email varchar(100) not null,
    user_role varchar(20) not null,
    enabled boolean not null,
    phone varchar(20) not null,
    gender varchar(20) not null,
);

 create table job_seekers
(
    username varchar(50) not null primary key,
    brief_description varchar(500),
    skills varchar(1000),
    resume_link varchar(500),
    job_type_preference varchar(50),
    expected_salary varchar(50) ,
    year_of_graduation varchar(50),
    degree varchar(50) ,
    major varchar(50) ,
);

create table job_posters
(
    username varchar(50) not null primary key,
    company_name varchar(100) ,
    position varchar(100) ,
    linkedin_link varchar(200),
);

create table jobs
(
    job_id int not null primary key,
    job_title varchar(100) not null,
    job_description varchar(500) not null,
    job_poster varchar(50) not null,
    job_type varchar(50) not null,
    job_location varchar(50) not null,
    job_salary varchar(50) not null,
    job_post_date varchar(50) not null,
    job_deadline varchar(50) not null,
    job_vacancy int not null,
    relevant_company_link varchar(1000) not null,
);

create table job_skills
(
    job_id int not null,
    skill varchar(100) not null,
    primary key (job_id, skill)
);
create table user_skills
(
    username varchar(50) not null,
    skill varchar(100) not null,
    primary key (username, skill)
);
