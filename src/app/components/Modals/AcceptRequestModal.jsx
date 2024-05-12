import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'

export default function AcceptRequestModal({ size = 'lg', isOpen = true, onClose, onAccept }) {
  return (
    <>
      <Modal size={size} isOpen={isOpen} backdrop={'blur'} onClose={onClose} placement={'center'}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>Accept Request</ModalHeader>
          <ModalBody>Are you confirm to accept the request?</ModalBody>
          <ModalFooter>
            <Button color='danger' variant='light' onPress={onClose}>
              Close
            </Button>
            <Button color='primary' onPress={onAccept}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
