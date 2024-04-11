import styles from './styles.module.css';
import { Flex, Stack, Button, Text } from '@chakra-ui/react'
import applicationIcon from './assets/images/applicationIcon.svg'
import jobIcon from './assets/images/jobIcon.svg'
import profileIcon from './assets/images/profileIcon.svg'
import Applications from './Applications_page/main';
import Jobs from './Jobs_page/main';
import Profile from './Profile_page/main';

import { useState } from 'react';

function JobSeekerDashboard() {
    let [selectedComponent, setSelectedComponent] = useState(<Jobs />);
    return (
        <div className={styles.JobSeekerDashboardContainer}>
            <Flex marginLeft='3%'>
                {/* Navigation */}
                <Stack paddingTop='20px' gap='5' width='7%'>
                    <Button colorScheme='teal' variant='ghost' width='fit-content' height='fit-content' padding='20px' onClick={() => setSelectedComponent(<Profile />)}>
                        <Stack width='50px' alignItems='center'>
                            <img src={profileIcon} alt='Profile' style={{ "width": "100%" }} />
                            <Text color='#045149' fontSize='1xl'>Profile</Text>
                        </Stack>
                    </Button>
                    <Button colorScheme='teal' variant='ghost' width='fit-content' height='fit-content' padding='20px' onClick={() => setSelectedComponent(<Jobs />)}>
                        <Stack width='50px' alignItems='center'>
                            <img src={jobIcon} alt='Jobs' style={{ "width": "100%" }} />
                            <Text color='#045149' fontSize='1xl'>Jobs</Text>
                        </Stack>
                    </Button>
                    <Button colorScheme='teal' variant='ghost' width='fit-content' height='fit-content' padding='20px' onClick={() => setSelectedComponent(<Applications />)}>
                        <Stack width='50px' alignItems='center'>
                            <img src={applicationIcon} alt='Applications' style={{ "width": "100%" }} />
                            <Text color='#045149' fontSize='1xl'>Applications</Text>
                        </Stack>
                    </Button>
                </Stack>

                {/* Main Content */}
                {selectedComponent}
            </Flex>
        </div>
    );
}

export default JobSeekerDashboard;