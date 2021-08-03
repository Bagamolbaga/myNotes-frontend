import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './styles/Search.scss'

const Search = () => {
  const { notes } = useSelector((state) => state)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    // eslint-disable-next-line max-len
    const searchNotes = notes.filter((note) => note.title.toLowerCase().includes(inputValue.toLowerCase()))
    console.log(searchNotes)
  }, [inputValue, notes])

  const searchHandler = () => {
    // eslint-disable-next-line max-len
    // const searchNotes = notes.filter((note) => note.title.toLowerCase().includes(inputValue.toLowerCase()))
    // console.log(searchNotes)
  }

  return (
    <div className="Search__container">
      <input
        value={inputValue}
        placeholder="Search value..."
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="Search__container_input"
      />
      <button
        disabled={!inputValue}
        type="button"
        className="Search__container_btn"
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  )
}

export default Search
