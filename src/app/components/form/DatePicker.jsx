import React from 'react'
import { DatePicker as NextUiDatePicker } from '@nextui-org/date-picker'
import moment from 'moment'

const DatePicker = ({ id, label, name, type = 'text', errorMessage = '', value, onChange }) => {
  return (
    <NextUiDatePicker
      id={id}
      isInvalid={errorMessage}
      errorMessage={errorMessage}
      name={name}
      type={type}
      label={label}
      value={value}
      onChange={value => {
        const formattedDate = moment(`${value.year}-${value.month}-${value.day}`).format('YYYY-MM-DD')

        onChange(formattedDate)
      }}
    />
  )
}

export default DatePicker
