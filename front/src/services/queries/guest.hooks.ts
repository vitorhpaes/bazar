import { GuestForm } from '@/pages/BookingPage/components/form/guest.form'
import { normalizeGuest } from '@/services/queries/guest.normalizer'
import { fetchCreateGuest } from '@/services/queries/guest.queries'
import { useGuestStore } from '@/store'
import { useMutation } from 'react-query'

export const useCreateGuest = () => {
  const { setGuest: setGuestStore } = useGuestStore()
  return useMutation(
    ['create-guest'],
    (formData: GuestForm) => fetchCreateGuest(formData),
    {
      onSuccess({ data }) {
        const normalizedGuest = normalizeGuest(data)
        setGuestStore(normalizedGuest)
      }
    }
  )
}
