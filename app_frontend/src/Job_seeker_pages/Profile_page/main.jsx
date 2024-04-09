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

function Profile() {
    let user = {
        "username": "lemonade1704",
        "full_name": "Deep Prajapati",
        "email": "dp124551634@gmail.com",
        "phone": "7436005772",
        "gender": "Male",
        "brief_description": "I belong to a sweet state named Gujarat in India. I'm a passionate Backend Developer who loves building and understanding backend architectures. I'm currently exploring different possibilities of the Spring framework. I am also into Competitive Programming which helps me improve my problem-solving and logic-building capabilities. I'm looking forward to working with a team highly motivated towards making this world a better place to live.",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL",
            "MongoDB",
            "C++",
            "Python",
            "JavaScript",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
        ],
        "resume_link": "https://drive.google.com/file/d/1JTQWTIteDGSTQzs24oCq_NSPfhLmRPiA/view?usp=drive_link",
        "user_role": "job_seeker",
        "job_type_preference": "On-site",
        "expected_salary": 6000000,
        "year_of_graduation": 2025,
        "degree": "Bachelor of Technology",
        "major": "Computer Science and Engineering",
    }
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