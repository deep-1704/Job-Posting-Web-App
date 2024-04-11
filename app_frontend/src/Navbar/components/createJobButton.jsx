import {
    Button,
    Flex,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Textarea,
    Select
} from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { postJob } from '../../api';

function CreateJobButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [isLoading, setIsLoading] = useState(false)
    let [job, setJob] = useState({
        "job_id": null,
        "job_title": "job_title",
        "job_description": "job_description",
        "job_poster": "job_poster",
        "job_vacancy": "job_vacancy",
        "job_location": [],
        "job_salary": "job_salary",
        "job_type": "job_type",
        "job_date_posted": "job_date_posted",
        "job_deadline": "dd/mm/yyyy",
        "job_skills": [],
        "company": [
            "company_name",
            "relevant_link"
        ]
    })

    let [companyName, setCompanyName] = useState('')
    let [relevantLink, setRelevantLink] = useState('')  

    function validateJob() {
        if(job.job_title === '' || job.job_description === '' || job.job_vacancy === '' || job.job_location.length === 0 || job.job_salary === '' || job.job_type === '' || job.job_deadline === 'dd/mm/yyyy' || job.job_skills.length === 0 || companyName === '' || relevantLink === '') {
            alert('All fields are required')
            return false
        }
        return true
    }

    function handlePostJob() {
        setIsLoading(true)
        let date = new Date()
        let token = localStorage.getItem('token')
        setJob({...job, job_poster: localStorage.getItem('username')})
        setJob({...job, job_date_posted: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`})
        setJob({...job, company: [companyName, relevantLink]})

        if(!validateJob()){
            setIsLoading(false)
            return
        }

        postJob(job, token).then((response) => {
            if(response.status === 401) {
                alert('Session expired. Please login again')
                localStorage.removeItem('token')
                window.location.href = '/login'
            }
            if(response.status === 400) {
                alert('Error posting job')
            }
            if(response.status === 201) {
                alert('Job posted successfully')
                onClose()
            }
            setIsLoading(false)
        })
        
    }

    return (
        <>
            <Button onClick={onOpen} size='lg' variant='outline' colorScheme='green'>
                <Flex gap={3} alignItems='center'><AddIcon /> <Text>Create Job</Text></Flex>
            </Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Job</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack gap={5}>
                            <FormControl>
                                <FormLabel>Job Title</FormLabel>
                                <Input type='text' onChange={(e) => setJob({...job, job_title: e.target.value})}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea placeholder='Explain more about the job' onChange={(e) => setJob({...job, job_description: e.target.value})}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Company name</FormLabel>
                                <Input type='text' onChange={(e) => setCompanyName(e.target.value)}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Vacancy</FormLabel>
                                <Input type='number' onChange={(e) => setJob({...job, job_vacancy: e.target.value})}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Skills required (Keep comma seperated)</FormLabel>
                                <Input type='text' onChange={(e) => setJob({...job, job_skills: (e.target.value).split(',').map((item) => item.trim())})}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Locations (Keep comma seperated)</FormLabel>
                                <Input type='text' onChange={(e) => setJob({...job, job_location: (e.target.value).split(',').map((item) => item.trim())})}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Salary(PA)</FormLabel>
                                <Input type='number' onChange={(e) => setJob({...job, job_salary: e.target.value})}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Job type</FormLabel>
                                <Select placeholder='Select option' onChange={(e) => setJob({...job, job_type: e.target.value})}>
                                    <option value='option1'>Remote</option>
                                    <option value='option2'>Onsite</option>
                                    <option value='option3'>Hybrid</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Application Deadline</FormLabel>
                                <Input type='date' onChange={(e) => setJob({...job, job_deadline: e.target.value})}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Relevant link</FormLabel>
                                <Input type='text' onChange={(e) => setRelevantLink(e.target.value)}/>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='outline' colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button isLoading={isLoading} variant='solid' colorScheme='linkedin' onClick={() => handlePostJob()}>Post Job</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateJobButton;