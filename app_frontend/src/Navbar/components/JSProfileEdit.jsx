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
    ButtonGroup,
    Stack
} from '@chakra-ui/react'

import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'

function JSProfileEditDrawer({ userObject }) {
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
                            <Input as={EditableInput} />
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
                            <Input as={EditableInput} />
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
                            <Input as={EditableInput} type="number" />
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
                            <Input as={EditableTextarea} />
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
                            <Input as={EditableInput} />
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
                            <Input as={EditableInput} />
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
                            <Input as={EditableInput} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>

                {/* Expected salary */}
                <div>
                    <FormLabel fontSize='1xl' >Expected salary<Text as='em' color='#9ec5c6'>(PA)</Text></FormLabel>
                    <Editable
                        textAlign='center'
                        defaultValue={userObject.expected_salary}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        marginLeft='10px'>
                        <Flex gap={3} color='#15543c'>
                            <EditablePreview />
                            <Input as={EditableInput} type="number" />
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
                            <Input as={EditableInput} />
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
                            <Input as={EditableInput} />
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
                            <Input as={EditableInput} type="number" />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>
            </Stack>
        </>
    );
}

export default JSProfileEditDrawer;