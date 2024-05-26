import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import Select from '../form/Select'
import ViewDecription from '../form/ViewDecription'
import moment from 'moment'

export default function ViewEventModal({ data, isOpen, onClose, onAddSociety, onEditSociety, isEdit = false, onChangeInput, departments, inputFields, errorMessage }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-auto' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex bg-royalblue text-white flex-col gap-1'> {data?.title || ''}</ModalHeader>
        <ModalBody className='gap-5'>
          <ViewDecription heading='Description' text={data?.description} />
          <ViewDecription heading='Time' text={moment(data?.time).format('DD MMM YYYY')} />
          <ViewDecription heading='Location' text={data?.location} />
          <ViewDecription heading='Society' text={data?.society?.societyName} />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
