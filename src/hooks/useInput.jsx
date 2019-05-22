import { useState } from 'react';

const useInput = (initialValues,callback) => {

  const [values, setValues] = useState(initialValues)

  const handleSubmit = event => {
    if (event) event.preventDefault()
      callback()
  }

  const handleChange = event => {
    event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}

export default useInput;