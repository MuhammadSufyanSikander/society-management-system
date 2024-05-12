import React from 'react'
import { Button as NextUiButton } from '@nextui-org/react'

function Button({ loading = false, color = 'primary', variant = 'shadow', loadingLabel = 'loading', onClick, children, ...rest }) {
  return (
    <NextUiButton
      onClick={e => {
        e.preventDefault()
        onClick && onClick()
      }}
      color={color}
      variant={variant}
      className='w-full'
      isLoading={loading}
      {...rest}
    >
      {loading ? loadingLabel : children}
    </NextUiButton>
  )
}

export default Button
