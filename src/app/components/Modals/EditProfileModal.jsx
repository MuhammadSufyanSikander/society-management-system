import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import step2Data from '@/app/(auth)/register/steps/step2Data'
import Select from '../form/Select'

export default function EditProfileModal({ isOpen, onClose, onAddSociety, onEditSociety, isEdit = false }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {isEdit ? 'Edit Profile' : 'Add Profile'}</ModalHeader>
        <ModalBody className='gap-5'>
          <Input autoFocus label='First Name' />
          <Input  label='Last Name' />
          <Input type='password'  label='Change Password' />
          <Input  label='Society' />
          <Input  label='Mobile Number' />
          <Input name={'cnic'} label={'National Identity Card #/ B-Form'} />
          <Select name={'department'} label={'Select Department'} items={step2Data.departments} />
          
          <Input  label='Registration Number' />
          <Select name={'program'} label={'Select Program'} items={step2Data.programs}  />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onPress={onClose}>
            Close
          </Button>
          <Button color='primary' onPress={isEdit ? onEditSociety : onAddSociety}>
            {isEdit ? 'Edit' : 'Add'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
