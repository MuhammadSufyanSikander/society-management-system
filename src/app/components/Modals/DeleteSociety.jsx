import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'

export default function DeleteSocietyModal({ size = 'lg', isOpen = true, onClose, onDelete }) {
  return (
    <>
      <Modal size={size} isOpen={isOpen} backdrop={'blur'} onClose={onClose} placement={'center'}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>Delete Society</ModalHeader>
          <ModalBody>Are you confirm to delete the society?</ModalBody>
          <ModalFooter>
            <Button color='primary' variant='light' onPress={onClose}>
              Close
            </Button>
            <Button color='danger' onPress={onDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
