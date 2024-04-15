import {
    Flex,
    Text,
    Stack,
    Tag,
    Button,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Heading,
    useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

import { postApplication } from '../../../api'

function JobDrawer({ job }) {
    const toast = useToast()
    let [isLoading, setIsLoading] = useState(false)
    let [isDisabled, setIsDisabled] = useState(false)
    // let [job, setJob] = useState({
    //     "job_title": "job_title",
    //     "company": ["company_name", "company_website"],
    //     "job_description": "job_description",
    //     "job_skills": ["skill1", "skill2"],
    //     "job_vacancy": 0,
    //     "job_location": "job_location",
    //     "job_salary": 0,
    //     "job_type": "job_type",
    //     "job_date_posted": "job_date_posted",
    //     "job_deadline": "job_deadline"
    // })

    let handleApply = () => {
        setIsLoading(true)

        let dateObj = new Date()
        let token = localStorage.getItem('token');
        postApplication({
            job_id: job.job_id,
            application_status: 'Applied',
            application_date: dateObj.toISOString(),
        }, token).then((response) => {
            setIsLoading(false)
            if (response.status === 201) {
                toast({
                    title: 'Success!',
                    description: "Application submitted successfully",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    variant: 'left-accent',
                    position: 'top'
                })
                setIsDisabled(true);
            }
            else if (response.status === 401) {
                localStorage.removeItem('token')
                alert('Session expired. Please login again.')
                window.location.href = '/login'
            }
            else if(response.status === 400){
                toast({
                    title: 'Error!',
                    description: "Already applied",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    variant: 'left-accent',
                    position: 'top'
                })
            }
            else {
                toast({
                    title: 'Error!',
                    description: "Application submission failed",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    variant: 'left-accent',
                    position: 'top'
                })
            }
        })
    }

    // useEffect(() => {
    //     fetchJobWithId(jobId).then((response) => {
    //         if (response.status === 200) {
    //             setJob(response.job)
    //             return;
    //         }
    //         if (response.status === 401) {
    //             localStorage.removeItem('token')
    //             alert('Session expired. Please login again.')
    //             window.location.href = '/login'
    //             return;
    //         }
    //         if (response.status === 404) {
    //             alert('Job not found')
    //             return;
    //         }
    //     })
    // })

    return (
        <>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Heading>{job.company[0]}</Heading>
                    <Text>{job.job_title}</Text>
                </DrawerHeader>
                <DrawerBody>
                    <Stack gap={4}>
                        <Text fontSize='1xl'>{job.job_description}</Text>
                        <Stack>
                            <Text fontSize='2xl'>Skills Required:</Text>
                            <Flex gap={3} flexWrap='wrap'>
                                {job.job_skills.map((skill) => {
                                    return <Tag key={skill} colorScheme='gray'>{skill}</Tag>
                                })}
                            </Flex>
                        </Stack>
                        <Text fontSize='2xl'>Vacancy: {job.job_vacancy}</Text>
                        <Flex gap={3}>
                            <Text fontSize='2xl'>Location:</Text>
                            {job.job_location.map((location) => {
                                return <Tag key={location} colorScheme='blue'>{location}</Tag>
                            })}
                        </Flex>
                        <Flex gap={3}>
                            <Text fontSize='2xl'>Salary:</Text>
                            <Tag colorScheme='green'>{job.job_salary / 100000} LPA</Tag>
                        </Flex>
                        <Text fontSize='2xl'>Type: {job.job_type}</Text>
                        <Flex gap={3}>
                            <Text fontSize='2xl'>Posted on:</Text>
                            <Tag colorScheme='blue'>{job.job_date_posted}</Tag>
                        </Flex>
                        <Flex gap={3}>
                            <Text fontSize='2xl'>Deadline:</Text>
                            <Tag colorScheme='red'>{job.job_deadline}</Tag>
                        </Flex>
                        <Button
                            variant='outline'
                            colorScheme='blue'
                            size='lg'
                            marginTop='10px'
                            isLoading={isLoading}
                            isDisabled={isDisabled}
                            onClick={() =>
                                handleApply()
                            }>Apply</Button>
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </>
    );
}

export default JobDrawer;