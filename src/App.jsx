import { useState } from "react";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";
import ProductForm from "./components/ProductForm";

function App() {
  const [queryString, setQueryString] = useState("");
  return (
    <>
      <SearchBar
        value={queryString}
        handleChange={(text) => setQueryString(text)}
      />
      <Products queryString={queryString} sortFields={["name"]} />
      <ProductForm />
    </>
  );
}

export default App;
