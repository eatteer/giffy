import { useContext } from "react"
import { Link } from "wouter"
import { CurrentGifContext } from "contexts/CurrentGifContext"

export const Gif = ({ id, url, title }) => {
  const gifContext = useContext(CurrentGifContext)
  const onClick = (e) => {
    const currentGif = {
      id,
      url,
      title
    }
    gifContext.setCurrentGif(currentGif)
  }
  return (
    <Link to={`/gif/${id}`} onClick={onClick}>
      <img className="mb-2 pl-2 rounded" src={url} alt={title} />
    </Link>
  )
}