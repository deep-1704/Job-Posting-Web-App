import {
    Button,
    Heading,
    Stack,
    Text,
    Link,
    Flex,
    Tag
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import React from 'react'

function JobApplication({ application }) {
    return (
        <>
            <Stack spacing={3} p={4} borderWidth='1px' borderRadius='lg' backgroundColor='#e6eaef'>
                <Stack>
                    <Heading size='lg' color='#003a37'>{application.full_name}</Heading>
                    <Link href='https://chakra-ui.com' isExternal>
                        {application.username} <ExternalLinkIcon mx='2px' />
                    </Link>
                </Stack>
                <Flex gap={2}>
                    <Text fontSize='lg' color='#045149'>Key skills:</Text>
                    <Flex gap={1}>
                        {application.skills.map((skill, index) => (
                            <Tag key={index} size='md' colorScheme='teal' variant='solid' mx='1'>
                                {skill}
                            </Tag>
                        ))}
                    </Flex>
                </Flex>
                <Link href={application.resume_link} isExternal>
                    <Flex alignItems='center'>
                        <Text fontSize='lg' color='#045149'>Resume</Text><ExternalLinkIcon mx='2px' />
                    </Flex>
                </Link>
                <Text fontSize='lg' color='#045149'>Job Preference: {application.job_type_preference}</Text>
                <Text fontSize='lg' color='#045149'>Phone: {application.phone}</Text>
                <Text fontSize='lg' color='#045149'>Email: {application.email}</Text>
                <Flex gap={3}>
                    <Button colorScheme='green'>Shortlist</Button>
                    <Button variant='outline' colorScheme='red'>Reject</Button>
                </Flex>
            </Stack>
        </>
    );
}

export default JobApplication;