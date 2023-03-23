function Nav() {
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
            <img id="search-icon" src="/images/search.svg" alt="search icon" />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
