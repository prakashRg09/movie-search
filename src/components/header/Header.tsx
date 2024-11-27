import "./header.css";
import searchIcon from "../../assets/icons/ic_search.svg";
import { useEffect, useState } from "react";

const Header = ({ onSearch }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <header className="flex align-center justify-between">
      <h2>The Movie Search</h2>
      <div className="flex searchbar">
        <img src={searchIcon} alt="Search Icon" />
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
