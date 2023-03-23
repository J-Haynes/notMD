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
      <header>
        <nav>
          <div className="title">
            <h1>
              <i>not</i>
              <strong>MD</strong>
            </h1>
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Conditions</li>
              <li>Drugs & Supplements</li>
              <li>Well-Being</li>
              <li>Symptom Checker</li>
              <li>Find a Doctor</li>
              <li>More</li>
              <li>Privacy & More</li>
            </ul>
          </div>
          <div className="search">
            <img src="/images/search.svg" alt="search icon" />
          </div>
        </nav>
      </header>
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
      <Nav />
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
