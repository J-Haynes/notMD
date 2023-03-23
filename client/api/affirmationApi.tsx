import request from 'superagent'

export function getWords() {
  return request
    .get('https://www.affirmations.dev/')
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err messages: ' + err)
    })
}
