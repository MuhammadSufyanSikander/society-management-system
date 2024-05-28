import React from 'react'
import Icon from './form/Icon'

function ImageCard({ image }) {
  return (
    <div className='w-[400px] h-[250px] shadow-2xl border-[1px] rounded-[4px] border-gray-10'>
      <Icon imageHeight={'w-full h-full'} image={image} />
    </div>
  )
}

export default ImageCard
