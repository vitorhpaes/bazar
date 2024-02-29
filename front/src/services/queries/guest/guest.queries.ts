import bazarRequest from '@/services/request'
import { CreateGuestPayload, CreateGuestResponse } from './guest.dto.d'

export function fetchCreateGuest(guest: CreateGuestPayload) {
  return bazarRequest.post<CreateGuestResponse>('/guest', guest)
}
