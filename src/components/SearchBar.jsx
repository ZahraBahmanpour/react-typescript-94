const SearchBar = ({ value, handleChange }) => {
  const handleInputChange = (e) => {
    handleChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="search here..."
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
