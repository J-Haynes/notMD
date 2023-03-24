import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { getDiseases, getWordDone } from '../apiClient'
import Articles from './Articles'
import Footer from './Footer'
import Form, { FormData } from './Form'
import Nav from './Nav'
import Results from './Results'
import Supplements from './Supplements'

const App = () => {
  const [disease, setDiseases] = useState('')
  const [affirmation, setAffirmation] = useState('')
  const [isError, setIsError] = useState(false)
  const nav = useNavigate()

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
    nav('/result')
  }

  const clearFeedback = () => {
    setAffirmation('')
    setDiseases('')
    nav('/')
  }

  return (
    <>
      <Nav />
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving some information.
        </p>
      )}
      <Routes>
        <Route path="/" element={<Form onSubmit={getFeedback} />} />
        <Route
          path="/result"
          element={
            <Results
              disease={disease}
              affirmation={affirmation}
              onReset={clearFeedback}
            />
          }
        />
        <Route path="/supplements" element={<Supplements />} />
      </Routes>
      <Articles />
      <Footer />
    </>
  )
}

export default App
