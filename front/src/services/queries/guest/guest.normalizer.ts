import { NormalizedGuest, CreateGuestResponse } from './guest.dto.d'

export function normalizeGuest(response: CreateGuestResponse): NormalizedGuest {
  return {
    ...response,
    birthDate: new Date(response.birthDate),
    createdAt: new Date(response.createdAt),
    updatedAt: new Date(response.updatedAt)
  }
}
