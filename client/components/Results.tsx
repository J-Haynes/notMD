interface Props {
  disease: string
  affirmation: string
  onReset: () => void
}

export default function Results({ disease, affirmation, onReset }: Props) {
  return (
    <>
      <div>
        <h2>You have {disease}.</h2>
        <p>{affirmation}</p>
        <button onClick={onReset}>Get a new diagnosis</button>
      </div>
    </>
  )
}
