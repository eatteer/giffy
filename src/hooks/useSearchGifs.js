import { useEffect, useState } from "react"
import { getGifsByKeyword } from "services/gifs/getGifsByKeyword"

export const useSearchGifs = ({ keyword = null, limit = 10 } = {}) => {
  /* If no keyword property is passed then the lastKeyword stored
  in localStorage is used to fetch the gifs, otherwise the keyword to use will
  be "random" */

  const [gifs, setGifs] = useState([])

  /* By default the page result is zero but this value
  can be changed by setPage handler exposed by the hook */
  const [page, setPage] = useState(0)

  const lastKeyword = localStorage.getItem('lastKeyword')
  const defaultKeyword = 'random'

  const query = keyword || lastKeyword || defaultKeyword

  useEffect(() => {
    const fetchGifsByKeyword = async () => {
      const gifs = await getGifsByKeyword({ keyword: query, limit, page })
      /* The first time, prev state is an empty array */
      setGifs(prev => [...prev, ...gifs])
    }
    fetchGifsByKeyword()

    /* If user makes a search for another page, the effect is called again */
  }, [query, limit, page])

  return { gifs, setPage }
}