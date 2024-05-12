import React from 'react'
import { Select as NextUiSelect, SelectItem as NextUiSelectItem } from '@nextui-org/react'

const Select = ({ name, items = [], label, onChange, value, errorMessage = '' }) => {
  return (
    <NextUiSelect name={name} label={label} onChange={onChange} selectedKeys={[value]} isInvalid={errorMessage} errorMessage={errorMessage}>
      {items.map(item => (
        <NextUiSelectItem key={item.value} value={item.value}>
          {item.label}
        </NextUiSelectItem>
      ))}
    </NextUiSelect>
  )
}

export default Select
