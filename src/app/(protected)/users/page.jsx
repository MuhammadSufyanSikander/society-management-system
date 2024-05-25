'use client'

import React, { useState, useEffect } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Spinner, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react'
import { columns } from './data'
import Input from '@/app/components/form/Input'
import { SearchIcon } from '@/app/components/svg/SearchIcon'
import { VerticalDotsIcon } from '@/app/components/svg/VerticalDotsIcon'
import AcceptRequestModal from '@/app/components/Modals/AcceptRequestModal'
import RejectRequestModal from '@/app/components/Modals/RejectRequestModal'
import { ChevronDownIcon } from '@/app/components/svg/ChevronDownIcon'
import { capitalize } from '@/app/utils/string'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, modifyUser, setUserValue } from '@/app/redux/reducers/user'
import useForm from '@/app/hooks/useForm'

const statusColorMap = {
  active: 'success',
  rejected: 'danger',
  pending: 'warning',
}

const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Rejected', uid: 'rejected' },
]

export default function UsersPage() {
  const dispatch = useDispatch()
  const [inputFields, setInputFields, errorMessage, onChange, onSubmit] = useForm({ user_id: null, isVerified: 'pending' })
  const { users, loading, isOpenAcceptModal, isOpenRejectModal } = useSelector(state => state.user)

  const openAcceptModal = item => {
    dispatch(setUserValue({ key: 'isOpenAcceptModal', value: true }))
    setInputFields({ user_id: item._id, isVerified: 'active' })
  }
  const openRejectModal = item => {
    dispatch(setUserValue({ key: 'isOpenRejectModal', value: true }))
    setInputFields({ user_id: item._id, isVerified: 'rejected' })
  }

  const handleAccepterRequest = () => {
    dispatch(setUserValue({ key: 'isOpenAcceptModal', value: false }))
    dispatch(modifyUser({ data: inputFields }))
  }

  const handleRejectRequest = () => {
    dispatch(setUserValue({ key: 'isOpenRejectModal', value: false }))
    dispatch(modifyUser({ data: inputFields }))
  }

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'firstname':
        return (
          <User avatarProps={{ radius: 'lg', src: user.image }} description={user.email} name={`${user.firstname} ${user.lastname}`}>
            {user.email}
          </User>
        )
      case 'registration':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
          </div>
        )
      case 'society':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue.societyName}</p>
          </div>
        )
      case 'department':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue.department}</p>
          </div>
        )
      case 'cnic':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
          </div>
        )
      case 'isVerified':
        return (
          <Chip className='capitalize' color={statusColorMap[user.isVerified]} size='sm' variant='flat'>
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
              {(user.isVerified === 'pending' || user.isVerified === 'rejected') && <DropdownItem onClick={() => openAcceptModal(user)}>Accept</DropdownItem>}
              {user.isVerified === 'pending' && (
                <DropdownItem className='text-danger-500' color='danger' onClick={() => openRejectModal(user)}>
                  Reject
                </DropdownItem>
              )}
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

  if (!users.length && loading)
    return (
      <div className='h-[100vh] flex justify-center items-center'>
        <Spinner size='lg' />
      </div>
    )

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
          {item => <TableRow key={item._id}>{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
        </TableBody>
      </Table>

      <AcceptRequestModal isOpen={isOpenAcceptModal} onClose={() => dispatch(setUserValue({ key: 'isOpenAcceptModal', value: false }))} onAccept={() => handleAccepterRequest()} />
      <RejectRequestModal isOpen={isOpenRejectModal} onClose={() => dispatch(setUserValue({ key: 'isOpenRejectModal', value: false }))} onReject={() => handleRejectRequest()} />
    </div>
  )
}
