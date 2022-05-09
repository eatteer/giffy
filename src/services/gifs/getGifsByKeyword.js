import { config } from "services/gifs/config"

export const getGifsByKeyword = async ({ keyword, limit, page }) => {
  const { apiUrl, apiKey } = config
  const offset = limit * page + page
  const url = `${apiUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}`

  try {
    const response = await fetch(url)

    if (response.ok) {
      const responseObj = await response.json()
      const { data } = responseObj

      const gifs = data.map(gif => {
        const { id, title, images } = gif
        const { url } = images.downsized_medium
        return { id, title, url }
      })

      return gifs
    }

    return []
  } catch (error) {
    console.error(error)
    return []
  }
}