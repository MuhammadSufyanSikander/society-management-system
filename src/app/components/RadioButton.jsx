import React from 'react'
import { RadioGroup, Radio } from '@nextui-org/react'

export default function RadioButton({ selected, onSelectRadio }) {
  return (
    <div className='flex gap-5'>
      <RadioGroup label='Feedback type' name='feedbackType' value={selected} onValueChange={value => onSelectRadio({ target: { name: 'feedbackType', value } })}>
        <Radio value='suggestion'>Suggestion</Radio>
        <Radio value='question'>Questions</Radio>
      </RadioGroup>
    </div>
  )
}
