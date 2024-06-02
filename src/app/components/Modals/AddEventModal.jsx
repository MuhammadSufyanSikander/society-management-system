import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import Select from '../form/Select'
import DateTimeInput from '../form/DateTimeInput'
import TextEditor from '../TextEditor'

export default function AddEventModal({ isOpen, inputFields, onClose, errorMessage, onAddEvent, onEditEvent, onChangeInput, societies = [], isEdit = false }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {isEdit ? 'Edit Event' : 'Add New Event'}</ModalHeader>
        <ModalBody className='gap-5'>
          <input name={'image'} type='file' onChange={onChangeInput} />
          <Input autoFocus name={'title'} label='Event title' onChange={onChangeInput} value={inputFields?.title} />
          <TextArea name={'description'} label='Description' onChange={onChangeInput} value={inputFields?.description} />
          <DateTimeInput name='time' label={'Event time'} value={inputFields?.time} onChange={value => onChangeInput({ target: { name: 'time', value } })} />
          <Input label='Event location' name={'location'} onChange={onChangeInput} value={inputFields?.location} />

          <TextEditor />

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
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onPress={onClose}>
            Close
          </Button>
          <Button color='primary' onPress={isEdit ? onEditEvent : onAddEvent}>
            {isEdit ? 'Edit' : 'Add'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
