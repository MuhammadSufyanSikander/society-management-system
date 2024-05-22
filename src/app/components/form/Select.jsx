import React from 'react'
import { Select as NextUiSelect, SelectItem as NextUiSelectItem } from '@nextui-org/react'

const Select = ({ obj = 'label', objValue = 'value', name, items = [], label, onChange, value, errorMessage = '' }) => {
  console.log('sadsadsdasdasd', objValue, value)
  return (
    <NextUiSelect name={name} label={label} onChange={onChange} selectedKeys={[value]} isInvalid={errorMessage} errorMessage={errorMessage}>
      {items.map(item => (
        <NextUiSelectItem id={item?.id} key={item[objValue]} value={item[objValue]}>
          {item[obj]}
        </NextUiSelectItem>
      ))}
    </NextUiSelect>
  )
}

export default Select
