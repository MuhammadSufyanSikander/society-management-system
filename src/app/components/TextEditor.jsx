'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const TextEditor = ({ value, onChange, name, label = 'Description' }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  }

  const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image']
  return (
    <div className='text-editor'>
      {/* <span className='text-[16px] mb-[5px]'>{label}</span> */}
      <ReactQuill
        placeholder={label}
        modules={modules}
        formats={formats}
        name={name}
        theme='snow'
        className='h-[200px] bg-gray-5 quill rounded-2xl quill-toolbar overflow-scroll'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextEditor
