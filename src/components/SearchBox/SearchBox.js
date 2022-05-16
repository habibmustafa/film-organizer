import React, { useState } from 'react';
import { connect } from "react-redux"
import './SearchBox.css';
import { sortMovies } from "../../redux/action"

const SearchBox = ({ sortMovies }) => {
   const [searchLine, setSearchLine] = useState('')

   const searchLineChangeHandler = (e) => {
      setSearchLine(e.target.value)
   }
   const searchBoxSubmitHandler = (e) => {
      e.preventDefault();
   }

   return (
      <div className="search-box">
         <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
            <label className="search-box__form-label">
               Искать фильм по названию:
               <input
                  value={searchLine}
                  type="text"
                  className="search-box__form-input"
                  placeholder="Например, Shawshank Redemption"
                  onChange={searchLineChangeHandler}
               />
            </label>
            <button
               type="submit"
               className="search-box__form-submit"
               disabled={!searchLine}
               onClick={() => sortMovies(searchLine)}
            >
               Искать
            </button>
         </form>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      sortMovies: (name) => { dispatch(sortMovies(name)) }
   }
}

export default connect(undefined, mapDispatchToProps)(SearchBox)