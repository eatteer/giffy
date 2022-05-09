import { useState } from "react"
import { useLocation } from "wouter"

export const SearchGifsForm = () => {
  const [, setLocation] = useLocation()
  const [keyword, setKeyword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setLocation(`/search/${keyword}`)
    /* The last search is determinated by submitting the form and no by navigating back */
    localStorage.setItem('lastKeyword', keyword)
    setKeyword('')
  }

  const onChange = (e) => {
    setKeyword(e.target.value)
  }
  
  return (
    <form className='relative' onSubmit={onSubmit}>
      <input
        className='w-full mb-4 px-4 py-2 rounded outline-none'
        type='search'
        placeholder='Search a gif'
        value={keyword}
        onChange={onChange}
      />
    </form>
  )
}