import { useState } from 'react'

import { getWords } from '../api/affirmationApi'

interface Words {
  affirmation: string
}

function Results() {
  const [textState, setText] = useState(null as Words | null)
  const clickHandler = () => {
    return getWords()
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
        <button onClick={clickHandler}>Get Character</button>
        <h2>{textState?.affirmation}</h2>
      </div>
    </>
  )
}

export default Results
