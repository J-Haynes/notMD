import request from 'superagent'

export function getDiseases(): Promise<string> {
  return request.get('/diseases').then((res) => res.body.diseases)
}

export function getConditions(): Promise<string> {
  return request.get('/conditions').then((res) => res.body.conditions)
}
