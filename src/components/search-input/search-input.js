import React from 'react';

const SearchInput = ({ title, searchChange, value }) => {
  return (
    <div>
    <label>
      {title}
      <input type='text' value={value}
        onChange={(event) => {searchChange(event.target.value)}}></input>
    </label>
  </div>
  )
}

export default SearchInput;