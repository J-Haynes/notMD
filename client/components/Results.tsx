interface Props {
  disease: string
  affirmation: string
  onReset: () => void
}

export default function Results({ disease, affirmation, onReset }: Props) {
  return (
    <>
      <div className="results-div">
        <h2 className="disease">
          Our qualified<span className="red">*</span> doctors have analysed your
          symptoms and your diagnosis is:{' '}
        </h2>
        <p className="disease">{disease}</p>
        <h2 className="affirmation">Our recommended course of action is: </h2>
        <p className="affirmation">{affirmation}</p>
        <div className="result-button-div">
          <button className="button-18" onClick={onReset}>
            Get a new diagnosis
          </button>
        </div>
      </div>
    </>
  )
}
