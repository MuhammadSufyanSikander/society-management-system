import React from 'react'

function Button({ onClick, disabled, bgColor = 'bg-royalblue', color = 'text-white', children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type='button'
      className={` [border:none]  py-3 pr-[24px] pl-6   rounded-[10px] flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-dodgerblue cursor-pointer disabled:bg-faintBlue disabled:cursor-not-allowed ${bgColor}`}
    >
      <div className={`flex-1 relative text-[15px] leading-[22px] font-semibold font-noto-sans  text-left shrink-0 ${color}`}>{children}</div>
    </button>
  )
}

export default Button
