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
    Alert,
    AlertIcon,
    AlertTitle,
    Spacer,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import companyIcon from '../../assets/images/companyLogo.svg'

function Application({ application }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    return (
        <Card backgroundColor='#bfdbdd'>
            <CardHeader>
                <Flex alignItems='center' gap='3'>
                    <Avatar size='lg' name='Company' src={companyIcon} />
                    <Stack gap='0'>
                        <Link href={application.company[1]} isExternal>
                            <Flex alignItems='center'>
                                <Text fontSize='3xl'>{application.company[0]}</Text>
                                <ExternalLinkIcon mx='2px' />
                            </Flex>
                        </Link>
                        <Text fontSize='lg'>{application.job_title}</Text>
                    </Stack>
                </Flex>
            </CardHeader>
            <CardBody>
                <Flex gap='3' >
                    <Tag>{application.job_location}</Tag>
                    <Tag>{application.job_type}</Tag>
                    <Tag>Deadline: {application.job_deadline}</Tag>
                    <Spacer />
                    {application.application_status === 'Rejected' ?
                        <Alert status='error' width='fit-content'>
                            <AlertIcon />
                            <AlertTitle>Rejected</AlertTitle>
                        </Alert>
                        : application.application_status === 'Applied' ?
                            <Alert status='info' width='fit-content'>
                                <AlertIcon />
                                <AlertTitle>Applied</AlertTitle>
                            </Alert>
                            : <Alert status='success' width='fit-content'>
                                <AlertIcon />
                                <AlertTitle>Shortlisted!</AlertTitle>
                            </Alert>}
                    <Spacer />
                    <Button colorScheme='red' onClick={onOpen} size='md' variant='ghost'>
                        Delete Application
                    </Button>

                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                    Delete Application
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                    Are you sure? You can't undo this action afterwards.
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme='red' onClick={onClose} ml={3}>
                                        Delete
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>

                </Flex>
            </CardBody>
        </Card>
    );
}

export default Application;