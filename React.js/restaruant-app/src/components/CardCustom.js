
import React, { useState, useEffect } from 'react';
import { Container, Col, Card, Button } from 'react-bootstrap';
import './Menucards.css';

function CardCustom(props) {
  const product = props.datas;
  const [counts, setCounts] = useState(0);

  // Load initial count from localStorage when component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const storedProduct = storedItems.find(item => item.id === product.id);
    if (storedProduct) {
      setCounts(storedProduct.count);
    }
  }, [product.id]); // Re-run the effect if product ID changes

  // Function to store the entire cart in local storage
  const storeProductInLocalStorage = (count) => {
    let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = storedItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      // Update the product count if it exists in local storage
      storedItems[itemIndex].count = count;
    } else {
      // Add new product to the cart if it doesn't exist
      storedItems.push({ id: product.id, name: product.name, price: product.price, image: product.imgPath, count });
    }

    // Update the entire cart in local storage
    localStorage.setItem('cart', JSON.stringify(storedItems));
    
    // Dispatch custom event to signal cart update
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeProductFromLocalStorage = () => {
    let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedItems = storedItems.filter((item) => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Save the updated cart

    // Dispatch custom event to signal cart update
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const increment = () => {
    const newCount = counts + 1;
    setCounts(newCount);
    storeProductInLocalStorage(newCount);
  };

  const decrement = () => {
    if (counts > 0) {
      const newCount = counts - 1;
      setCounts(newCount);

      if (newCount === 0) {
        removeProductFromLocalStorage();
      } else {
        storeProductInLocalStorage(newCount);
      }
    }
  };

  const handleAdd = () => {
    const initialCount = 1;
    setCounts(initialCount);
    storeProductInLocalStorage(initialCount);
  };

  // Auto-refresh the component when the cart updates
  useEffect(() => {
    const handleCartUpdate = () => {
      const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
      const storedProduct = storedItems.find(item => item.id === product.id);
      if (storedProduct) {
        setCounts(storedProduct.count);
      } else {
        setCounts(0);
      }
    };

    // Add event listener for the custom cart update event
    window.addEventListener('cartUpdated', handleCartUpdate);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, [product.id]); // Re-run the effect if product ID changes

  return (
    <Container>
      <Card className="food-card py-4" key={product.id}>
        <div className="card-content d-flex justify-content-between align-items-center">
          <Col xs={6} className="text-section ps-4">
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Col>
          <Col xs={6} className="text-center">
            <Card.Img
              variant="top"
              src={product.imgPath}
              alt={product.name}
              className="food-image img-fluid pe-4"
              style={{ width: '200px' }}
            />
            <div className="button-section mt-2">
              {counts === 0 ? (
                <Button className="add-button" onClick={handleAdd}>
                  Add
                </Button>
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <Button className="ms-2" onClick={decrement}>
                    -
                  </Button>
                  <span className="mx-3">{counts}</span>
                  <Button className="ms-2" onClick={increment}>
                    +
                  </Button>
                </div>
              )}
            </div>
          </Col>
        </div>
      </Card>
    </Container>
  );
}

export default CardCustom;





