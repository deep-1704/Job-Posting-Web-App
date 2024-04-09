import {
    Flex,
    Input,
    Editable,
    EditableInput,
    EditablePreview,
    FormLabel,
    useEditableControls,
    IconButton,
    ButtonGroup,
    Stack
} from '@chakra-ui/react'

import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'

function JPProfileEditDrawer({ userObject }) {
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
                            <Input as={EditableInput} />
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
                            <Input as={EditableInput} />
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
                            <Input as={EditableInput} />
                            <EditableControls />
                        </Flex>
                    </Editable>
                </div>
            </Stack>
        </>
    );
}

export default JPProfileEditDrawer;