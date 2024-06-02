import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import Select from '../form/Select'
import TextEditor from '../TextEditor'

export default function SocietyModal({ isOpen, onClose, onAddSociety, onEditSociety, isEdit = false, onChangeInput, departments, inputFields, errorMessage }) {
  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {isEdit ? 'Edit Society' : 'Add New Society'}</ModalHeader>
        <ModalBody className='gap-5'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='image'>Society Logo</label>
            <input name={'image'} type='file' onChange={onChangeInput} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='groupMemberImage'>Society Group Image</label>
            <input name={'groupMemberImage'} type='file' onChange={onChangeInput} />
          </div>

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
          <TextArea label='Rules & Regulations' name={'rules'} onChange={onChangeInput} value={inputFields?.rules} errorMessage={errorMessage?.rules} />
          <TextEditor label='Head Information' name={'headInformation'} onChange={value => onChangeInput({ target: { name: 'headInformation', value: value } })} value={inputFields?.headInformation} />
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
