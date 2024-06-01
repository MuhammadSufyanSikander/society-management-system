'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const TextEditor = () => {
  const [value, setValue] = useState('')

  const handleChange = content => {
    setValue(content)
  }

  return (
    <div className='text-editor'>
      <span className='text-[12px] mb-[2px]'>Description</span>
      <ReactQuill className='min-h-full bg-gray-5  rounded-2xl' value={value} onChange={handleChange} />
    </div>
  )
}

export default TextEditor
