import { useState } from 'react';
import styles from './styles.module.css';
import { Stack, Heading, Text, Input, InputGroup, InputRightElement, Button, Flex } from "@chakra-ui/react";
import LoginIllus from './assets/images/Login.svg';

function Login() {
    let [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    });
    let [show, setShow] = useState(false);
    let handleClick = () => setShow(!show);
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginFormContainer}>
                <Stack gap='10'>
                    <Stack>
                        <Heading as='h2' size='2xl' color='#15543c'>Login</Heading>
                        <Text fontSize='2xl' color='#21664d'>Find the job made for you!</Text>
                    </Stack>
                    <Stack gap='5'>
                        <Input placeholder='Username' size='lg' required onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} />
                        <InputGroup size='md'>
                            <Input pr='4.5rem' size='lg' type={show ? 'text' : 'password'} required placeholder='Password' onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.5rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <Button colorScheme='teal' variant='outline'>
                        Log In
                    </Button>
                    <Flex gap='2'>
                        <Text color='#9ec5c6'>Not registerd?</Text>
                        <Button color='#21664d' variant='link'>
                            Sign Up
                        </Button>
                    </Flex>
                </Stack>
            </div>
            <img src={LoginIllus} alt='Login Illustration' className={styles.loginIllus} style={{ 'width': '40%' }} />
        </div>
    );
}

export default Login;