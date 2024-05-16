import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import step2Data from '@/app/(auth)/register/steps/step2Data'
import Select from '../form/Select'
import { PlusIcon } from '../svg/PlusIcon'
import DatePicker from '../form/DatePicker'
import DateTimeInput from '../form/DateTimeInput'

export default function AddPollingModal({ isOpen, onClose, onAddSociety, onEditSociety, isEdit = false }) {
 const societies = [{label:'society1'},{label:'society2'},{label:'society3'}]
 const [inputFields, setInputFields] = useState(['Selection 1', 'Selection 2']);

 const handleAddInput = () => {
    setInputFields(prevFields => [...prevFields, `Selection ${prevFields.length + 1}`]);
  };
  const handleRemoveInput = () => {
    setInputFields(prevFields => prevFields.slice(0, -1))
  };

  return (
    <Modal placement='center' size='lg' className='h-4/6 overflow-scroll' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'> {isEdit ? 'Edit Society' : 'Add Polling'}</ModalHeader>
        <ModalBody className='gap-5'>
          <Input autoFocus label='Polling title' />
          <TextArea label='Description' />
          <Select name={'Society'} label={'Select society'} items={societies} />
          {inputFields.map((fieldName, index) => (
            <Input key={index} autoFocus label={fieldName} />
          ))}
          <div className=' flex gap-[20px] w-full justify-between'>
          <Button isDisabled={inputFields?.length <=2 } fullWidth='true' color='danger' variant='flat' onPress={handleRemoveInput}>
            Remove
          </Button>
          <Button isDisabled={inputFields?.length >= 4} fullWidth='true' color='primary' onPress={handleAddInput}>
            Add
          </Button>
          </div>
          
        </ModalBody>
        <ModalFooter>
          <Button  color='danger' variant='flat' onPress={onClose}>
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
