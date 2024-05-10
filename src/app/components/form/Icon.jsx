import React from 'react'
import Image from 'next/image'

function Icon({ imageWidth, imageHeight, image, ml, ...rest }) {
  return <Image className={` relative overflow-hidden cursor-pointer shrink-0  ${ml} ${imageWidth} ${imageHeight}`} loading='eager' alt='Logo' src={image} {...rest} />
}

export default Icon
