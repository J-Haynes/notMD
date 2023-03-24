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
    valid && onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <img src="/images/funny-hand.jpg" alt="hand-haha" />
      <div className="form-div">
        <h1 className="">What are your symptoms?</h1>
        <div className={valid ? '' : 'invalid'}>
          <label htmlFor="primary" className={valid ? '' : 'invalid'}>
            Primary Symptom:{' '}
          </label>
          <input
            type="text"
            name="primary"
            value={formData.primary}
            id="primary"
            onChange={onChangeValidate}
            className={valid ? '' : 'invalid'}
          />
          {valid || (
            <p className="invalid red">Please enter at least one symptom</p>
          )}
        </div>
        <div>
          <label htmlFor="secondary">Secondary Symptom: </label>
          <input
            type="text"
            name="secondary"
            value={formData.secondary}
            id="secondary"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="tertiary">Tertiary Symptom: </label>
          <input
            type="text"
            name="tertiary"
            value={formData.tertiary}
            id="tertiary"
            onChange={onChange}
          />
        </div>
        <div>
          <button className="button-18" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
