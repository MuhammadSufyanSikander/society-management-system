'use client'

import React, { useState, useEffect } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from '@nextui-org/react'
import { DeleteIcon } from '@/app/components/svg/DeleteIcon'
import { EyeIcon } from '@/app/components/svg/EyeIcon'
import { columns, users } from './data'
import { PlusIcon } from '@/app/components/svg/PlusIcon'
import Button from '@/app/components/form/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setSocietyValue } from '@/app/redux/reducers/society'
import useForm from '@/app/hooks/useForm'
import GalleryModal from '@/app/components/Modals/GalleryModal'
import { deleteGalleryImage, getGallery, saveGalleryImage, setGalleryValue } from '@/app/redux/reducers/gallery'
import toast from 'react-hot-toast'
import DeleteImageGalleryModal from '@/app/components/Modals/DeleteImageGalleryModal'

export default function Gallery() {
  const { gallery, isOpenAddImageModal, isOpenDeleteImageModal } = useSelector(state => state.gallery)

  const [inputFields, setInputFields, errorMessage, onChange, onSubmit] = useForm({
    image: null,
  })
  const dispatch = useDispatch()

  const handleChangeAddImage = e => {
    onChange({ target: { name: 'image', value: e.target.files[0] } })
  }

  const handleSubmitImage = () => {
    if (!inputFields?.image) return toast.error('image is required.')

    onSubmit(null, () => {
      dispatch(saveGalleryImage({ data: { image: inputFields?.image } }))
    })
  }

  const handleOpenDeleteImageModal = value => {
    setInputFields({ image_id: value?._id })
    dispatch(setGalleryValue({ key: 'isOpenDeleteImageModal', value: true }))
  }

  const handleDeleteImage = () => {
    if (!inputFields?.image_id) return toast.error('image is required to delete')
    onSubmit(null, () => {
      dispatch(deleteGalleryImage({ data: { image_id: inputFields.image_id } }))
    })
  }

  React.useEffect(() => {
    dispatch(getGallery())
  }, [])

  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey]

    switch (columnKey) {
      case 'image':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            {item?.admin && <p className='text-bold text-sm capitalize text-default-400'>{`${item?.admin?.email}`}</p>}
          </div>
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Details'>
              <span onClick={() => window.open(item?.image, '_blank')} className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Delete image'>
              <span onClick={() => handleOpenDeleteImageModal(item)} className='text-lg text-danger cursor-pointer active:opacity-50'>
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
          <Button
            color='primary'
            className='min-w-fit'
            endContent={<PlusIcon />}
            onClick={() => {
              dispatch(setGalleryValue({ key: 'isOpenAddImageModal', value: true }))
              setInputFields({})
            }}
          >
            Add New Image
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
        <TableBody items={gallery}>{item => <TableRow key={item._id}>{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
      </Table>

      <GalleryModal
        isOpen={isOpenAddImageModal}
        onAddGallery={handleSubmitImage}
        onChangeInput={handleChangeAddImage}
        onClose={() => {
          dispatch(setGalleryValue({ key: 'isOpenAddImageModal', value: false }))
          setInputFields({})
        }}
      />

      <DeleteImageGalleryModal isOpen={isOpenDeleteImageModal} onClose={() => dispatch(setSocietyValue({ key: 'isOpenDeleteImageModal', value: false }))} onDelete={handleDeleteImage} />
    </div>
  )
}
