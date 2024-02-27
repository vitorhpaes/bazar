import { NormalizedGuest } from '@/services/queries/guest.dto'

export interface GuestForm
  extends Omit<NormalizedGuest, 'id' | 'createdAt' | 'updatedAt'> {}
