import { NormalizedGuest } from '@/services/queries/guest.dto'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface GuestStoreProps {
  guest?: NormalizedGuest
  cookieConsent?: boolean
  setGuest: (guest: NormalizedGuest) => void
  setCookieConsent: (consent: boolean) => void
}

const useGuestStore = create(
  persist<GuestStoreProps>(
    set => ({
      guest: undefined,
      setGuest: (guest: NormalizedGuest) => set({ guest }),
      setCookieConsent: (consent: boolean) => set({ cookieConsent: consent })
    }),
    {
      name: 'bazar-guest-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useGuestStore
