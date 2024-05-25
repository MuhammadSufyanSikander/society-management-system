import React from 'react'
import { RadioGroup, Radio } from '@nextui-org/react'

export default function RadioButton() {
  const [selected, setSelected] = React.useState('london')

  return (
    <div className='flex gap-5'>
      <RadioGroup label='Feedback type' value={selected} onValueChange={setSelected}>
        <Radio value='buenos-aires'>Suggestion</Radio>
        <Radio value='sydney'>Questions</Radio>
      </RadioGroup>
    </div>
  )
}
