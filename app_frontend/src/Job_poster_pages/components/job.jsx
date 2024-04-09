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

function JobPosterJobs({ job }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
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
                        <Spacer />
                        <JobApplications jobId={job.job_id} totalApplications={job.total_applications} />
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
            ><JobDrawer jobId={job.jobId} /></Drawer>
        </>
    );
}

export default JobPosterJobs;