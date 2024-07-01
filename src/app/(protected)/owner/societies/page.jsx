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
import { assignAdminSociety, editSocietyImageGallery, getSocieties, insertSociety, modifySociety, removeSociety, setSocietyValue } from '@/app/redux/reducers/society'
import useForm from '@/app/hooks/useForm'
import { getDepartments } from '@/app/redux/reducers/department'
import societyAddSchema from '@/app/validation/society/societyAddValidation'
import AssignAdminModal from '@/app/components/Modals/AssignAdminModal'
import { getUsers } from '@/app/redux/reducers/user'
import toast from 'react-hot-toast'
import ViewSocietyModal from '@/app/components/Modals/ViewSocietyModal'
import Icon from '@/app/components/form/Icon'
import assets from '@/app/assets/assets'
import SocietyGalleryModal from '@/app/components/Modals/SocietyGalleryModal'

export default function Events() {
  const { societies, isAddSociety, isEditSociety, isDeleteSociety, isAssignAdminModal, isOpenSocietyImageModal } = useSelector(state => state.society)
  const { departments } = useSelector(state => state.department)
  const { users } = useSelector(state => state.user)
  const [isViewModal, setIsViewModal] = useState(false)
  const [singleSociety, setSingleSociety] = useState()

  console.log('societies :', societies)

  const [inputFields, setInputFields, errorMessage, onChange, onSubmit] = useForm({
    societyName: '',
    societyDescription: '',
    department: '',
    departmentId: '',
    mission: '',
    achievements: '',
    rules: '',
    searchQuery: '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDepartments())
  }, [])

  useEffect(() => {
    dispatch(getSocieties({ searchQuery: inputFields.searchQuery }))
  }, [inputFields?.searchQuery])

  const handleDepartmentChange = value => {
    const selectedDepartment = departments.find(dep => dep.department === value.target.value)
    onChange({ target: { name: 'department', value: selectedDepartment?.department } })
    onChange({ target: { name: 'departmentId', value: selectedDepartment?._id } })
  }

  const handleStudentChange = value => {
    const selectedStudent = users.find(user => user.firstname === value.target.value)
    onChange({ target: { name: 'studentFirstName', value: selectedStudent?.firstname } })
    onChange({ target: { name: 'student_id', value: selectedStudent?._id } })
  }

  const handleView = item => {
    setSingleSociety(item)
    setIsViewModal(true)
  }

  const handleSocietyChange = value => {
    const selectedSociety = societies.find(society => society?.societyName === value.target.value)

    dispatch(getUsers({ data: { society: selectedSociety?._id } }))

    onChange({ target: { name: 'society', value: selectedSociety?._id } })
    onChange({ target: { name: 'societyName', value: selectedSociety?.societyName } })

    onChange({ target: { name: 'studentFirstname', value: '' } })
    onChange({ target: { name: 'student_id', value: '' } })
  }

  const handleChangeAddSociety = e => {
    if (e.target.name == 'image') return onChange({ target: { name: 'image', value: e.target.files[0] } })

    if (e.target.name == 'groupMemberImage') return onChange({ target: { name: 'groupMemberImage', value: e.target.files[0] } })

    if (e.target.name === 'department') return handleDepartmentChange(e)

    onChange({ target: { name: e.target.name, value: e.target.value } })
  }

  const handleChangeAdmin = e => {
    if (e.target.name === 'society') return handleSocietyChange(e)

    if (e.target.name === 'student') return handleStudentChange(e)

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

  const handleDeleteSociety = () => {
    onSubmit(null, () => {
      dispatch(removeSociety({ data: inputFields, setInputFields }))
    })
  }

  const handleAssignAdmin = () => {
    onSubmit(null, () => {
      if (!inputFields?.society || !inputFields.student_id) return toast.error('society and student selection is required')

      dispatch(assignAdminSociety({ data: { society_id: inputFields?.society, admin: inputFields?.student_id }, setInputFields }))
    })
  }

  const openDeleteSocietyModal = item => {
    dispatch(setSocietyValue({ key: 'isDeleteSociety', value: true }))
    setInputFields({
      society_id: item._id,
    })
  }

  const openEditSocietyModel = item => {
    dispatch(setSocietyValue({ key: 'isEditSociety', value: true }))
    dispatch(setSocietyValue({ key: 'isAddSociety', value: true }))

    setInputFields({
      society_id: item?._id,
      societyName: item?.societyName,
      societyDescription: item?.societyDescription,
      department: item?.department?.department,
      departmentId: item.department?._id,
      mission: item?.mission,
      achievements: item?.achievements,
      rules: item?.rules,
      headInformation: item?.headInformation,
    })
  }

  const handleSearch = e => {
    onChange({ target: { name: e.target.name, value: e.target.value } })
  }

  const handleChangeSocietyImageGallery = e => {
    dispatch(setSocietyValue({ key: 'isOpenSocietyImageModal', value: true }))
    onChange({ target: { name: e.target.name, value: e.target.files } })
  }

  const handleOpenSocietyImageModal = value => {
    dispatch(setSocietyValue({ key: 'isOpenSocietyImageModal', value: true }))
    setInputFields({ allGalleryImages: value?.galleryImages, societyImages: value?.galleryImages, society_id: value?._id })
  }

  const handleAddSocietyImageGallery = () => {
    console.log('helloqweq w:', inputFields)
    if (!inputFields?.allGalleryImages?.length && !inputFields?.images) return toast.error('Please select an image')

    onSubmit(null, () => {
      dispatch(editSocietyImageGallery({ data: { society_id: inputFields.society_id, societyImages: inputFields.societyImages, societyFiles: inputFields?.images }, setInputFields }))
    })
  }

  const handleRemoveGalleryImage = (item, index) => {
    let images = [...inputFields.societyImages]
    images.splice(index, 1)
    onChange({ target: { name: 'societyImages', value: images } })
  }

  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey]

    switch (columnKey) {
      case 'societyName':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            {item?.admin && <p className='text-bold text-sm capitalize text-default-400'>{`${item?.admin?.email}`}</p>}
          </div>
        )
      case 'department':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue?.department}</p>
            {/* <p className='text-bold text-sm capitalize text-default-400'>{user.team}</p> */}
          </div>
        )
      case 'admin':
        if (!cellValue) return <p className='text-bold text-sm capitalize'>-</p>
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue?.cnic}</p>
            {item?.admin && <p className='text-bold text-sm capitalize text-default-400'>{`${item.admin.firstname} ${item.admin.lastname}`}</p>}
          </div>
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Gallery'>
              <span onClick={() => handleOpenSocietyImageModal(item)} className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <Icon imageWidth={'w-4'} imageHeight={'h-4'} image={assets.icons.image} />
              </span>
            </Tooltip>
            <Tooltip content='Details'>
              <span onClick={() => handleView(item)} className='text-lg text-default-400 cursor-pointer active:opacity-50'>
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
              <span onClick={() => openDeleteSocietyModal(item)} className='text-lg text-danger cursor-pointer active:opacity-50'>
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
          <Input autoFocus={false} onChange={handleSearch} name={'searchQuery'} value={inputFields.searchQuery} className='w-[30%] sm:max-w-[44%]' placeholder='Search by name...' type='text' />
          <Button color='primary' className='min-w-fit' endContent={<PlusIcon />} onClick={() => dispatch(setSocietyValue({ key: 'isAddSociety', value: true }))}>
            Add New
          </Button>
          <Button color='primary' className='min-w-fit' endContent={<PlusIcon />} onClick={() => dispatch(setSocietyValue({ key: 'isAssignAdminModal', value: true }))}>
            Assign Admin
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
        }}
        onClose={() => {
          dispatch(setSocietyValue({ key: 'isEditSociety', value: false }))
          dispatch(setSocietyValue({ key: 'isAddSociety', value: false }))
          setInputFields({})
        }}
        inputFields={inputFields}
        departments={departments}
        errorMessage={errorMessage}
        onEditSociety={handleSubmitEditSociety}
      />
      <DeleteSocietyModal isOpen={isDeleteSociety} onClose={() => dispatch(setSocietyValue({ key: 'isDeleteSociety', value: false }))} onDelete={handleDeleteSociety} />
      <AssignAdminModal
        isOpen={isAssignAdminModal}
        onChangeInput={handleChangeAdmin}
        inputFields={inputFields}
        societies={societies}
        users={users}
        onAssignAdmin={handleAssignAdmin}
        onClose={() => dispatch(setSocietyValue({ key: 'isAssignAdminModal', value: false }))}
      />
      <ViewSocietyModal data={singleSociety} isOpen={isViewModal} onClose={() => setIsViewModal(false)} />
      <SocietyGalleryModal
        onRemoveImage={handleRemoveGalleryImage}
        images={inputFields?.societyImages}
        isOpen={isOpenSocietyImageModal}
        onClose={() => dispatch(setSocietyValue({ key: 'isOpenSocietyImageModal', value: false }))}
        onChangeInput={handleChangeSocietyImageGallery}
        onAddGallery={handleAddSocietyImageGallery}
      />
    </div>
  )
}
