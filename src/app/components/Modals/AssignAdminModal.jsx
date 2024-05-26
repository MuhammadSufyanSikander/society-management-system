import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import Select from '../form/Select'

export default function AssignAdminModal({ isOpen, onClose, societies, onAssignAdmin, onChangeInput, users, inputFields, errorMessage }) {
  return (
    <Modal placement='center' size='lg' className='overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {'Assign Admin'}</ModalHeader>
        <ModalBody className='gap-5'>
          <Select
            name={'society'}
            label={'Select Society'}
            items={societies}
            obj='societyName'
            objValue='societyName'
            onChange={onChangeInput}
            value={inputFields?.societyName}
            errorMessage={errorMessage?.society}
          />
          <Select
            name={'student'}
            label={'Select Student'}
            obj='firstname'
            objValue='firstname'
            items={users}
            value={inputFields?.studentFirstName}
            onChange={onChangeInput}
            errorMessage={errorMessage?.studentFirstName}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onPress={onClose}>
            Close
          </Button>
          <Button color='primary' onPress={onAssignAdmin}>
            {'Assign'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
