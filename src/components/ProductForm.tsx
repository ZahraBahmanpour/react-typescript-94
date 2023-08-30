import { useState, useRef, FC, FormEvent } from "react";
import Product from "../models/ProductModel";

const ProductForm: FC = () => {
  const [error, setError] = useState<string>("");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const countRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current?.value === "" || priceRef.current?.value === "") {
      setError("All fields are mandatory");
    }

    setError("");

    const postData = async (newProduct: Partial<Product>) => {
      await fetch("https://6300a18859a8760a757d441c.mockapi.io/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
    };

    postData({
      name: (nameRef.current as HTMLInputElement).value,
      price: (priceRef.current as HTMLInputElement).value,
      countInStock: Number((countRef.current as HTMLInputElement).value),
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
