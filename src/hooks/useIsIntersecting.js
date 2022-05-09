import { useEffect, useRef, useState } from "react"

export const useIsIntersecting = ({ rootMargin = '200px' } = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const callback = (entries, observer) => {
      const element = entries[0]
      /* Some times because a component is part of an UI that can renders components
      asynchronously, when the observer is created and starts to observe,
      may the async compontents are still not rendered, this could cause component
      instantly intersects with viewport */
      if (element.isIntersecting) {
        console.log("Is intersecting")
        setIsIntersecting(true)
      }
    }

    const options = {
      rootMargin
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(ref.current)

    return () => {
      observer?.disconnect()
    }
  }, [rootMargin])

  /* useEffect is called once the ui is rendered, that is why ref is not null when is used */
  return { isIntersecting, ref }
}