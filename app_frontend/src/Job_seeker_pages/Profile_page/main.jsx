import {
    Heading,
    Stack,
    Text,
    Flex,
    Image,
    Tag,
    Link
} from '@chakra-ui/react'

import { PhoneIcon, EmailIcon, AttachmentIcon } from '@chakra-ui/icons'

import maleIcon from '../assets/images/maleIcon.svg'
import femaleIcon from '../assets/images/femaleIcon.svg'
import transIcon from '../assets/images/transIcon.svg'
import othersIcon from '../assets/images/othersIcon.svg'

import { fetchUser } from '../../api'
import { useEffect, useState } from 'react'

function Profile() {
    let [user, setUser] = useState({
        "username": "username",
        "full_name": "full_name",
        "email": "email",
        "phone": "phone",
        "gender": "gender",
        "brief_description": "brief_description",
        "skills": [
            "skill1",
            "skill2",
            "skill3"
        ],
        "resume_link": "resume_link",
        "user_role": "job_seeker",
        "job_type_preference": "job_type_preference",
        "expected_salary": "expected_salary",
        "year_of_graduation": "year_of_graduation",
        "degree": "degree",
        "major": "major"
    })

    useEffect(()=>{
        let token = localStorage.getItem('token')
        let username = localStorage.getItem('username')

        fetchUser(token, username).then((response) => {
            if(response.status === 401){
                localStorage.removeItem('token')
                localStorage.removeItem('username')
                window.location.href = '/login'
                return
            }
            if(response.status === 404){
                alert('User not found')
                return
            }

            setUser(response.data)
        })
    })
    return (
        <Stack paddingTop='40px' paddingLeft='5%' paddingRight='5%' paddingBottom='40px' gap={7}>
            <Stack gap={2}>
                <Heading size='3xl' color='#15543c'>{user.full_name}</Heading>
                <Flex alignItems='center' gap={5}>
                    <Text fontSize='2xl' color='#9ec5c6'>@{user.username}</Text>
                    {user.gender === 'Male' ? <Image src={maleIcon} boxSize='40px' />
                        :
                        user.gender === 'Female' ? <Image src={femaleIcon} boxSize='40px' />
                            :
                            user.gender === 'Transgender' ? <Image src={transIcon} boxSize='40px' /> : <Image src={othersIcon} boxSize='40px' />}
                </Flex>
            </Stack>
            <Stack>
                <Text as='b' fontSize='3xl'>About</Text>
                <Text fontSize='xl' color='#21664d'>{user.brief_description}</Text>
            </Stack>
            <Stack gap={3}>
                <Text as='b' fontSize='3xl'>Key Skills</Text>
                <Flex wrap='wrap' gap={2}>
                    {user.skills.map(skill => (
                        <Tag colorScheme='teal' key={skill}>{skill}</Tag>
                    ))}
                </Flex>
            </Stack>
            <Stack>
                <Text as='b' fontSize='3xl'>Contact</Text>
                <Flex gap={5} alignItems='center'>
                    <PhoneIcon color='#21664d' boxSize='25px' />
                    <Text fontSize='xl' color='#21664d'>{user.phone}</Text>
                </Flex>
                <Flex gap={5} alignItems='center'>
                    <EmailIcon color='#21664d' boxSize='25px' />
                    <Text fontSize='xl' color='#21664d'>{user.email}</Text>
                </Flex>
                <Link href={user.resume_link} isExternal>
                    <Flex gap={5} alignItems='center'>
                        <AttachmentIcon color='#21664d' boxSize='25px' />
                        <Text fontSize='xl' color='#21664d'>Resume</Text>
                    </Flex>
                </Link>
            </Stack>
            <Stack>
                <Text as='b' fontSize='3xl'>Education</Text>
                <Text fontSize='xl' color='#21664d'>{user.degree} in {user.major} | Graduating in {user.year_of_graduation}</Text>
            </Stack>
            <Stack>
                <Text as='b' fontSize='3xl'>Job Preferences</Text>
                <Text fontSize='xl' color='#21664d'>Looking for {user.job_type_preference} jobs</Text>
                <Text fontSize='xl' color='#21664d'>Expected Salary: {user.expected_salary / 100000} LPA</Text>
            </Stack>
        </Stack>
    );
}

export default Profile;