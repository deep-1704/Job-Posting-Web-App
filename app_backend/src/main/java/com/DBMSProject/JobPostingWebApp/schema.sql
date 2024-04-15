create user c##jobpostingwebapp identified by jobpostingwebapp;
grant dba to c##jobpostingwebapp;

-- drop user c##jobpostingwebapp cascade;

   set autocommit on;
create sequence job_id_seq start with 1 increment by 1;
/
create sequence application_id_seq start with 1 increment by 1;
/
-- drop table users;

create table users (
	username  varchar(50) not null primary key,
	password  varchar(100) not null,
	full_name varchar(100) not null,
	email     varchar(100) not null,
	user_role varchar(20) not null,
	enabled   varchar(1) not null, -- may be removed later
	phone     varchar(20) not null,
	gender    varchar(20) not null
);

-- drop table job_seekers;
-- drop trigger trg_update_cascade_job_seekers;

create table job_seekers (
	username            varchar(50) not null primary key,
	brief_description   varchar(500),
	resume_link         varchar(500),
	job_type_preference varchar(50),
	expected_salary     varchar(50),
	year_of_graduation  varchar(50),
	degree              varchar(50),
	major               varchar(50)
);

alter table job_seekers
	add constraint job_seekers_users_username_fk foreign key ( username )
		references users ( username )
			on delete cascade;

--drop table job_posters;

create table job_posters (
	username      varchar(50) not null primary key,
	company_name  varchar(100),
	position      varchar(100),
	linkedin_link varchar(200)
);

alter table job_posters
	add constraint job_posters_users_username_fk foreign key ( username )
		references users ( username )
			on delete cascade;

--drop table jobs;

create table jobs (
	job_id                int not null primary key,
	job_title             varchar(100) not null,
	job_description       varchar(500) not null,
	job_poster            varchar(50) not null,
	job_type              varchar(50) not null,
	job_salary            varchar(50) not null,
	job_post_date         varchar(50) not null,
	job_deadline          varchar(50) not null,
	job_vacancy           int not null,
	relevant_company_link varchar(1000) not null
);

create table job_locations (
	job_id   int not null,
	location varchar(1000) not null,
	primary key ( job_id,
	              location )
);

alter table job_locations
	add constraint job_locations_job_id_fk foreign key ( job_id )
		references jobs ( job_id )
			on delete cascade;
/



-- create sequence job_id_seq start with 1 increment by 1;

-- drop table job_skills;

create table job_skills (
	job_id int not null,
	skill  varchar(1000) not null,
	primary key ( job_id,
	              skill )
);

alter table job_skills
	add constraint job_skills_jobs_job_id_fk foreign key ( job_id )
		references jobs ( job_id )
			on delete cascade;
/




--drop table user_skills;

create table user_skills (
	username varchar(50) not null,
	skill    varchar(1000) not null,
	primary key ( username,
	              skill )
);

alter table user_skills
	add constraint user_skills_users_username_fk foreign key ( username )
		references users ( username )
			on delete cascade;
/



--drop table job_applications;

create table job_applications (
	application_id     int not null primary key,
	job_id             int not null,
	username           varchar(50) not null,
	application_date   varchar(50) not null,
	application_status varchar(50) not null
);

-- create sequence application_id_seq start with 1 increment by 1;

alter table job_applications
	add constraint job_applications_jobs_job_id_fk foreign key ( job_id )
		references jobs ( job_id )
			on delete cascade;
/

alter table job_applications
	add constraint job_applications_users_username_fk foreign key ( username )
		references users ( username )
			on delete cascade;
/



--------------------------
create or replace trigger trg_update_cascade_job_seekers after
	update of username on users
	for each row
begin
	update job_seekers
	   set
		username = :new.username
	 where username = :old.username;
end;
/

create or replace trigger trg_update_cascade_job_posters after
	update of username on users
	for each row
begin
	update job_posters
	   set
		username = :new.username
	 where username = :old.username;
end;
/

create or replace trigger trg_insert_users after
	insert on users
	for each row
begin
	if ( :new.user_role = 'job_seeker' ) then
		insert into job_seekers (
			username,
			brief_description,
			resume_link,
			job_type_preference,
			expected_salary,
			year_of_graduation,
			degree,
			major
		) values (
			:new.username,
			null,
			null,
			null,
			null,
			null,
			null,
			null
		);
	else
		insert into job_posters (
			username,
			company_name,
			position,
			linkedin_link
		) values (
			:new.username,
			null,
			null,
			null
		);
	end if;
end;
/

create or replace trigger trg_update_cascade_job_locations after
	update of job_id on jobs
	for each row
begin
	update job_locations
	   set
		job_id = :new.job_id
	 where job_id = :old.job_id;
end;
/

create or replace trigger trg_update_cascade_job_skills after
	update of job_id on jobs
	for each row
begin
	update job_skills
	   set
		job_id = :new.job_id
	 where job_id = :old.job_id;
end;
/

create or replace trigger trg_update_cascade_user_skills after
	update of username on users
	for each row
begin
	update user_skills
	   set
		username = :new.username
	 where username = :old.username;
end;
/

create or replace trigger trg_update_cascade_job_applications_job_id after
	update of job_id on jobs
	for each row
begin
	update job_applications
	   set
		job_id = :new.job_id
	 where job_id = :old.job_id;
end;
/

create or replace trigger trg_update_cascade_job_applications_username after
	update of username on users
	for each row
begin
	update job_applications
	   set
		username = :new.username
	 where username = :old.username;
end;
/

select *
  from users;
select *
  from job_seekers;
select *
  from user_skills;
select *
  from job_posters;
select *
  from jobs;
select *
  from job_applications;