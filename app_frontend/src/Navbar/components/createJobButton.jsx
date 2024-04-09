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

function CreateJobButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                                <Input type='text' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea placeholder='Explain more about the job' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Company name</FormLabel>
                                <Input type='text' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Vacancy</FormLabel>
                                <Input type='number' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Skills required (Keep comma seperated)</FormLabel>
                                <Input type='text' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Locations (Keep comma seperated)</FormLabel>
                                <Input type='text' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Salary(PA)</FormLabel>
                                <Input type='number' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Job type</FormLabel>
                                <Select placeholder='Select option'>
                                    <option value='option1'>Remote</option>
                                    <option value='option2'>Onsite</option>
                                    <option value='option3'>Hybrid</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Application Deadline</FormLabel>
                                <Input type='date' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Relevant link</FormLabel>
                                <Input type='text' />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='outline' colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='solid' colorScheme='linkedin'>Post Job</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateJobButton;