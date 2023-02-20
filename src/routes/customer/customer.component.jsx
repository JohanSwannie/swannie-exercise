import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustProducts from "../../components/cust-products/cust-products.component";
import { Preview, Button } from "./customer.styles";

const Customer = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(
        "https://gist.githubusercontent.com/JohanSwannie/472b978df1265dedbf7d2d8759dea6dc/raw/d773a045e09ea21467af5b3966de56f97217b975/flowerList.json"
      );
      const flowers = await result.json();
      setProducts(flowers);
    };
    fetchProducts();
  }, []);

  const checkout = () => {
    navigate("/");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        A Range of Flower Products to choose from
        <Button onClick={checkout}>Checkout</Button>
      </h2>

      <Preview>
        {products.map((product) => (
          <CustProducts key={product.id} product={product} />
        ))}
      </Preview>
    </div>
  );
};

export default Customer;
