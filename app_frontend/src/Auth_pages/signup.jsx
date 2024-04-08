import { useState } from 'react';
import styles from './styles.module.css';
import { Stack, Heading, Text, Input, InputGroup, InputRightElement, InputLeftElement, Button, Flex, Select } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import SignupIllus from './assets/images/Signup.svg';

function Signup({ user_role }) {
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
                        <Input placeholder='Full name' size='md' isRequired='true' onChange={(e) => setUserInfo({ ...userInfo, full_name: e.target.value })} />
                        {/* Username */}
                        <Input placeholder='Username' size='md' isRequired='true' onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} />
                        {/* Password */}
                        <InputGroup size='md'>
                            <Input pr='4.5rem' size='md' type={show ? 'text' : 'password'} isRequired='true' placeholder='Password' onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
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
                            <Input isRequired='true' size='md' type='email' placeholder='Email' onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}/>
                        </InputGroup>
                        {/* Phone */}
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <PhoneIcon color='gray.300' />
                            </InputLeftElement>
                            <Input isRequired='true' size='md' type='number' placeholder='Phone' onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}/>
                        </InputGroup>
                        {/* Gender */}
                        <Select isRequired='true' size='md' placeholder='Gender' onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}>
                            <option value='option1'>Male</option>
                            <option value='option2'>Female</option>
                            <option value='option3'>Transgender</option>
                            <option value='option3'>Others</option>
                        </Select>
                    </Stack>
                    <Button colorScheme='teal' variant='outline'>
                        Sign UP
                    </Button>
                    <Flex gap='2'>
                        <Text color='#9ec5c6'>Already have an account?</Text>
                        <Button color='#21664d' variant='link'>
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