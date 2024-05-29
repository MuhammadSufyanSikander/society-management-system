import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tooltip } from '@nextui-org/react'
import { DeleteIcon } from '../svg/DeleteIcon'
import { EyeIcon } from '../svg/EyeIcon'

export default function SocietyGalleryModal({ isOpen, onClose, images = [], onAddGallery, onChangeInput, onRemoveImage }) {
  return (
    <Modal placement='center' size='lg' className=' overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {'Society Gallery'}</ModalHeader>
        <ModalBody className='gap-5'>
          <input name={'images'} type='file' accept='image/png, image/jpg, image/jpeg' onChange={onChangeInput} />
        </ModalBody>

        {images?.map((item, index) => {
          return (
            <div key={item} className='flex justify-between p-5 px-7'>
              <p className='text-bold text-sm'>{item.slice(0, 50)}...</p>
              <div className='flex gap-2'>
                <Tooltip content='Details'>
                  <span onClick={() => window.open(item, '_blank')} className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                    <EyeIcon />
                  </span>
                </Tooltip>

                <Tooltip color='danger' content='Delete society'>
                  <span onClick={() => onRemoveImage(item, index)} className='text-lg text-danger cursor-pointer active:opacity-50'>
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            </div>
          )
        })}

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
