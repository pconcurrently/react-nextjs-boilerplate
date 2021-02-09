import { useEffect, useState } from 'react'

const useGetIsMobile = (isMobileSsr: boolean, isMobileCsr: boolean) => {
  const [isMobile, setIsMobile] = useState(isMobileSsr)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(isMobileCsr)
    } else {
      setIsMobile(isMobileSsr)
    }
  }, [isMobileCsr])

  return isMobile
}

export { useGetIsMobile }
