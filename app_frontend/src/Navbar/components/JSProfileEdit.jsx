import {
    Flex,
    Text,
    Input,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    FormLabel,
    useEditableControls,
    IconButton,
    Button,
    ButtonGroup,
    Stack,
} from '@chakra-ui/react'

import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { updateUser } from '../../api'
import { useState } from 'react'

function JSProfileEditDrawer({ userObject }) {
    let [full_name, setFullName] = useState(userObject.full_name)
    let [email, setEmail] = useState(userObject.email)
    let [phone, setPhone] = useState(userObject.phone)
    let [brief_description, setBrief_description] = useState(userObject.brief_description)
    let [skills, setSkills] = useState(userObject.skills)
    let [resume_link, setResume_link] = useState(userObject.resume_link)
    let [job_type_preference, setJob_type_preference] = useState(userObject.job_type_preference)
    let [expected_salary, setExpected_salary] = useState(userObject.expected_salary)
    let [degree, setDegree] = useState(userObject.degree)
    let [major, setMajor] = useState(userObject.major)
    let [year_of_graduation, setYear_of_graduation] = useState(userObject.year_of_graduation)
    let [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        let token = localStorage.getItem('token')
        let username = localStorage.getItem('username')
        let user = {
            "username": username,
            "gender": userObject.gender,
            "user_role": userObject.user_role,
            "full_name": full_name,
            "email": email,
            "phone": phone,
            "brief_description": brief_description,
            "skills": skills,
            "resume_link": resume_link,
            "job_type_preference": job_type_preference,
            "expected_salary": expected_salary,
            "degree": degree,
            "major": major,
            "year_of_graduation": year_of_graduation
        }
        
        updateUser(user, token).then((response) => {
            setIsLoading(false)
            if (response.status === 200) {
                alert('Profile updated successfully')
                window.location.reload()
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
                        value={full_name}
                        defaultValue={full_name}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'
                        onChange={(newValue) => setFullName(newValue)}>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <EditableInput onChange={(e) => setFullName(e.target.value) } />
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
                            <Input as={EditableInput} onChange={(e) => setEmail(e.target.value)} />
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
                            <Input as={EditableInput} type="number" onChange={(e) => setPhone(e.target.value)} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Brief description */}
                <div>
                    <FormLabel fontSize='1xl' >Brief description</FormLabel>
                    <Editable
                        textAlign='left'
                        defaultValue={userObject.brief_description}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableTextarea} onChange={(e) => setBrief_description(e.target.value)} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Skills */}
                <div>
                    <FormLabel fontSize='1xl' >Skills <Text as='em' color='#9ec5c6'>(Keep comma seperated)</Text></FormLabel>
                    <Editable
                        textAlign='left'
                        defaultValue={userObject.skills.join(", ")}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setSkills((e.target.value).split(',').map((item) => item.trim()))} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Resume link */}
                <div>
                    <FormLabel fontSize='1xl' >Resume link</FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.resume_link}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setResume_link(e.target.value)} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Job type preference */}
                <div>
                    <FormLabel fontSize='1xl' >Job type preference <Text as='em' color='#9ec5c6'>(Remote, OnSite, Hybrid)</Text></FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.job_type_preference}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setJob_type_preference(e.target.value)} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Expected salary */}
                <div>
                    <FormLabel fontSize='1xl' >Expected salary<Text as='em' color='#9ec5c6'>(₹ PA)</Text></FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.expected_salary}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} type="number" onChange={(e) => setExpected_salary(e.target.value)} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Degree */}
                <div>
                    <FormLabel fontSize='1xl' >Degree</FormLabel>
                    <Editable
                        textAlign='left'
                        defaultValue={userObject.degree}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setDegree(e.target.value)} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Major */}
                <div>
                    <FormLabel fontSize='1xl' >Major</FormLabel>
                    <Editable
                        textAlign='left'
                        defaultValue={userObject.major}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} onChange={(e) => setMajor(e.target.value)} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Year of graduation */}
                <div>
                    <FormLabel fontSize='1xl' >Year of graduation</FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.year_of_graduation}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} type="number" onChange={(e) => setYear_of_graduation(e.target.value)} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>
                <Button isLoading={isLoading} colorScheme='teal' size='lg' onClick={() => handleSave()}>Save</Button>
            </Stack>
        </>
    );
}

export default JSProfileEditDrawer;