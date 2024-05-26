import React from 'react'

function ViewDecription({ heading, text }) {
  return (
    <div>
      <h1 className='text-[14px] text-gray-50'>{heading}:</h1>
      <p className='text-royalblue ml-[10px] text-[16px] font-noto-sans'>{text}</p>
    </div>
  )
}

export default ViewDecription
