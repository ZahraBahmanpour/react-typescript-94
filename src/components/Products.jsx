import { useEffect, useState } from "react";

const Products = ({ queryString, sortField }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://6300a18859a8760a757d441c.mockapi.io/products?name=${queryString}`
        );
        const data = await response.json();
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
