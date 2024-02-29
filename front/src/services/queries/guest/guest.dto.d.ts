export interface CreateGuestPayload {
  name: string
  document: string
  phoneNumber: string
  birthDate: Date
}

export interface CreateGuestResponse {
  id: string
  name: string
  document: string
  birthDate: string
  phoneNumber: string
  createdAt: string
  updatedAt: string
}

export interface NormalizedGuest extends CreateGuestResponse {
  id: string
  name: string
  document: string
  birthDate: Date
  phoneNumber: string
  createdAt: Date
  updatedAt: Date
}
