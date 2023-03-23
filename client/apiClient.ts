import request from 'superagent'

export function getDiseases(): Promise<string> {
  return request.get('/diseases').then((res) => res.body.disease)
}
