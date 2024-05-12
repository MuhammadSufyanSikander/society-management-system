import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import step2Data from '@/app/(auth)/register/steps/step2Data'
import Select from '../form/Select'

export default function EditSocietyModal({ isOpen, onClose, onAddSociety }) {
  return (
    <Modal placement='center' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'>Edit Society</ModalHeader>
        <ModalBody className='gap-5'>
          <Input autoFocus label='Society Name' />
          <TextArea label='Society Description' />
          <Select name={'department'} label={'Select Department'} items={step2Data.departments} />
          <Select name={'admin'} label={'Select Admin'} items={step2Data.admins} />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onPress={onClose}>
            Close
          </Button>
          <Button color='primary' onPress={onAddSociety}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
