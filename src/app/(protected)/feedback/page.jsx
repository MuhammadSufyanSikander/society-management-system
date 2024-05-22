'use client'

import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from '@nextui-org/react'
import { EditIcon } from '@/app/components/svg/EditIcon'
import { DeleteIcon } from '@/app/components/svg/DeleteIcon'
import { EyeIcon } from '@/app/components/svg/EyeIcon'
import { columns, users } from './data'
import Input from '@/app/components/form/Input'
import { SearchIcon } from '@/app/components/svg/SearchIcon'
import { PlusIcon } from '@/app/components/svg/PlusIcon'
import Button from '@/app/components/form/Button'
import DeleteSocietyModal from '@/app/components/Modals/DeleteSociety'
import SocietyModal from '@/app/components/Modals/SocietyModal'


export default function Feedback() {
  const [isDeleteSocietyModal, setIsDeleteSocietyModal] = useState(false)
  const [isSocietyModal, setIsSocietyModal] = useState(false)
  const [isEditSociety, setIsEditSociety] = useState(false)
  // const [isAddEventModal, setIsAddEventModal] = useState(false)
  // const [isEventModal, setIsEventModal] = useState(false)
  // const [isPollingModal, setIsPollingModal] = useState(false)

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'name':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            <p className='text-bold text-sm capitalize text-default-400'>{user.email}</p>
          </div>
        )
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            <p className='text-bold text-sm capitalize text-default-400'>{user.team}</p>
          </div>
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-5    '>
            <Tooltip content='Details'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content='Responed'>
              <span
                onClick={() => {
                  setIsEditSociety(true)
                  setIsSocietyModal(true)
                }}
                className='text-lg text-default-400 cursor-pointer active:opacity-50'
              >
                <EditIcon />
              </span>
            </Tooltip>
            {/* <Tooltip color='danger' content='Delete society'>
              <span onClick={() => setIsDeleteSocietyModal(true)} className='text-lg text-danger cursor-pointer active:opacity-50'>
                <DeleteIcon />
              </span>
            </Tooltip> */}
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const TopContent = () => {
    return (
      <div className='flex w-full flex-col gap-4 mb-10'>
        <div className='flex w-full gap-3 items-end'>
          <Input isClearable className='w-[30%] sm:max-w-[44%]' placeholder='Search by name...' startContent={<SearchIcon />} />
          <Button color='primary' className='min-w-fit' endContent={<PlusIcon />} onClick={() => setIsSocietyModal(true)}>
            Add New
          </Button>
          
          {/* <Button color='primary' className='min-w-fit' endContent={<PlusIcon />} onClick={() => setIsEventModal(true)}>
            Add Event
          </Button>
          <Button color='primary' className='min-w-fit' endContent={<PlusIcon />} onClick={() => setIsPollingModal(true)}>
            Add Polling
          </Button> */}
        </div>
      </div>
    )
  }

  return (
    <div className='p-10'>
      <div className='flex'>
        <TopContent />
      </div>
      <Table aria-label='Example table with custom cells'>
        <TableHeader columns={columns}>
          {column => (
            <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>{item => <TableRow key={item.id}>{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
      </Table>
      {/* <AddEventModal
      isOpen={isEventModal}
      onClose={()=>{setIsEventModal(false)}}/>
      <AddPollingModal isOpen={isPollingModal} onClose={()=>setIsPollingModal(false)} /> */}

      <SocietyModal
        isEdit={isEditSociety}
        isOpen={isSocietyModal}
        onAddSociety={() => {
          setIsEditSociety(false)
          setIsSocietyModal(false)
        }}
        onClose={() => {
          setIsEditSociety(false)
          setIsSocietyModal(false)
        }}
      />
      <DeleteSocietyModal isOpen={isDeleteSocietyModal} onClose={() => setIsDeleteSocietyModal(false)} onDelete={() => setIsDeleteSocietyModal(false)} />
    </div>
  )
}
