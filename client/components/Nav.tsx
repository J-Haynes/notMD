import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <nav>
        <div className="title">
          <NavLink to="/">
            <h1>
              <i>not</i>
              <strong>MD</strong>
            </h1>
          </NavLink>
        </div>
        <NavLink to="/">Home</NavLink>
        <p>Conditions</p>
        <p>
          Drugs & <br />
          Supplements
        </p>
        <p>Well-Being</p>
        <p>
          Symptom <br />
          Checker
        </p>
        <p>
          Find a <br />
          Doctor
        </p>
        <p>More</p>
        <p>Privacy & More</p>
        <div className="search">
          <img id="search-icon" src="/images/search.svg" alt="search icon" />
        </div>
      </nav>
    </header>
  )
}

export default Nav
