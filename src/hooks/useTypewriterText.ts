import { useEffect, useState } from 'react'

export const useTypewriterText = (
  text: string,
  typeSpeed = 28,
  pauseMs = 1600
) => {
  const [output, setOutput] = useState('')
  const [isResetting, setIsResetting] = useState(false)

  useEffect(() => {
    if (isResetting) {
      const resetTimer = window.setTimeout(() => {
        setOutput('')
        setIsResetting(false)
      }, pauseMs)
      return () => window.clearTimeout(resetTimer)
    }

    if (output.length === text.length) {
      setIsResetting(true)
      return
    }

    const timer = window.setTimeout(() => {
      setOutput(text.slice(0, output.length + 1))
    }, typeSpeed)

    return () => window.clearTimeout(timer)
  }, [isResetting, output, pauseMs, text, typeSpeed])

  return output
}
