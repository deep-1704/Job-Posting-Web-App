import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
} from '@chakra-ui/react'

import React from 'react'
import { deleteJob } from '../../api'

function DeleteJob({jobId}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    function handleDeleteJob() {
        deleteJob(jobId).then((response) =>{
            if(response.status === 401){
                localStorage.removeItem('token')
                alert('Session expired. Please login again.')
                window.location.href = '/login'
                return
            }
            if(response.status === 400){
                alert('Job deletion failed')
                return
            }
            if(response.status === 200){
                alert('Job deleted successfully')
                window.location.reload()
            }
        })
        onClose()
    }

    return (
        <>
            <Button variant='ghost' colorScheme='red' onClick={onOpen}>
                Delete Job
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Job
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => handleDeleteJob()} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default DeleteJob;