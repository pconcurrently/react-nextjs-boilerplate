import React from 'react'

export const useImage = (low: string, high: string, fallback?: string) => {
  const [src, setSrc] = React.useState(low)

  React.useEffect(() => {
    setSrc(low)

    const img = new Image()

    img.src = high

    img.onload = () => {
      setSrc(high)
    }

    img.onerror = () => {
      if (fallback) {
        setSrc(fallback)
      }
    }
  }, [low, high])

  return { src, blur: src === low }
}
