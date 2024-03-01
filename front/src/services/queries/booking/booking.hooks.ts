import {
  fetchAvailableDays,
  fetchAvailableSlots,
  fetchSubmitBooking
} from '@/services/queries/booking/booking.queries'
import { useMutation, useQuery } from 'react-query'
import { normalizeBooking, normalizeSlot } from './booking.normalizer'
import { useGuestStore } from '@/store'
import { CreateBookingPayload } from './booking.dto.d'

export const useSubmitBooking = () => {
  const { setBooking } = useGuestStore()
  return useMutation(
    ['submit-booking'],
    (formData: CreateBookingPayload & { acceptedTerms: boolean }) => {
      return fetchSubmitBooking({
        guestId: formData.guestId,
        startTime: formData.startTime,
        acceptedTerms: formData.acceptedTerms
      })
    },
    {
      onSuccess({ data }) {
        const normalizedBooking = normalizeBooking(data)
        setBooking(normalizedBooking)
      }
    }
  )
}

export const useAvailableDays = () =>
  useQuery(
    ['available-days'],
    async () => {
      const { data } = await fetchAvailableDays()

      return data.map(dateString => new Date(dateString))
    },
    {
      cacheTime: 1000 * 60 * 20,
      staleTime: 1000 * 60 * 10
    }
  )

export const useAvailableSlots = (date: Date) =>
  useQuery(
    ['available-slots', date],
    async () => {
      const { data: availableSlots } = await fetchAvailableSlots(date)

      return availableSlots.map(normalizeSlot)
    },
    {
      cacheTime: 1000 * 5,
      staleTime: 1000 * 5,
      refetchIntervalInBackground: true,
      refetchInterval: 1000 * 5
    }
  )
