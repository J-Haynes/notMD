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
        <NavLink to="/conditions">Conditions</NavLink>
        <NavLink to="/supplements">
          Drugs & <br />
          Supplements
        </NavLink>
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
