import { useState } from 'react'
import { getWordDone } from '../apiClient'

interface AffirmationResponse {
  affirmation: string
}

function Results() {
  const [textState, setText] = useState<AffirmationResponse | undefined>()

  const clickHandler = () => {
    return getWordDone()
      .then((response) => {
        setText(response)
      })
      .catch((err) => {
        console.log('Err messages: ' + err)
      })
  }

  return (
    <>
      <div>
        <button onClick={clickHandler}>Get Feedback</button>
        <h2>{textState?.affirmation}</h2>
      </div>
    </>
  )
}

export default Results
