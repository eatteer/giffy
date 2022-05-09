import { useContext } from "react"
import { CurrentGifContext } from "contexts/CurrentGifContext"

export const Detail = () => {
  const gifContext = useContext(CurrentGifContext)

  return (
    <div>
      <img className="rounded" src={gifContext.currentGif.url} alt={gifContext.currentGif.title} />
    </div>
  )
}