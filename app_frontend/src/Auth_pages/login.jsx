import { useState } from 'react';
import styles from './styles.module.css';
import {
    Stack,
    Heading,
    Text,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";
import LoginIllus from './assets/images/Login.svg';

import { loginUser } from '../api';

function Login() {
    let [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    });
    let [isLoading, setIsLoading] = useState(false);
    let [show, setShow] = useState(false);
    let handleClick = () => setShow(!show);

    function validateData(userInfo) {
        if (userInfo.username === '' || userInfo.password === '') {
            return false;
        }
        return true;
    }

    async function handleLogin() {
        setIsLoading(true);
        if (!validateData(userInfo)) {
            setIsLoading(false);
            alert('Please fill all the fields');
            return;
        }

        let response = await loginUser(userInfo)

        if (response.status === 200) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', userInfo.username);
            alert('Login successful');
            setIsLoading(false);
            window.location.reload();
        } else {
            setIsLoading(false);
            alert('Invalid username or password');
        }
    }
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
                            <Input pr='4.5rem' size='lg' type={show ? 'text' : 'password'} required placeholder='Password' onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.5rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <Button isLoading={isLoading} colorScheme='teal' variant='outline' onClick={() => handleLogin()}>
                        Log In
                    </Button>
                    <Flex gap='2'>
                        <Text color='#9ec5c6'>Not registerd?</Text>
                        <Menu>
                            <MenuButton as={Button} colorScheme='teal' variant='link' size='md'>
                                Sign Up
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => window.location.href = '/signup/job_seeker'}>I'm looking for a job</MenuItem>
                                <MenuItem onClick={() => window.location.href = '/signup/job_poster'}>I'm looking for candidates</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Stack>
            </div>
            <img src={LoginIllus} alt='Login Illustration' className={styles.loginIllus} style={{ 'width': '40%' }} />
        </div>
    );
}

export default Login;