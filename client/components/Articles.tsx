function Articles() {
  return (
    <>
      <div className="row">
        <div className="column">
          <img
            src="/images/photo2.avif"
            alt="Man coughing and holding hand up"
          />
          <p>Slow caching causing burping endemic among IT industry. </p>
          <a href="/">Read More...</a>
        </div>
        <div className="column">
          <img
            src="/images/photo1.avif"
            alt="Man with gloves typing on keyboard"
          />
          <p>
            Codemorphisis on the rise in people who programme with gloves on.
          </p>
          <a href="/">Read More...</a>
        </div>
        <div className="column">
          <img src="/images/photo3.avif" alt="Man holding up bunch of hair" />
          <p>Common forms of hair loss linked to using React.</p>
          <p>
            <a href="/">Read More...</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Articles
