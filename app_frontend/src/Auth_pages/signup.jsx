import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { Stack, Heading, Text, Input, InputGroup, InputRightElement, InputLeftElement, Button, Flex, Select } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import SignupIllus from './assets/images/Signup.svg';

import { registerUser } from '../api';

function Signup() {
    let { user_role } = useParams();
    console.log(user_role);
    let [isLoading, setIsLoading] = useState(false);
    let [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        full_name: '',
        email: '',
        phone: '',
        gender: '',
        user_role: user_role
    });
    let [show, setShow] = useState(false);
    let handleClick = () => setShow(!show);

    function validateData(userInfo){
        if(userInfo.username === '' || userInfo.password === '' || userInfo.full_name === '' || userInfo.email === '' || userInfo.phone === '' || userInfo.gender === ''){
            alert('Please fill all the fields');
            return false;
        }

        // Validate email
        let email = userInfo.email;
        let atposition = email.indexOf("@");
        let dotposition = email.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            alert("Please enter a valid e-mail address");
            return false;
        }
        return true;
    }


    function handleSignup() {
        setIsLoading(true);
        if(!validateData(userInfo)){
            setIsLoading(false);
            return;
        };
        registerUser(userInfo).then(data => {
            if(data.status !== 201){
                alert(`Some error occured. Status: ${data.status}`);
                setIsLoading(false);
                return;
            }
            localStorage.setItem('token', data.token)
            localStorage.setItem('username', userInfo.username)
            localStorage.setItem('userType', user_role)
            alert('Registered successfully');
            window.location.href = `/${userInfo.username}/dashboard`;
        });
        setIsLoading(false);
    }

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupFormContainer}>
                <Stack gap='10'>
                    <Stack>
                        <Heading as='h2' size='2xl' color='#15543c'>Create Account</Heading>
                        <Text fontSize='2xl' color='#21664d'>Start your journey towards success today</Text>
                    </Stack>
                    <Stack gap='5'>
                        {/* Full name */}
                        <Input placeholder='Full name' size='md' isRequired={true} onChange={(e) => setUserInfo({ ...userInfo, full_name: e.target.value })} />
                        {/* Username */}
                        <Input placeholder='Username' size='md' isRequired={true} onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} />
                        {/* Password */}
                        <InputGroup size='md'>
                            <Input pr='4.5rem' size='md' type={show ? 'text' : 'password'} isRequired={true} placeholder='Password' onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.5rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {/* Email */}
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='gray.300' />
                            </InputLeftElement>
                            <Input isRequired={true} size='md' type='email' placeholder='Email' onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}/>
                        </InputGroup>
                        {/* Phone */}
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <PhoneIcon color='gray.300' />
                            </InputLeftElement>
                            <Input isRequired={true} size='md' type='number' placeholder='Phone' onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}/>
                        </InputGroup>
                        {/* Gender */}
                        <Select isRequired={true} size='md' placeholder='Gender' onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}>
                            <option value='option1'>Male</option>
                            <option value='option2'>Female</option>
                            <option value='option3'>Transgender</option>
                            <option value='option3'>Others</option>
                        </Select>
                    </Stack>
                    <Button isLoading={isLoading} colorScheme='teal' variant='outline' onClick={() => handleSignup()}>
                        Sign UP
                    </Button>
                    <Flex gap='2'>
                        <Text color='#9ec5c6'>Already have an account?</Text>
                        <Button color='#21664d' variant='link' onClick={() => window.location.href = '/login'}>
                            Log In
                        </Button>
                    </Flex>
                </Stack>
            </div>
            <img src={SignupIllus} alt='Login Illustration' className={styles.signupIllus} style={{ 'width': '40%' }} />
        </div>
    );
}

export default Signup;