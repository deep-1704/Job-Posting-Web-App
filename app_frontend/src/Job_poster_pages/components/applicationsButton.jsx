import {
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Heading,
    Divider,
    Stack
} from '@chakra-ui/react'

import React from 'react'
import JobApplication from './application'

function JobApplications({ jobId, totalApplications }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    let applications = [
        {
            "username": "lemonade69",
            "full_name": "Deep Prajapati",
            "email": "dp124551634@gmail.com",
            "phone": "7436005772",
            "gender": "Male",
            "brief_description": "brief_description",
            "skills": [
                "skill1",
                "skill2",
                "skill3"
            ],
            "resume_link": "resume_link",
            "job_type_preference": "Remote",
            "expected_salary": "expected_salary",
            "year_of_graduation": "year_of_graduation",
            "degree": "degree",
            "major": "major",
            "application_date": "application_date"
        },
        {
            "username": "lemonade69",
            "full_name": "Deep Prajapati",
            "email": "dp124551634@gmail.com",
            "phone": "7436005772",
            "gender": "Male",
            "brief_description": "brief_description",
            "skills": [
                "skill1",
                "skill2",
                "skill3"
            ],
            "resume_link": "resume_link",
            "job_type_preference": "Remote",
            "expected_salary": "expected_salary",
            "year_of_graduation": "year_of_graduation",
            "degree": "degree",
            "major": "major",
            "application_date": "application_date"
        },
        {
            "username": "lemonade69",
            "full_name": "Deep Prajapati",
            "email": "dp124551634@gmail.com",
            "phone": "7436005772",
            "gender": "Male",
            "brief_description": "brief_description",
            "skills": [
                "skill1",
                "skill2",
                "skill3"
            ],
            "resume_link": "resume_link",
            "job_type_preference": "Remote",
            "expected_salary": "expected_salary",
            "year_of_graduation": "year_of_graduation",
            "degree": "degree",
            "major": "major",
            "application_date": "application_date"
        },
        {
            "username": "lemonade69",
            "full_name": "Deep Prajapati",
            "email": "dp124551634@gmail.com",
            "phone": "7436005772",
            "gender": "Male",
            "brief_description": "brief_description",
            "skills": [
                "skill1",
                "skill2",
                "skill3"
            ],
            "resume_link": "resume_link",
            "job_type_preference": "Remote",
            "expected_salary": "expected_salary",
            "year_of_graduation": "year_of_graduation",
            "degree": "degree",
            "major": "major",
            "application_date": "application_date"
        },
    ]

    return (
        <>
            <Button ref={btnRef} onClick={onOpen} >Applications: {totalApplications}</Button>
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Heading marginBottom='10px'>Applications</Heading>
                        <Divider />
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack>
                            {applications.map((application) => {
                                return <JobApplication application={application} />
                            })}
                        </Stack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    );
}

export default JobApplications;