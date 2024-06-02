'use client'

import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from '@nextui-org/react'
import { EditIcon } from '@/app/components/svg/EditIcon'
import { DeleteIcon } from '@/app/components/svg/DeleteIcon'
import { EyeIcon } from '@/app/components/svg/EyeIcon'
import { columns, events, users } from './data'
import Input from '@/app/components/form/Input'
import { SearchIcon } from '@/app/components/svg/SearchIcon'
import { PlusIcon } from '@/app/components/svg/PlusIcon'
import Button from '@/app/components/form/Button'
import DeleteSocietyModal from '@/app/components/Modals/DeleteSociety'
import SocietyModal from '@/app/components/Modals/SocietyModal'
import AddEventModal from '@/app/components/Modals/AddEventModal'
import AddPollingModal from '@/app/components/Modals/AddPollingModal'
import DeleteEventModal from '@/app/components/Modals/DeleteEventModal'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents, insertEvent, modifyEvent, removeEvent, setEventValue } from '@/app/redux/reducers/events'
import useForm from '@/app/hooks/useForm'
import { getSocieties } from '@/app/redux/reducers/society'
import moment from 'moment'
import ViewEventModal from '@/app/components/Modals/ViewEventModal'

export default function Events() {
  const { isDeleteEventModal, isEditEventModal, isEventModal, events } = useSelector(state => state.event)
  const { societies } = useSelector(state => state.society)
  const [isPollingModal, setIsPollingModal] = useState(false)
  const [isViewModal, setIsViewModal] = useState(false)
  const [singleEvent, setSingleEvent] = useState()
  const [inputFields, setInputFields, errorMessage, onChange, onSubmit] = useForm({ title: '', description: '', time: '2021-04-07T18:45:22Z', location: '', society: '', image: null, searchQuery: '' })

  const dispatch = useDispatch()

  const handleSocietyChange = value => {
    const selectedSociety = societies.find(society => society?.societyName === value.target.value)

    onChange({ target: { name: 'society', value: selectedSociety?._id } })
    onChange({ target: { name: 'societyName', value: selectedSociety?.societyName } })
  }

  const handleChangeAddEvent = e => {
    if (e.target.name === 'society') return handleSocietyChange(e)

    if (e.target.name === 'image') return onChange({ target: { name: e.target.name, value: e.target.files[0] } })

    onChange({ target: { name: e.target.name, value: e.target.value } })
  }

  const handleAddEvent = () => {
    onSubmit(null, () => {
      dispatch(insertEvent({ data: inputFields }))
    })
  }

  const openEditEventModal = event => {
    dispatch(setEventValue({ key: 'isEditEventModal', value: true }))
    dispatch(setEventValue({ key: 'isEventModal', value: true }))

    setInputFields({
      title: event?.title,
      description: event?.description,
      time: event?.time,
      location: event?.location,
      society: event?.society?._id,
      societyName: event?.society?.societyName,
      event_id: event?._id,
    })
  }

  const handleEditEvent = () => {
    onSubmit(null, () => {
      dispatch(modifyEvent({ data: inputFields, setInputFields }))
    })
  }

  const openDeleteEvent = event => {
    dispatch(setEventValue({ key: 'isDeleteEventModal', value: true }))
    setInputFields({
      event_id: event._id,
    })
  }

  const handleDeleteEvent = () => {
    onSubmit(null, () => {
      dispatch(removeEvent({ data: inputFields, setInputFields }))
    })
  }

  const handleView = item => {
    setSingleEvent(item)
    setIsViewModal(true)
  }

  React.useEffect(() => {
    dispatch(getSocieties())
  }, [])

  React.useEffect(() => {
    dispatch(getEvents({ searchQuery: inputFields?.searchQuery }))
  }, [inputFields?.searchQuery])

  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey]

    switch (columnKey) {
      case 'title':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            {/* <p className='text-bold text-sm capitalize text-default-400'>{user.email}</p> */}
          </div>
        )
      case 'time':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{moment(cellValue).format('DD-MM-YYYY hh:mm A')}</p>
            {/* <p className='text-bold text-sm capitalize text-default-400'>{user.team}</p> */}
          </div>
        )
      case 'location':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            {/* <p className='text-bold text-sm capitalize text-default-400'>{user.team}</p> */}
          </div>
        )
      case 'society':
        if (!cellValue) return null
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue?.societyName}</p>
            {/* <p className='text-bold text-sm capitalize text-default-400'>{user.team}</p> */}
          </div>
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Details'>
              <span onClick={() => handleView(item)} className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content='Edit event'>
              <span
                onClick={() => {
                  openEditEventModal(item)
                }}
                className='text-lg text-default-400 cursor-pointer active:opacity-50'
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Delete event'>
              <span onClick={() => openDeleteEvent(item)} className='text-lg text-danger cursor-pointer active:opacity-50'>
                <DeleteIcon />
              </span>
            </Tooltip>
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
          <Input
            // autoFocus
            value={inputFields?.searchQuery}
            name={'searchQuery'}
            onChange={e => onChange({ target: { name: e.target.name, value: e.target.value } })}
            isClearable
            className='w-[30%] sm:max-w-[44%]'
            placeholder='Search by name...'
            startContent={<SearchIcon />}
          />

          <Button color='primary' className='min-w-fit' endContent={<PlusIcon />} onClick={() => dispatch(setEventValue({ key: 'isEventModal', value: true }))}>
            Add New Event
          </Button>
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
        <TableBody items={events}>{item => <TableRow key={item?._id}>{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
      </Table>
      <AddEventModal
        societies={societies}
        onAddEvent={handleAddEvent}
        inputFields={inputFields}
        onChangeInput={handleChangeAddEvent}
        isEdit={isEditEventModal}
        isOpen={isEventModal}
        onClose={() => {
          dispatch(setEventValue({ key: 'isEventModal', value: false }))
        }}
        onEditEvent={handleEditEvent}
      />
      {/* <AddPollingModal isOpen={isPollingModal} onClose={() => setIsPollingModal(false)} /> */}
      <ViewEventModal data={singleEvent} isOpen={isViewModal} onClose={() => setIsViewModal(false)} />
      <DeleteEventModal isOpen={isDeleteEventModal} onClose={() => dispatch(setEventValue({ key: 'isDeleteEventModal', value: false }))} onDelete={() => handleDeleteEvent()} />
    </div>
  )
}
