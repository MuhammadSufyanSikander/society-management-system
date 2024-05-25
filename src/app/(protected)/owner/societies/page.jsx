'use client'

import React, { useState, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getSocieties, insertSociety, modifySociety, setSocietyValue } from '@/app/redux/reducers/society'
import useForm from '@/app/hooks/useForm'
import { getDepartments } from '@/app/redux/reducers/department'
import societyAddSchema from '@/app/validation/society/societyAddValidation'

export default function Events() {
  const [isDeleteSocietyModal, setIsDeleteSocietyModal] = useState(false)
  const { societies, isAddSociety, isEditSociety } = useSelector(state => state.society)
  const { departments } = useSelector(state => state.department)
  const [inputFields, setInputFields, errorMessage, onChange, onSubmit] = useForm({
    societyName: '',
    societyDescription: '',
    department: '',
    departmentId: '',
    mission: '',
    achievements: '',
    rules: '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSocieties())
    dispatch(getDepartments())
  }, [])

  const handleDepartmentChange = value => {
    const selectedDepartment = departments.find(dep => dep.department === value.target.value)
    onChange({ target: { name: 'department', value: selectedDepartment?.department } })
    onChange({ target: { name: 'departmentId', value: selectedDepartment?._id } })
  }

  const handleChangeAddSociety = e => {
    if (e.target.name === 'department') return handleDepartmentChange(e)

    onChange({ target: { name: e.target.name, value: e.target.value } })
  }

  const handleSubmitAddSociety = () => {
    onSubmit(societyAddSchema, () => {
      dispatch(insertSociety({ data: { ...inputFields, department: inputFields.departmentId }, setInputFields }))
    })
  }

  const handleSubmitEditSociety = () => {
    onSubmit(societyAddSchema, () => {
      dispatch(modifySociety({ data: { ...inputFields, department: inputFields.departmentId }, setInputFields }))
    })
  }

  const openEditSocietyModel = item => {
    dispatch(setSocietyValue({ key: 'isEditSociety', value: true }))
    dispatch(setSocietyValue({ key: 'isAddSociety', value: true }))
    setInputFields({
      societyName: item.societyName,
      societyDescription: item.societiesDescription,
      department: item?.department?.department,
      departmentId: item.department?._id,
      mission: item.mission,
      achievements: item.achievements,
      rules: item.rules,
    })
  }

  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey]

    switch (columnKey) {
      case 'societyName':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            {item?.admin && <p className='text-bold text-sm capitalize text-default-400'>{`${item.admin.email}`}</p>}
          </div>
        )
      case 'department':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue.department}</p>
            {/* <p className='text-bold text-sm capitalize text-default-400'>{user.team}</p> */}
          </div>
        )
      case 'admin':
        if (!cellValue) return <p className='text-bold text-sm capitalize'>-</p>
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue.cnic}</p>
            {item?.admin && <p className='text-bold text-sm capitalize text-default-400'>{`${item.admin.firstname} ${item.admin.lastname}`}</p>}
          </div>
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Details'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content='Edit society'>
              <span
                onClick={() => {
                  openEditSocietyModel(item)
                }}
                className='text-lg text-default-400 cursor-pointer active:opacity-50'
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Delete society'>
              <span onClick={() => setIsDeleteSocietyModal(true)} className='text-lg text-danger cursor-pointer active:opacity-50'>
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
          <Input isClearable className='w-[30%] sm:max-w-[44%]' placeholder='Search by name...' startContent={<SearchIcon />} />
          <Button color='primary' className='min-w-fit' endContent={<PlusIcon />} onClick={() => dispatch(setSocietyValue({ key: 'isAddSociety', value: true }))}>
            Add New
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
        <TableBody items={societies}>{item => <TableRow key={item._id}>{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
      </Table>

      <SocietyModal
        onChangeInput={handleChangeAddSociety}
        isEdit={isEditSociety}
        isOpen={isAddSociety}
        onAddSociety={() => {
          dispatch(setSocietyValue({ key: 'isEditSociety', value: false }))
          handleSubmitAddSociety()

          // dispatch(setSocietyValue({ key: 'isAddSociety', value: false }))
        }}
        onClose={() => {
          dispatch(setSocietyValue({ key: 'isEditSociety', value: false }))
          dispatch(setSocietyValue({ key: 'isAddSociety', value: false }))
        }}
        inputFields={inputFields}
        departments={departments}
        errorMessage={errorMessage}
        onEditSociety={handleSubmitEditSociety}
      />
      <DeleteSocietyModal isOpen={isDeleteSocietyModal} onClose={() => setIsDeleteSocietyModal(false)} onDelete={() => setIsDeleteSocietyModal(false)} />
    </div>
  )
}
