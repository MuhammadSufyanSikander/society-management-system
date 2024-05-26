import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import Select from '../form/Select'
import ViewDecription from '../form/ViewDecription'

export default function ViewUserModal({ data, isOpen, onClose, onAddSociety, onEditSociety, isEdit = false, onChangeInput, departments, inputFields, errorMessage }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-auto' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex bg-royalblue text-white flex-col gap-1'> {data?.firstname || '' + ' ' + data?.lastname || ''}</ModalHeader>
        <ModalBody className='gap-5'>
          <ViewDecription heading='Email' text={data?.email} />
          <ViewDecription heading='Phone number' text={data?.phone} />
          <ViewDecription heading='National Identity Card #/ B-Form' text={data?.cnic} />
          <ViewDecription heading='Registration' text={data?.registration} />
          <ViewDecription heading='Gender' text={data?.gender} />
          <ViewDecription heading='Department' text={data?.department?.department} />
          <ViewDecription heading='Program' text={data?.program + ' ' + data?.section} />
          <ViewDecription heading='Department' text={data?.department?.department} />
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
