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
import companyIcon from '../../assets/images/companyLogo.svg'

import { fetchJobWithId } from '../../../api'

function Job({ job }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    let [myJob, setMyJob] = React.useState({
        "job_title": "job_title",
        "company": ["company_name", "company_website"],
        "job_description": "job_description",
        "job_skills": ["skill1", "skill2"],
        "job_vacancy": 0,
        "job_location": "job_location",
        "job_salary": 0,
        "job_type": "job_type",
        "job_date_posted": "job_date_posted",
        "job_deadline": "job_deadline"
    })

    React.useEffect(() => {
        let token = localStorage.getItem('token')
        fetchJobWithId(job.job_id, token).then((response) => {
            if (response.status === 200) {
                setMyJob(response.job)
                return;
            }
            if (response.status === 401) {
                localStorage.removeItem('token')
                alert('Session expired. Please login again.')
                window.location.href = '/login'
                return;
            }
            if (response.status === 404) {
                alert('Job not found')
                return;
            }
        })
    }, [])

    // console.log(job);
    return (
        <>
            <Card backgroundColor='#bfdbdd'>
                <CardHeader>
                    <Flex alignItems='center' gap='3'>
                        <Avatar size='lg' name='Company' src={companyIcon} />
                        <Stack gap='0'>
                            <Text fontSize='3xl'>{job.job_title}</Text>
                            <Link href={job.company[1]} isExternal>
                                <Flex alignItems='center'>
                                    <Text fontSize='lg'>{job.company[0]}</Text>
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
                        {job.job_location.map((location) => {
                            return <Tag key={location}>{location}</Tag>
                        })}
                        <Tag colorScheme='green'>{job.job_salary / 100000}LPA</Tag>
                        <Tag>{job.job_type}</Tag>
                        <Tag colorScheme='red'>Deadline: {job.job_deadline}</Tag>
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
            ><JobDrawer job={myJob} /></Drawer>
        </>
    );
}

export default Job;