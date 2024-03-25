-- create user c##jobpostingwebapp identified by jobpostingwebapp;
-- grant dba to c##jobpostingwebapp;

drop table if exists users;

create table users(
    username varchar(50) not null primary key,
    password varchar(100) not null,
    full_name varchar(100) not null,
    email varchar(100) not null,
    user_role varchar(20) not null,
    enabled boolean not null,
    phone varchar(20) not null,
    gender varchar(20) not null
);

drop table if exists job_seekers;

create table job_seekers(
    username varchar(50) not null primary key,
    brief_description varchar(500),
    resume_link varchar(500),
    job_type_preference varchar(50),
    expected_salary varchar(50) ,
    year_of_graduation varchar(50),
    degree varchar(50) ,
    major varchar(50)
);

alter table job_seekers
add constraint job_seekers_users_username_fk
foreign key (username) references users (username)
on DELETE CASCADE;

CREATE OR REPLACE TRIGGER trg_update_cascade_job_seekers
AFTER UPDATE OF username ON users
FOR EACH ROW
BEGIN
    UPDATE job_seekers
    SET username = :new.username
    WHERE username = :old.username;
END;

drop table if exists job_posters;

create table job_posters(
    username varchar(50) not null primary key,
    company_name varchar(100) ,
    position varchar(100) ,
    linkedin_link varchar(200)
);

alter table job_posters
add constraint job_posters_users_username_fk
foreign key (username) references users (username)
on DELETE CASCADE;

CREATE OR REPLACE TRIGGER trg_update_cascade_job_posters
AFTER UPDATE OF username ON users
FOR EACH ROW
BEGIN
    UPDATE job_posters
    SET username = :new.username
    WHERE username = :old.username;
END;

drop table if exists jobs;

create table jobs(
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
    relevant_company_link varchar(1000) not null
);

create sequence job_id_seq start with 1 increment by 1;

drop table if exists job_skills;

create table job_skills(
    job_id int not null,
    skill varchar(1000) not null,
    primary key (job_id, skill)
);

alter table job_skills
add constraint job_skills_jobs_job_id_fk
foreign key (job_id) references jobs (job_id)
on DELETE CASCADE;

create or replace trigger trg_update_cascade_job_skills
after update of job_id on jobs
for each row
begin
    update job_skills
    set job_id = :new.job_id
    where job_id = :old.job_id;
end;


drop table if exists user_skills;

create table user_skills(
    username varchar(50) not null,
    skill varchar(1000) not null,
    primary key (username, skill)
);

alter table user_skills
add constraint user_skills_users_username_fk
foreign key (username) references users (username)
on DELETE CASCADE;

create or replace trigger trg_update_cascade_user_skills
after update of username on users
for each row
begin
    update user_skills
    set username = :new.username
    where username = :old.username;
end;


drop table if exists job_applications;

create table job_applications(
    application_id int not null primary key,
    job_id int not null,
    username VARCHAR(50) not null,
    application_date varchar(50) not null,
    application_status varchar(50) not null
);

create sequence application_id_seq start with 1 increment by 1;

alter TABLE job_applications
add constraint job_applications_jobs_job_id_fk
foreign key (job_id) references jobs (job_id)
on DELETE CASCADE;

alter TABLE job_applications
add constraint job_applications_users_username_fk
foreign key (username) references users (username)
on DELETE CASCADE;

create or replace trigger trg_update_cascade_job_applications_job_id
after update of job_id on jobs
for each row
begin
    update job_applications
    set job_id = :new.job_id
    where job_id = :old.job_id;
end;

create or replace trigger trg_update_cascade_job_applications_username
after update of username on users
for each row
begin
    update job_applications
    set username = :new.username
    where username = :old.username;
end;



