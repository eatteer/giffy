import { useIsIntersecting } from "hooks/useIsIntersecting"
import React, { Suspense } from "react"

/* Code splitting */
const TrendingSearchTerms = React.lazy(() => import("components/TrendingSearchTerms"))

export const LazyTrendingSearchTerms = () => {
  const { isIntersecting, ref } = useIsIntersecting()
  return (
    <div ref={ref}>
      {isIntersecting && (
        <Suspense fallback={null}>
          <TrendingSearchTerms />
        </Suspense>
      )}
    </div>
  )
}