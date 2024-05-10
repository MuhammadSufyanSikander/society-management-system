import React from 'react'

const buttonStyles = {
  primary: '',
}

function Input({ label, width, placeholder, isTextArea, value, style, onChange, ...rest }) {
  return (
    <div className='self-stretch flex flex-col items-start justify-start gap-[8px]'>
      <div className='self-stretch relative text-xs leading-[16px] font-semibold font-noto-sans text-gray-100 text-left'>{label}</div>
      {isTextArea ? (
        <textarea
          className={`bg-white self-stretch h-[248px] placeholder-gray-400 text-[14px] font-noto-sans relative rounded box-border min-w-[206px] py-[11px] border-[1.5px] border-solid border-gray-700 focus:outline-none  focus:border-none ${width} `}
          type='text'
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
      ) : (
        <input
          className=' bg-white self-stretch h-[42px]  text-[14px] placeholder:text-gray-400 font-noto-sans text-gray-100 relative rounded box-border min-w-[206px] py-[11px] border-[1.5px] border-solid border-gray-700'
          type='text'
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      )}
    </div>
  )
}

export default Input
