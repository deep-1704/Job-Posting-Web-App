import {
    Flex,
    Text,
    Stack,
    Tag,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Heading,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import { fetchJobWithId } from '../../api';

function JobDrawer({ job }) {
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
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </>
    );
}

export default JobDrawer;