import { GuestForm } from '@/pages/BookingPage/components/CreateGuestForm/guest.form'
import { normalizeGuest } from './guest.normalizer'
import { fetchCreateGuest } from './guest.queries'
import { useGuestStore } from '@/store'
import { removeMask } from '@/utils/removeMask'
import { useMutation } from 'react-query'

export const useCreateGuest = () => {
  const { setGuest: setGuestStore } = useGuestStore()
  return useMutation(
    ['create-guest'],
    ({ phoneNumber, ...formData }: GuestForm) =>
      fetchCreateGuest({
        ...formData,
        phoneNumber: removeMask(phoneNumber)
      }),
    {
      onSuccess({ data }) {
        const normalizedGuest = normalizeGuest(data)
        setGuestStore(normalizedGuest)
      }
    }
  )
}
