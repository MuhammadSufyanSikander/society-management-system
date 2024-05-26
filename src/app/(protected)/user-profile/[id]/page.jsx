'use client'

import EditProfileModal from '@/app/components/Modals/EditProfileModal'
import useForm from '@/app/hooks/useForm'
import { getDepartments } from '@/app/redux/reducers/department'
import { getSocieties } from '@/app/redux/reducers/society'
import { modifyUser } from '@/app/redux/reducers/user'
import { Avatar, Card, CardHeader, CardBody, Button } from '@nextui-org/react'
import { useParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserProfile = () => {
  const [isEdit, setIsEdit] = useState()
  const { id } = useParams()
  const { userInfo } = useSelector(state => state.auth)
  const { departments } = useSelector(state => state.department)
  const { societies } = useSelector(state => state.society)
  const dispatch = useDispatch()
  const [inputFields, setInputFields, errorMessage, onChange, onSubmit] = useForm({
    firstname: '',
    lastname: '',
    password: '',
    society: '',
    phone: '',
    cnic: '',
    department: '',
    registration: '',
    program: '',
  })

  const handleSocietyChange = value => {
    const selectedSociety = societies.find(society => society.societyName === value.target.value)

    onChange({ target: { name: 'society', value: selectedSociety?._id } })
    onChange({ target: { name: 'societyName', value: selectedSociety?.societyName } })
  }

  const handleDepartmentChange = value => {
    const selectedDepartment = departments.find(dep => dep.department === value.target.value)
    onChange({ target: { name: 'department', value: selectedDepartment?.department } })
    onChange({ target: { name: 'departmentId', value: selectedDepartment?._id } })
  }

  const handleInputChange = e => {
    if (e.target.name === 'department') return handleDepartmentChange(e)
    if (e.target.name === 'society') return handleSocietyChange(e)

    onChange({ target: { name: e.target.name, value: e.target.value } })
  }

  const handleSubmitChange = () => {
    if (!inputFields.password) delete inputFields.password
    dispatch(modifyUser({ isUpdateUser: true, data: { ...inputFields, department: inputFields.departmentId, user_id: id } }))
    setIsEdit(false)
  }

  useEffect(() => {
    setInputFields({
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      password: '',
      society: userInfo.society._id,
      societyName: userInfo.society.societyName,
      phone: userInfo.phone,
      cnic: userInfo.cnic,
      department: userInfo.department.department,
      departmentId: userInfo.department._id,
      registration: userInfo.registration,
      program: userInfo.program,
    })

    dispatch(getSocieties())
    dispatch(getDepartments())
  }, [userInfo])

  return (
    <div className='w-full relative flex flex-col items-center justify-start h-screen my-5 px-20'>
      <div className='container relative flex justify-center items-center flex-col mt-20 overflow-visible py-5'>
        <div className='w-40 h-24'>
          <Avatar src={userInfo?.image} className='w-40 h-40 top-[-70px] absolute z-10' />
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-22xl font-semibold leading-none text-default-600'>{`${userInfo.firstname} ${userInfo.lastname}`}</h1>
        </div>
      </div>
      <div class='w-full border-[1px] h-fit mb-4 border-gray-50 rounded-[4px] p-[22px]'>
        <div className='flex justify-between'>
          <div className='font-bold text-[20px] mb-[15px]'>User Details</div>
          <Button color='primary' className='min-w-fit' onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        </div>
        <div className=' grid grid-cols-3 gap-5'>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>First Name</span>
            <span className='text-[16px] font-normal'>{userInfo?.firstname}</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Mobile Number</span>
            <span className='text-[16px] font-normal'>{userInfo?.phone}</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Registration Number</span>
            <span className='text-[16px] font-normal'>{userInfo?.registration}</span>
          </div>

          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Last Name</span>
            <span className='text-[16px] font-normal'>{userInfo?.lastname}</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>National Identity Card #/ B-Form</span>
            <span className='text-[16px] font-normal'>{userInfo?.cnic}</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Gender</span>
            <span className='text-[16px] font-normal'>{userInfo?.gender}</span>
          </div>

          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>E-mail</span>
            <span className='text-[16px] font-normal'>{userInfo?.email}</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Department</span>
            <span className='text-[16px] font-normal'>{userInfo?.department?.department}</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Program</span>
            <span className='text-[16px] font-normal'>{userInfo?.program}</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Society</span>
            <span className='text-[16px] font-normal'>{userInfo?.society?.societyName}</span>
          </div>
        </div>
      </div>

      <EditProfileModal
        onEditProfile={handleSubmitChange}
        societies={societies}
        departments={departments}
        onChangeInput={handleInputChange}
        isOpen={isEdit}
        onClose={() => setIsEdit(false)}
        inputFields={inputFields}
      />
    </div>
  )
}

export default UserProfile
