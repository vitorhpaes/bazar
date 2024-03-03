import { normalizeGuest } from './guest.normalizer'
import { fetchCreateGuest } from './guest.queries'
import { useGuestStore } from '@/store'
import { removeMask } from '@/utils/removeMask'
import { useMutation } from 'react-query'
import { GuestForm } from '@/pages/public/booking/BookingPage/components/CreateGuestForm/guest.form'
import { parseDateString } from '@/utils/date'

export const useCreateGuest = () => {
  const { setGuest: setGuestStore } = useGuestStore()
  return useMutation(
    ['create-guest'],
    ({ phoneNumber, birthDate, ...formData }: GuestForm) =>
      fetchCreateGuest({
        ...formData,
        birthDate: new Date(parseDateString(birthDate)),
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
