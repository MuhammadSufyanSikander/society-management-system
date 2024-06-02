'use client'
import RadioButton from '@/app/components/RadioButton'
import Input from '@/app/components/form/Input'
import TextArea from '@/app/components/form/TextArea'
import useForm from '@/app/hooks/useForm'
import { getSociety } from '@/app/redux/reducers/society'
import { getOwners, sendEmail } from '@/app/redux/reducers/user'
import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

function FeedbackForm() {
  const [inputFields, setInputFields, errorMessage, onChange, onSubmit] = useForm({ feedbackType: 'suggestion', feedback: '', firstname: '', lastname: '', email: '' })
  const dispatch = useDispatch()
  const { owners } = useSelector(state => state.user)
  const { token, userInfo } = useSelector(state => state.auth)

  const handleChangeFeedback = e => {
    onChange({ target: { name: e.target.name, value: e.target.value } })
  }

  const handleSubmitFeedback = () => {
    onSubmit(null, () => {
      dispatch(
        sendEmail({
          data: {
            from: inputFields?.email,
            subject: `${inputFields?.feedbackType} from ${inputFields?.firstname} ${inputFields?.lastname}`,
            recipients: owners.map(owner => owner.email),
            text: inputFields?.feedback,
          },
        }),
      )
    })
  }

  React.useEffect(() => {
    dispatch(getOwners())
  }, [])

  return (
    <div className='w-full py-[30px] bg-gray-10  flex items-center justify-center'>
      <div className='border-[1px] bg-white shadow-2xl rounded-[4px]'>
        <div className='p-[25px]'>
          <h1 className='text-[30px] font-semibold'>Feedback Form</h1>
          <p className='text-[16px] text-gray-50'>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</p>
        </div>
        <Divider />
        <div className='p-[25px]'>
          <div>
            <RadioButton selected={inputFields?.feedbackType} onSelectRadio={handleChangeFeedback} />
          </div>
          <div className='flex mt-[20px] flex-col gap-[30px]'>
            <div>
              <h1>Describe your feedback:</h1>
              <TextArea label={'Message...'} className='mt-[10px]' name={'feedback'} onChange={handleChangeFeedback} value={inputFields?.feedback} />
            </div>
            <div className='flex gap-3'>
              <Input label={'First Name'} name={'firstname'} onChange={handleChangeFeedback} value={inputFields?.firstname} />
              <Input label={'Last Name'} name={'lastname'} onChange={handleChangeFeedback} value={inputFields?.lastname} />
            </div>
            <Input className='w-[49.5%]' label={'E-mail'} name={'email'} onChange={handleChangeFeedback} value={inputFields?.email} />
          </div>
          <Divider className='mt-[20px]' />
          <div className='flex mt-[20px] justify-center w-full'>
            <Button className='px-[30px] font-noto-sans text-[20px]' color='primary' onClick={handleSubmitFeedback}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackForm
