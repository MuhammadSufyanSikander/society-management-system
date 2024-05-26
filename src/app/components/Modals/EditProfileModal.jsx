import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import step2Data from '@/app/(auth)/register/steps/step2Data'
import Select from '../form/Select'

export default function EditProfileModal({ isOpen, onClose, onEditProfile, societies = [], departments = [], inputFields, onChangeInput }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {'Edit Profile'}</ModalHeader>
        <ModalBody className='gap-5'>
          <Input autoFocus label='First Name' name={'firstname'} value={inputFields?.firstname} onChange={onChangeInput} />
          <Input label='Last Name' name={'lastname'} value={inputFields?.lastname} onChange={onChangeInput} />
          <Input type='password' label='Change Password' name={'password'} value={inputFields?.password} onChange={onChangeInput} />
          <Select name={'society'} label={'Select Society'} items={societies} obj='societyName' objValue='societyName' onChange={onChangeInput} value={inputFields?.societyName} />
          <Input label='Mobile Number' name={'phone'} value={inputFields?.phone} onChange={onChangeInput} />
          <Input name={'cnic'} label={'National Identity Card #/ B-Form'} value={inputFields?.cnic} onChange={onChangeInput} />
          <Select name={'department'} label={'Select Department'} obj='department' objValue='department' items={departments} value={inputFields?.department} onChange={onChangeInput} />

          <Input label='Registration Number' name={'registration'} value={inputFields?.registration} onChange={onChangeInput} />
          <Select name={'program'} label={'Select Program'} obj='label' objValue='value' value={inputFields?.program} items={step2Data.programs} onChange={onChangeInput} />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onPress={onClose}>
            Close
          </Button>
          <Button color='primary' onPress={onEditProfile}>
            {'Save changes'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
