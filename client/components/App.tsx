import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
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
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
        setIsError(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [count])

  return (
    <>
      <Nav />
      <body></body>
      <h1>hi mom!</h1>
      {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Body />
      <Footer />
      <Form />
      <Articles />
      <Results />
      <Other1 />
      <Other2 />
      <Other3 />
      <Other4 />
    </>
  )
}

export default App
