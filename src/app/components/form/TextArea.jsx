import React from 'react'
import { Textarea as NextUiTextArea } from '@nextui-org/react'

const TextArea = ({ id, label, name, type = 'text', value, onChange, errorMessage = '', ...rest }) => {
  return <NextUiTextArea id={id} name={name} type={type} label={label} value={value} isInvalid={errorMessage} errorMessage={errorMessage} onChange={onChange} {...rest} />
}

export default TextArea
