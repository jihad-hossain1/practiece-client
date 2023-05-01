import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);
  console.log(productData);
  return (
    <div>
      <h2 className="text-center">all services here</h2>
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {productData.map((product) => (
            <div key={product.id} className="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: {product.price}$</Card.Text>
                  <Link to={`/data/${product.id}`}>
                    <Button variant="primary">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
