import { ChangeEvent, FormEvent, useState } from 'react'

export interface FormData {
  primary: string
  secondary: string
  tertiary: string
}

interface Props {
  onSubmit: (data: FormData) => void
}

function Form({ onSubmit }: Props) {
  const [formData, setFormData] = useState({
    primary: '',
    secondary: '',
    tertiary: '',
  })
  const [valid, setValid] = useState(false)

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const onChangeValidate = (evt: ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value
    setValid(Boolean(val))
    setFormData({ ...formData, primary: val })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="primary">Primary Symptom: </label>
      <input
        type="text"
        name="primary"
        value={formData.primary}
        id="primary"
        onChange={onChangeValidate}
      />
      <label htmlFor="secondary">Secondary Symptom: </label>
      <input
        type="text"
        name="secondary"
        value={formData.secondary}
        id="secondary"
        onChange={onChange}
      />
      <label htmlFor="tertiary">Tertiary Symptom: </label>
      <input
        type="text"
        name="tertiary"
        value={formData.tertiary}
        id="tertiary"
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
