import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './styles/Search.scss'

const Search = () => {
  const history = useHistory()
  const { user } = useSelector((state) => state)
  const [inputValue, setInputValue] = useState('')

  const searchHandler = () => {
    history.push(`/search?term=${inputValue}`)
  }

  return (
    <>
      {user.isLogin
      && (
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
      )}
    </>
  )
}

export default Search
