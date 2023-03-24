import { useState } from 'react'
import { getDiseases, getWordDone } from '../apiClient'
import Articles from './Articles'
import Footer from './Footer'
import Form, { FormData } from './Form'
import Nav from './Nav'
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
        console.log(err.message)
        setIsError(true)
      })
    getWordDone()
      .then((affirmation) => {
        setAffirmation(affirmation.affirmation)
      })
      .catch((err) => {
        console.log(err.message)
        setIsError(true)
      })
  }

  const clearFeedback = () => {
    setAffirmation('')
    setDiseases('')
  }

  return (
    <>
      <Nav />
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving some information.
        </p>
      )}
      {disease && affirmation ? (
        <Results
          disease={disease}
          affirmation={affirmation}
          onReset={clearFeedback}
        />
      ) : (
        <Form onSubmit={getFeedback} />
      )}

      <Articles />
      <Footer />
    </>
  )
}

export default App
