import { GifList } from "components/GifList"
import { SearchGifsForm } from "components/SearchGifsForm"
import { useSearchGifs } from "hooks/useSearchGifs"
import { GradientText } from "components/GradientText"
import TrendingSearchTerms from "components/TrendingSearchTerms"

export const Home = () => {
  /* If keyword property is not provided then the last search keyword is fetched */
  const lastKeyword = localStorage.getItem('lastKeyword') || 'random'
  const { gifs } = useSearchGifs()

  return (
    <div className="">
      {/* Submitting the form send the user to SearchResult page*/}
      <SearchGifsForm />
      <h2 className='mb-2 text-lg text-white font-semibold'>Last search for
        <GradientText text={" " + decodeURI(lastKeyword)} />
      </h2>
      <GifList list={gifs} />
      <h2 className='mt-4 mb-2 text-2xl text-white font-semibold'>Trending</h2>
      <TrendingSearchTerms />
      {/* <LazyTrendingSearchTerms /> */}
    </div>
  )
}

