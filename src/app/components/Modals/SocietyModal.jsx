import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import step2Data from '@/app/(auth)/register/steps/step2Data'
import Select from '../form/Select'

export default function SocietyModal({ isOpen, onClose, onAddSociety, onEditSociety, isEdit = false }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {isEdit ? 'Edit Society' : 'Add New Society'}</ModalHeader>
        <ModalBody className='gap-5'>
          <Input autoFocus label='Society Name' />
          <TextArea label='Society Description' />
          <Select name={'department'} label={'Select Department'} items={step2Data.departments} />
          <TextArea label='Society Mission' />
          <TextArea label='Achievements' />
          <TextArea label='Rules & Regulations' />
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
