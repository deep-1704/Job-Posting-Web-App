import {
    Card,
    CardHeader,
    Avatar,
    Flex,
    Text,
    Stack,
    CardBody,
    Link,
    Tag,
    Spacer,
    Button,
    useDisclosure,
    Drawer,
} from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
import JobDrawer from './jobDetailsDrawer'
import companyIcon from '../assets/images/companyLogo.svg'
import DeleteJob from './deleteButton'
import JobApplications from './applicationsButton'

import { fetchJobWithId } from '../../api'

function JobPosterJobs({ job }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    let [jobObj, setJobObj] = React.useState({
        "job_id": "job_id",
        "job_title": "job_title",
        "company": ["company_name", "company_website"],
        "job_description": "job_description",
        "job_skills": ["skill1", "skill2"],
        "job_vacancy": 0,
        "job_location": ["job_location"],
        "job_salary": 0,
        "job_type": "job_type",
        "job_date_posted": "job_date_posted",
        "job_deadline": "job_deadline"
    });
    React.useEffect(() => {
        let token = localStorage.getItem("token");
        fetchJobWithId(job.job_id, token).then((response) => {
            if (response.status !== 200) {
                alert("Error fetching job");
                return;
            }
            setJobObj(response.job);
        })
    }, [])
    return (
        <>
            <Card backgroundColor='#bfdbdd'>
                <CardHeader>
                    <Flex alignItems='center' gap='3'>
                        <Avatar size='lg' name='Company' src={companyIcon} />
                        <Stack gap='0'>
                            <Text fontSize='3xl'>{jobObj.job_title}</Text>
                            <Link href={jobObj.company[1]} isExternal>
                                <Flex alignItems='center'>
                                    <Text fontSize='lg'>{jobObj.company[0]}</Text>
                                    <ExternalLinkIcon mx='2px' />
                                </Flex>
                            </Link>
                        </Stack>
                        <Spacer />
                        <Button ref={btnRef} onClick={onOpen} variant='ghost'>
                            <ChevronRightIcon boxSize={8} />
                        </Button>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Flex gap='3'>
                        {jobObj.job_location.map((location) => {
                            return <Tag key={location}>{location}</Tag>
                        })}
                        <Tag colorScheme='green'>{jobObj.job_salary / 100000}LPA</Tag>
                        <Tag>{jobObj.job_type}</Tag>
                        <Tag colorScheme='red'>Deadline: {jobObj.job_deadline}</Tag>
                        <Spacer />
                        <JobApplications jobId={job.job_id} totalApplications={jobObj.total_applications} />
                        <DeleteJob jobId={job.job_id} />
                    </Flex>
                </CardBody>
            </Card>

            {/* JobDrawer */}
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='md'
            ><JobDrawer job={jobObj} /></Drawer>
        </>
    );
}

export default JobPosterJobs;