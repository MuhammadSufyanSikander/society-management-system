import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'

export default function RejectRequestModal({ size = 'lg', isOpen = true, onClose, onReject }) {
  return (
    <>
      <Modal size={size} isOpen={isOpen} backdrop={'blur'} onClose={onClose} placement={'center'}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>Reject Request</ModalHeader>
          <ModalBody>Are you confirm to reject the request?</ModalBody>
          <ModalFooter>
            <Button color='primary' variant='light' onPress={onClose}>
              Close
            </Button>
            <Button color='danger' onPress={onReject}>
              Reject
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
