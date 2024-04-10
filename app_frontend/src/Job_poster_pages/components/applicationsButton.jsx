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

import React, { useEffect } from 'react'
import JobApplication from './application'

import { fetchApplicationsWithJobId } from '../../api'

function JobApplications({ jobId, totalApplications }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [applications, setApplications] = React.useState([])

    useEffect(() => {
        let token = localStorage.getItem('token')
        fetchApplicationsWithJobId(jobId, token)
            .then((response) => {
                if(response.status === 401) {
                    localStorage.removeItem('token')
                    alert('Session expired. Please login again.')
                    window.location.href = '/login'
                    return
                }
                if(response.status === 400) {
                    alert('Error fetching applications')
                    return
                }
                if (response.status === 200) {
                    setApplications(response.applications)
                }
            })
    }, [])

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