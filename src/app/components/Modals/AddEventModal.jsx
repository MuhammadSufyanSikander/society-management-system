import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import step2Data from '@/app/(auth)/register/steps/step2Data'
import Select from '../form/Select'
import { PlusIcon } from '../svg/PlusIcon'
import DatePicker from '../form/DatePicker'
import DateTimeInput from '../form/DateTimeInput'

export default function AddEventModal({ isOpen, onClose, onAddSociety, onEditSociety, isEdit = false }) {
 const societies = [{label:'society1'},{label:'society2'},{label:'society3'}]
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {isEdit ? 'Edit Event' : 'Add New Event'}</ModalHeader>
        <ModalBody className='gap-5'>
          <Input autoFocus label='Event title' />
          <TextArea label='Description' />
          <DateTimeInput label={'Event time'}/>
          <Input autoFocus label='Event location' />
          <Select name={'Society'} label={'Select society'} items={societies} />
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
