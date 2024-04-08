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
    Spinner
} from '@chakra-ui/react'
import { useState } from 'react'

function JobDrawer({ jobId }) {
    const toast = useToast()
    let [applyButton, setApplyButton] = useState("Apply")
    let handleApply = () => {
        setApplyButton(<Spinner />)
        toast({
            title: `top-right toast`,
            position: 'top-right',
            isClosable: true,
            variant:'left-accent'
        })
    }
    let job = {
        "job_id": 0,
        "job_title": "Sr. Software Engineer",
        "job_description": "Zenskar is building new-age billing and pricing infrastructure for SaaS companies. As SaaS pricing evolves from vanilla subscription based models to more granular usage based models, billing and pricing infrastructure needs to be completely reimagined.",
        "job_poster": "job_poster",
        "job_vacancy": 100,
        "job_location": "Banglore",
        "job_salary": 1200000,
        "job_type": "On-site",
        "job_date_posted": "08/04/2024",
        "job_deadline": "17/04/2024",
        "company": [
            "Zenskar",
            "https://www.zenskar.com"
        ],
        "job_skills": ["C", "C++", "Java", "Python", "JavaScript", "React", "Node.js", "MongoDB", "SQL"]
    }
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
                            onClick={() =>
                                handleApply()
                            }>{applyButton}</Button>
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </>
    );
}

export default JobDrawer;