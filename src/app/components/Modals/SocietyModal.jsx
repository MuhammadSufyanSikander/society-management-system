import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import step2Data from '@/app/(auth)/register/steps/step2Data'
import Select from '../form/Select'

export default function SocietyModal({ isOpen, onClose, onAddSociety, onEditSociety, isEdit = false, onChangeInput, departments, inputFields, errorMessage }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {isEdit ? 'Edit Society' : 'Add New Society'}</ModalHeader>
        <ModalBody className='gap-5'>
          <Input autoFocus name={'societyName'} label='Society Name' onChange={onChangeInput} value={inputFields?.societyName} errorMessage={errorMessage?.societyName} />
          <TextArea label='Society Description' name={'societyDescription'} onChange={onChangeInput} value={inputFields?.societyDescription} errorMessage={errorMessage?.societyDescription} />
          <Select
            name={'department'}
            label={'Select Department'}
            obj='department'
            objValue='department'
            items={departments}
            value={inputFields?.department}
            onChange={onChangeInput}
            errorMessage={errorMessage?.department}
          />
          <TextArea label='Society Mission' name={'mission'} onChange={onChangeInput} value={inputFields?.mission} errorMessage={errorMessage?.mission} />
          <TextArea label='Achievements' name={'achievements'} onChange={onChangeInput} value={inputFields?.achievements} errorMessage={errorMessage?.achievements} />
          <TextArea label='Rules & Regulations' name={'rules'} onChange={onChangeInput} value={inputFields?.rules} errorMessage={errorMessage?.rules} />
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
