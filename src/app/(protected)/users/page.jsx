'use client'

import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Spinner, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react'
import { columns, users } from './data'
import Input from '@/app/components/form/Input'
import { SearchIcon } from '@/app/components/svg/SearchIcon'
import { VerticalDotsIcon } from '@/app/components/svg/VerticalDotsIcon'
import AcceptRequestModal from '@/app/components/Modals/AcceptRequestModal'
import RejectRequestModal from '@/app/components/Modals/RejectRequestModal'
import { PlusIcon } from '@/app/components/svg/PlusIcon'
import { ChevronDownIcon } from '@/app/components/svg/ChevronDownIcon'
import { capitalize } from '@/app/utils/string'

const statusColorMap = {
  active: 'success',
  rejected: 'danger',
  vacation: 'warning',
}

const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Rejected', uid: 'rejected' },
]

export default function UsersPage() {
  const [isOpenAcceptModal, setIsOpenAcceptModal] = useState(false)
  const [isOpenRejectModal, setIsOpenRejectModal] = useState(false)

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'name':
        return (
          <User avatarProps={{ radius: 'lg', src: user.avatar }} description={user.email} name={cellValue}>
            {user.email}
          </User>
        )
      case 'registration':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
          </div>
        )
      case 'department':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
          </div>
        )
      case 'cnic':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
          </div>
        )
      case 'status':
        return (
          <Chip className='capitalize' color={statusColorMap[user.status]} size='sm' variant='flat'>
            {cellValue}
          </Chip>
        )
      case 'actions':
        return (
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly size='sm' variant='light'>
                <VerticalDotsIcon className='text-default-300' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>View</DropdownItem>
              <DropdownItem onClick={() => setIsOpenAcceptModal(true)}>Accept</DropdownItem>
              <DropdownItem className='text-danger-500' color='danger' onClick={() => setIsOpenRejectModal(true)}>
                Reject
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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

          <Dropdown>
            <DropdownTrigger>
              <Button endContent={<ChevronDownIcon className='text-small' />} variant='flat'>
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu disallowEmptySelection aria-label='Table Columns' closeOnSelect={false}>
              {statusOptions.map(status => (
                <DropdownItem key={status.uid} className='capitalize'>
                  {capitalize(status.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    )
  }

  return (
    <div className='p-10'>
      <TopContent />
      <Table>
        <TableHeader columns={columns}>
          {column => (
            <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody loadingState='idle' loadingContent={<Spinner />} items={users}>
          {item => <TableRow key={item.id}>{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
        </TableBody>
      </Table>

      <AcceptRequestModal isOpen={isOpenAcceptModal} onClose={() => setIsOpenAcceptModal(false)} onAccept={() => setIsOpenAcceptModal(false)} />
      <RejectRequestModal isOpen={isOpenRejectModal} onClose={() => setIsOpenRejectModal(false)} onReject={() => setIsOpenRejectModal(false)} />
    </div>
  )
}
