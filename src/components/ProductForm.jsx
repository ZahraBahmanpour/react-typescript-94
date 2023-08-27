import { useState, useRef } from "react";

const ProductForm = () => {
  const [error, setError] = useState("");
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const countRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current?.value === "" || priceRef.current?.value === "") {
      setError("All fields are mandatory");
    }

    setError("");

    const postData = async (newProduct) => {
      await fetch("https://6300a18859a8760a757d441c.mockapi.io/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
    };

    postData({
      name: nameRef.current.value,
      price: priceRef.current.value,
      countInStock: Number(countRef.current.value),
    });
  };

  return (
    <>
      <h2>Create Product</h2>
      {error && <div>{error}</div>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>name</label>
        <input type="text" placeholder="Enter Product Name" ref={nameRef} />
        <label>Price</label>
        <input type="text" placeholder="Enter Price" ref={priceRef} />
        <label>Count</label>
        <input type="text" placeholder="Enter Count" ref={countRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ProductForm;
