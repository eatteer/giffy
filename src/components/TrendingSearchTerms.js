import { useEffect, useState } from "react"
import { getTrendingSearchTerms } from "services/gifs/getTrendingSearchTerms"
import { Link } from "wouter"

const TrendingSearchTerms = () => {
  const [trendingSearchTerms, setTrendingSearchTerms] = useState([])

  useEffect(() => {
    const fetchTrendingSearchTerms = async () => {
      const trendingSearchTerms = await getTrendingSearchTerms()
      setTrendingSearchTerms(trendingSearchTerms)
    }
    fetchTrendingSearchTerms()
  }, [])

  return (
    <ul>
      {trendingSearchTerms[0] && trendingSearchTerms.map(term => {
        const color = Math.floor(Math.random() * 16777215).toString(16)
        return (
          <li
            key={term}
            style={{ borderColor: `#${color}` }}
            className="inline-block m-1 py-1 px-2 text-white text-xs border rounded-lg">
            <Link to={`/search/${term}`}>
              {term}
            </Link>
          </li>
        )
      })}
    </ul >
  )
}

export default TrendingSearchTerms