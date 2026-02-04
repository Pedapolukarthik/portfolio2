import { useEffect, useState } from 'react'

type Options = {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseMs?: number
}

export const useTypewriter = ({
  words,
  typeSpeed = 70,
  deleteSpeed = 35,
  pauseMs = 1200,
}: Options) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length] ?? ''
    const nextText = isDeleting
      ? current.slice(0, Math.max(0, text.length - 1))
      : current.slice(0, text.length + 1)

    const delay = isDeleting ? deleteSpeed : typeSpeed
    const timer = window.setTimeout(() => {
      setText(nextText)

      if (!isDeleting && nextText === current) {
        window.setTimeout(() => setIsDeleting(true), pauseMs)
      }

      if (isDeleting && nextText.length === 0) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleteSpeed, index, isDeleting, pauseMs, text.length, typeSpeed, words])

  return text
}
