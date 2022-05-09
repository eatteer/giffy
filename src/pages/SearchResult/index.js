import { GifList } from "components/GifList"
import { GradientText } from "components/GradientText"
import { useSearchGifs } from "hooks/useSearchGifs"

/* Renders the page getting the gif keyword from the url parameters
or the last search saved in local storage */
export const SearchResult = ({ keyword }) => {
  const { gifs, setPage } = useSearchGifs({ keyword, limit: 20 })

  const onClick = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div>
      {/* Submitting the form send the user this current page*/}
      <h2 className='mb-2 text-lg text-white font-semibold'>Results for
        <GradientText text={" " + decodeURI(keyword)} />
      </h2>
      <GifList list={gifs} />
      <button
        className="w-full text-white border border-white rounded mt-4"
        onClick={onClick}
      >Next page</button>
    </div>
  )
}