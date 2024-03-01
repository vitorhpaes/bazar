export interface CreateBookingPayload {
  startTime: Date
  guestId: string
  acceptedTerms: boolean
}

export interface CreateBookingSlotResponse {
  id: string
  startTime: string
  endTime: string
  scheduleDayId: string
}

export interface CreateBookingResponse {
  id: string
  guestId: string
  slotId: string
  createdAt: string
  updatedAt: string
  slot: CreateBookingSlotResponse
}

export interface NormalizedBookingSlot {
  id: string
  startTime: Date
  endTime: Date
  scheduleDayId: string
}

export interface NormalizedBooking extends CreateBookingResponse {
  slot: NormalizedBookingSlot
  createdAt: Date
  updatedAt: Date
}

export interface AvailableQuickSlotsResponse {
  startTime: string
  count: number
}

export interface NormalizedQuickSlot {
  startTime: Date
  count: number
}
