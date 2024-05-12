import React from 'react'
import { Input as NextUiInput } from '@nextui-org/input'

function Input({ id, label, name, type = 'text', value, onChange, errorMessage = '', ...rest }) {
  return <NextUiInput id={id} name={name} type={type} label={label} value={value} isInvalid={errorMessage} errorMessage={errorMessage} onChange={onChange} {...rest} />
}

export default Input
