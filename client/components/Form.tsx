export interface FormData {
  primary: string
  secondary: string
  tertiary: string
}

interface Props {
  onSubmit: (data: FormData) => void
}

function Form({ onSubmit }: Props) {
  return (
    <form onSubmit={}>
      <label htmlFor="primary">Primary Symptom: </label>
      <label htmlFor="secondary">Secondary Symptom: </label>
      <label htmlFor="tertiary">Tertiary Symptom: </label>
    </form>
  )
}

export default Form
