import { Developer } from './../models/developer';

export interface MessageResponse {
  message: string
  status: number
  response: Array<Developer>
}
