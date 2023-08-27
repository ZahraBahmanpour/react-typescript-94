import { useState } from "react";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";
import ProductForm from "./components/ProductForm";

function App() {
  const [queryString, setQueryString] = useState<string>("");
  return (
    <>
      <SearchBar
        value={queryString}
        handleChange={(text: string) => setQueryString(text)}
      />
      <Products queryString={queryString} sortField={"price"} />
      <ProductForm />
    </>
  );
}

export default App;
