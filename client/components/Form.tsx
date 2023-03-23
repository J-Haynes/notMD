import { ChangeEvent, useState } from 'react'

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

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {}

  return (
    <form onSubmit={() => onSubmit(formData)}>
      <label htmlFor="primary">Primary Symptom: </label>
      <input type="text" name="primary" value={formData.primary} id="primary" />
      <label htmlFor="secondary">Secondary Symptom: </label>
      <input
        type="text"
        name="secondary"
        value={formData.secondary}
        id="secondary"
      />
      <label htmlFor="tertiary">Tertiary Symptom: </label>
      <input
        type="text"
        name="tertiary"
        value={formData.tertiary}
        id="tertiary"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
