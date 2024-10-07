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

    let [job_title, setJobTitle] = useState('')
    let [jobDescription, setJobDescription] = useState('')
    let [jobVacancy, setJobVacancy] = useState('')
    let [jobLocation, setJobLocation] = useState('')
    let [jobSalary, setJobSalary] = useState('')
    let [jobType, setJobType] = useState('')
    let [jobDeadline, setJobDeadline] = useState('')
    let [jobSkills, setJobSkills] = useState('')
    let [companyName, setCompanyName] = useState('')
    let [relevantLink, setRelevantLink] = useState('')

    function validateJob(job) {
        if (job.job_title === '' || job.job_description === '' || job.job_vacancy === '' || job.job_location.length === 0 || job.job_salary === '' || job.job_type === '' || job.job_deadline === 'dd/mm/yyyy' || job.job_skills.length === 0 || companyName === '' || relevantLink === '') {
            alert('All fields are required')
            return false
        }
        return true
    }

    function handlePostJob() {
        setIsLoading(true)
        let date = new Date()
        let token = localStorage.getItem('token')
        let username = localStorage.getItem('username')
        let job = {
            job_id: null,
            job_poster: username,
            job_title: job_title,
            job_description: jobDescription,
            job_vacancy: jobVacancy,
            job_location: jobLocation,
            job_salary: jobSalary,
            job_type: jobType,
            job_deadline: jobDeadline,
            job_skills: jobSkills,
            company: [
                companyName,
                relevantLink
            ],
            job_date_posted: date.toISOString().slice(0, 10)
        }

        if (!validateJob(job)) {
            setIsLoading(false)
            return
        }

        console.log(job)

        postJob(job, token).then((response) => {
            if (response.status === 401) {
                alert('Session expired. Please login again')
                localStorage.removeItem('token')
                window.location.href = '/login'
            }
            if (response.status === 400) {
                alert('Error posting job')
            }
            if (response.status === 201) {
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
                                <Input type='text' onChange={(e) => setJobTitle(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea placeholder='Explain more about the job' onChange={(e) => setJobDescription(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Company name</FormLabel>
                                <Input type='text' onChange={(e) => setCompanyName(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Vacancy</FormLabel>
                                <Input type='number' onChange={(e) => setJobVacancy(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Skills required (Keep comma seperated)</FormLabel>
                                <Input type='text' onChange={(e) => setJobSkills(e.target.value.split(',').map((item) => item.trim()))} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Locations (Keep comma seperated)</FormLabel>
                                <Input type='text' onChange={(e) => setJobLocation(e.target.value.split(',').map((item) => item.trim()))} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Salary(PA)</FormLabel>
                                <Input type='number' onChange={(e) => setJobSalary(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Job type</FormLabel>
                                <Select placeholder='Select option' onChange={(e) => setJobType(e.target.value)}>
                                    <option value='Remote'>Remote</option>
                                    <option value='Onsite'>Onsite</option>
                                    <option value='Hybrid'>Hybrid</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Application Deadline</FormLabel>
                                <Input type='date' onChange={(e) => setJobDeadline(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Relevant link</FormLabel>
                                <Input type='text' onChange={(e) => setRelevantLink(e.target.value)} />
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