import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'

export default function GalleryModal({ isOpen, onClose, onAddGallery, onChangeInput }) {
  return (
    <Modal placement='center' size='lg' className=' overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {'Add New Image'}</ModalHeader>
        <ModalBody className='gap-5'>
          <input name={'image'} type='file' onChange={onChangeInput} />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onPress={onClose}>
            Close
          </Button>
          <Button color='primary' onPress={onAddGallery}>
            {'Save'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
