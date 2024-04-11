import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Avatar,
    Flex,
    Text,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import JSProfileEditDrawer from './JSProfileEdit';
import JPProfileEditDrawer from './JPProfileEdit';
import CreateJobButton from './createJobButton';
import { fetchUser } from '../../api';
import { useEffect, useState } from 'react';

function ProfileButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userObject, setUserObject] = useState({});

    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");

    function logoutHandle(){
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("userType");
        window.location.href = '/';
    }

    useEffect(() => {
        fetchUser(username, token).then(data => {
            if (data === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("userType");
                window.location.reload();
                return;
            }
            localStorage.setItem('userType', data.user_role);
            setUserObject(data);
        
        })
    }, [])

    return (
        <Menu>
            <Flex gap={4}>
                {userObject.user_role === 'job_poster' ? <CreateJobButton /> : <></>}
                <MenuButton size='lg' as={Button} rightIcon={<ChevronDownIcon />}>
                    <Flex gap={3} alignItems='center'>
                        <Avatar size='sm' src='https://bit.ly/broken-link' />
                        <Text>{userObject.full_name}</Text>
                    </Flex>
                </MenuButton>
            </Flex>
            <MenuList>
                <MenuItem onClick={() => window.location.href = `./${username}/dashboard`}>Dashboard</MenuItem>
                <MenuItem onClick={onOpen}>Edit profile</MenuItem>
                <MenuItem color='red' onClick={()=>logoutHandle()}>Logout</MenuItem>
            </MenuList>

            {/* Drawer */}
            <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='sm'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' fontSize='5xl' color='#003a37'>Edit profile</DrawerHeader>
                    <DrawerBody>
                        {userObject.user_role === 'job_seeker' ? <JSProfileEditDrawer userObject={userObject} /> : <JPProfileEditDrawer userObject={userObject} />}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Menu>
    );
}

export default ProfileButton;