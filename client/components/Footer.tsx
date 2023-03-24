import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="info-div">
        <p className="discosure">NotMD is not responsible for anything lol</p>
        <a href="https://google.com">See more Info</a>
      </div>
      <div className="title">
        <NavLink to="/">
          <h1>
            <i>not</i>
            <strong>MD</strong>
          </h1>
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer

//WebMD does not provide medical advice, diagnosis or treatment.
