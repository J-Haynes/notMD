import { useState } from 'react'

import { getWordDone } from '../apiClient'

// interface Words {
//   affirmation: string
// }

function Results() {
  const [textState, setText] = useState('')
  const clickHandler = () => {
    return getWordDone()
      .then((obj) => {
        console.log(obj)
        setText(obj)
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
