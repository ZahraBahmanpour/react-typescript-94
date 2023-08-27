import { ChangeEvent, FC } from "react";

interface Props {
  value: string | undefined;
  handleChange: (value: string) => void;
}
const SearchBar: FC<Props> = ({ value, handleChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
