import { useState } from 'react'
import toast from 'react-hot-toast'

const useForm = fields => {
  const [inputFields, setInputFields] = useState(fields)
  const [errorMessage, setErrorMessage] = useState(fields)

  const onChange = ({ target: { value, name } }) => {
    setInputFields(prevState => ({ ...prevState, [name]: value }))
  }

  const onSubmit = async (schema, func) => {
    try {
      setErrorMessage(fields)
      schema && (await schema?.parse(inputFields))

      if (func) func()

      return true
    } catch (error) {
      setErrorMessage({ [error.issues[0].path[0]]: error.issues[0].message })
      console.log({ title: 'Error', message: error.message })
      throw error
    }
  }

  return [inputFields, setInputFields, errorMessage, onChange, onSubmit]
}

export default useForm
