import { useState, useEffect } from 'react'
import { getDiseases, getWordDone } from '../apiClient'
import Articles from './Articles'
import Body from './Body'
import Footer from './Footer'
import Form, { FormData } from './Form'
import Nav from './Nav'
import Other1 from './Other1'
import Other2 from './Other2'
import Other3 from './Other3'
import Other4 from './Other4'
import Results from './Results'

const App = () => {
  const [disease, setDiseases] = useState('')
  const [affirmation, setAffirmation] = useState('')
  const [isError, setIsError] = useState(false)

  const getFeedback = (symptoms: FormData) => {
    getDiseases()
      .then((disease) => {
        setDiseases(disease)
      })
      .catch((err) => {
        setIsError(true)
      })
    getWordDone()
      .then((affirmation) => {
        setAffirmation(affirmation.affirmation)
      })
      .catch((err) => {
        setIsError(true)
      })
  }

  return (
    <>
      <Nav />
      {disease !== '' && <h1>{disease}</h1>}
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Generate Diseases</button>
      <Body />
      <Form />
      <Articles />
      <Results />
      <Other1 />
      <Other2 />
      <Other3 />
      <Other4 />
      <Footer />
    </>
  )
}

export default App
