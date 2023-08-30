import { FC, useEffect, useState } from "react";
import Product from "../models/ProductModel";
import ProductResponse from "../models/ProductResponse";

interface Props {
  queryString: string;
  sortField: keyof Product;
}

const Products: FC<Props> = ({ queryString, sortField }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://6300a18859a8760a757d441c.mockapi.io/products?name=${queryString}`
        );
        const data: ProductResponse = await response.json();
        setProducts(data.products);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [queryString]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <table>
      <tr>
        <th
          style={{
            textDecoration: sortField === "name" ? "underline" : "",
          }}
        >
          Name
        </th>
        <th
          style={{
            textDecoration: sortField === "price" ? "underline" : "",
          }}
        >
          Price
        </th>
      </tr>
      {products.map((p) => (
        <tr style={{ color: p.department === "Books" ? "red" : "black" }}>
          <td>{p.name}</td>
          <td>{p.price}</td>
        </tr>
      ))}
    </table>
  );
};

export default Products;
