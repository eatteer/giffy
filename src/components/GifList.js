import { Gif } from "components/Gif"
import Masonry from "react-masonry-css"

const breakpoints = {
  default: 2
}

export const GifList = ({ list }) => {
  return (
    <Masonry className="flex ml-[-8px]" breakpointCols={breakpoints}>
      {list[0] && list.map(({ id, url, title }) => {
        return <Gif key={id} id={id} url={url} title={title} />
      })}
      <div id="bottom"></div>
    </Masonry>
  )
}