import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Divider } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import Select from '../form/Select'
import ViewDecription from '../form/ViewDecription'
import Icon from '../form/Icon'

export default function ViewSocietyModal({ data, isOpen, onClose, onAddSociety, onEditSociety, isEdit = false, onChangeInput, departments, inputFields, errorMessage }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-auto' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex bg-royalblue text-white flex-col gap-1'> {data?.societyName || ''}</ModalHeader>
        <ModalBody className=' flex flex-row gap-5'>
          <div className='w-[50%] flex flex-col gap-5 '>
            <ViewDecription heading='Description' text={data?.societyDescription} />
            <ViewDecription heading='Mission' text={data?.mission} />
            <ViewDecription heading='Achievements' text={data?.achievements} />
            <ViewDecription heading='Rules' text={data?.rules} />
            <ViewDecription heading='Department' text={data?.department?.department} />
          </div>
          {data?.admin && (
            <>
              <Divider orientation='vertical' />
              <div className='flex flex-col gap-5'>
                <Icon imageHeight={'w-[120px] h-[120px]'} image={data?.admin?.image} />
                <ViewDecription heading='Role' text={'Admin'} />

                <ViewDecription heading='First name' text={data?.admin?.firstname} />
                <ViewDecription heading='Last name' text={data?.admin?.lastname} />
                <ViewDecription heading='E-mail' text={data?.admin?.email} />
                <ViewDecription heading='Phone number' text={data?.admin?.phone} />
                <ViewDecription heading='Last name' text={data?.admin?.lastname} />
                <ViewDecription heading='Program' text={data?.admin?.program + data?.admin?.section} />
              </div>
            </>
          )}
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
