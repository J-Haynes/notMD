import { useState, useEffect } from 'react'
import { getWordDone } from '../apiClient'

interface AffirmationResponse {
  affirmation: string
}

export default function Results() {
  const [textState, setText] = useState<AffirmationResponse | undefined>()

  useEffect(() => {
    getWordDone()
      .then((response) => {
        setText(response)
      })
      .catch((err) => {
        console.log('Err messages: ' + err)
      })
  }, [])

  return (
    <>
      <div>
        <h2>{textState?.affirmation}</h2>
      </div>
    </>
  )
}
