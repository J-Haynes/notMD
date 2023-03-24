import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="info-div">
        <p className="discosure">
          NotMD does not provide medical advice, diagnosis or treatment. All
          information that this website provides is purely fictional and not to
          be taking seriously. Information provided is for entertainment
          purposes only, please do not use the information to treat any
          illnesses or diseases. Dont be dumb lol. Information provided is not a
          substitute for professional medical advice. Seek the advice of a
          facilitator or if that fails, your GP. Use of this website is subject
          to aggreement of our use policy and is to be used at your own risk.
          NotMD reserves the right to change this policy at any time.
        </p>
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

//NotMD does not provide medical advice, diagnosis or treatment.
