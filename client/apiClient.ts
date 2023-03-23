import request from 'superagent'

interface AffirmationResponse {
  affirmation: string
}

export function getDiseases(): Promise<string> {
  return request.get('/diseases').then((res) => res.body.disease)
}

// export function getConditions(): Promise<string> {
//   return request.get('/conditions').then((res) => res.body.conditions)
// }

export function getWordDone(): Promise<AffirmationResponse> {
  return request.get('/affirmations').then((res) => res.body)
}
