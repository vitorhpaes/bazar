import { NormalizedBooking } from '@/services/queries/booking/booking.dto'
import { NormalizedGuest } from '@/services/queries/guest/guest.dto'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface GuestStoreProps {
  guest?: NormalizedGuest
  booking?: NormalizedBooking
  cookieConsent?: boolean
  setGuest: (guest: NormalizedGuest) => void
  setBooking: (booking: NormalizedBooking) => void
  setCookieConsent: (consent: boolean) => void
}

const useGuestStore = create(
  persist<GuestStoreProps>(
    set => ({
      setBooking: (booking: NormalizedBooking) => set({ booking }),
      setCookieConsent: (consent: boolean) => set({ cookieConsent: consent }),
      setGuest: (guest: NormalizedGuest) => set({ guest })
    }),
    {
      name: 'bazar-guest-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useGuestStore
