import { config } from "services/gifs/config";

export const getTrendingSearchTerms = async () => {
  const { apiUrl, apiKey } = config
  const url = `${apiUrl}/trending/searches?api_key=${apiKey}`

  try {
    const request = await fetch(url)
    if (request.ok) {
      const requestObj = await request.json()
      return requestObj.data
    }
    return []
  } catch (error) {
    console.error(error)
    return []
  }
}