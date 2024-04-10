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
import { useEffect, useState } from 'react'

import { postApplication } from '../../../api'
import { fetchJobWithId } from '../../../api'

function JobDrawer({ jobId }) {
    const toast = useToast()
    let [isLoading, setIsLoading] = useState(false)
    let [isDisabled, setIsDisabled] = useState(false)
    let [job, setJob] = useState({})

    let handleApply = () => {
        setIsLoading(true)

        let dateObj = new Date()
        postApplication({
            job_id: jobId,
            application_status: 'Applied',
            application_date: `${dateObj.getFullYear()}/${dateObj.getMonth()}/${dateObj.getDate()}`,
        }).then((response) => {
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
            else if(response.status === 401){
                localStorage.removeItem('token')
                alert('Session expired. Please login again.')
                window.location.href = '/login'
            }
            else{
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

    useEffect(()=>{
        fetchJobWithId(jobId).then((response) => {
            if(response.status === 200){
                setJob(response.job)
                return;
            }
            if(response.status === 401){
                localStorage.removeItem('token')
                alert('Session expired. Please login again.')
                window.location.href = '/login'
                return;
            }
            if(response.status === 404){
                alert('Job not found')
                return;
            }
        })
    })

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
                        <Text fontSize='2xl'>Location: {job.job_location}</Text>
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