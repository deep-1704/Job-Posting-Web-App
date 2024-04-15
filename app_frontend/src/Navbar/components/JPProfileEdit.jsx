import {
    Flex,
    Input,
    Editable,
    EditableInput,
    EditablePreview,
    FormLabel,
    useEditableControls,
    IconButton,
    Button,
    ButtonGroup,
    Stack
} from '@chakra-ui/react'

import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { updateUser } from '../../api'
import { useState } from 'react'

function JPProfileEditDrawer({ userObject }) {

    let [full_name, setFull_name] = useState(userObject.full_name);
    let [email, setEmail] = useState(userObject.email);
    let [phone, setPhone] = useState(userObject.phone);
    let [linkedIn_url, setLinkedIn_url] = useState(userObject.linkedIn_url);
    let [company_name, setCompany_name] = useState(userObject.company_name);
    let [position, setPosition] = useState(userObject.position);
    let [isLoading, setIsLoading] = useState(false);

    /* Here's a custom control */
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon boxSize='4' />} {...getEditButtonProps()} />
            </Flex>
        )
    }

    function handleSave() {
        setIsLoading(true);
        let token = localStorage.getItem('token');
        let user = {
            "username": userObject.username,
            "full_name": full_name,
            "email": email,
            "phone": phone,
            "linkedIn_url": linkedIn_url,
            "company_name": company_name,
            "position": position,
            "gender": userObject.gender,
            "user_role": "job_poster"
        }
        updateUser(user, token).then((response) => {
            setIsLoading(false)
            if (response === 200) {
                alert('Profile updated successfully')
            } else {
                alert('Failed to update profile')
            }
        })
    }

    return (
        <>
            {/* Form */}
            <Stack gap='6'>
                {/* Full name */}
                <div>
                    <FormLabel fontSize='1xl' >Full name</FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.full_name}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setFull_name(e.target.value)}/>
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Email */}
                <div>
                    <FormLabel fontSize='1xl' >Email</FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.email}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setEmail(e.target.value)}/>
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Phone */}
                <div>
                    <FormLabel fontSize='1xl' >Phone</FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.phone}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} type="number" onChange={(e) => setPhone(e.target.value)}/>
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* LinkedIn URL */}
                <div>
                    <FormLabel fontSize='1xl' >LinkedIn</FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.linkedIn_url}
                        fontSize='2xl'
                        isPreviewFocusable={true}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setLinkedIn_url(e.target.value)}/>
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Company */}
                <div>
                    <FormLabel fontSize='1xl' >Company</FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.company_name}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setCompany_name(e.target.value)}/>
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Position */}
                <div>
                    <FormLabel fontSize='1xl' >Position</FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.position}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setPosition(e.target.value)}/>
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>
                <Button isLoading={isLoading} colorScheme='teal' size='lg' onClick={() => handleSave()}>Save</Button>
            </Stack>
        </>
    );
}

export default JPProfileEditDrawer;