import { memo, useEffect, useRef } from "react";

const SearchBox = ({ onHandleClick, searchText }) => {
  const inputRef = useRef(null);
  console.log("searchBox called");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      className="search-box"
      value={searchText}
      onChange={onHandleClick}
    />
  );
};

export default memo(SearchBox);
