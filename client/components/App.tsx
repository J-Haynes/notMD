import { useState, useEffect } from 'react'
import { getDiseases } from '../apiClient'
import Articles from './Articles'
import Body from './Body'
import Footer from './Footer'
import Form from './Form'
import Nav from './Nav'
import Other1 from './Other1'
import Other2 from './Other2'
import Other3 from './Other3'
import Other4 from './Other4'
import Results from './Results'

const App = () => {
  const [disease, setDiseases] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (count > 0) {
      getDiseases()
        .then((disease) => {
          // console.log(disease)
          setDiseases(disease)
          setIsError(false)
        })
        .catch((err) => {
          console.log(err)
          setIsError(true)
        })
    }
  }, [count])

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
