import React, { useState } from 'react'
import { DatePicker } from '@nextui-org/react'
import { parseAbsoluteToLocal, parseZonedDateTime } from '@internationalized/date'
import moment from 'moment'

export default function DateTimeInput({ label, name, onChange, value = '2021-04-07T18:45:22Z' }) {
  const handleDateChange = value => {
    const formattedDate = moment(value.toDate()).format('YYYY-MM-DDTHH:mm:ss[Z]')

    onChange(formattedDate)
  }

  return (
    <div className='w-full max-w-xl flex flex-row gap-4'>
      <DatePicker
        name={name}
        className='w-full'
        granularity='second'
        label={label}
        value={parseAbsoluteToLocal(value)}
        onChange={value => {
          handleDateChange(value)
        }}
      />
    </div>
  )
}
