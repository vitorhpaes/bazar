import { useEffect } from 'react'
import { useState } from 'react'
import { MOBILE_BREAKPOINT } from '@/constants/mobile-breakpoint'

function verifyIsMobile() {
  const maxWidth = MOBILE_BREAKPOINT
  return window.matchMedia(`(max-width: ${maxWidth}px)`).matches
}

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(verifyIsMobile())

  useEffect(() => {
    const handleResize = () => setIsMobile(verifyIsMobile())

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
