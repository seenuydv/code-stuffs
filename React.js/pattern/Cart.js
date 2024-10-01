  // // import { useEffect, useState } from 'react';
  // // import {Container, Card, Button, Row, Col } from 'react-bootstrap';
  // // import Offcanvas from 'react-bootstrap/Offcanvas';
  // // import { FaShoppingCart } from "react-icons/fa";
  // // // import Button from 'react-bootstrap/Button';
  // // // import Card from 'react-bootstrap/Card';

  // // function Cart() {
  // //   const [show, setShow] = useState(false);
  // //   const handleClose = () => setShow(false);
  // //   const [items,setItems]= useState([])
    
  
  
  // //   const somefn =()=>{
  // //     const handleShow = () => setShow(true);
  // //     handleShow();
  // //     const itemsData = { ...localStorage };
  // //     let arr = []
  // //     for (var key in itemsData) {
  // //       if (itemsData.hasOwnProperty(key)) {
  // //         let a = JSON.parse(itemsData[key])
  // //           // console.log(key + " -> " + a[0]);
  // //           arr.push(a[0])
          
  // //       }
  // //   }
  // //   setItems(arr);
  // //   }
  // //   //net gpt
  // //   const increment = (item) => {
  // //     const updatedItems = items.map((i) => {
  // //       if (i.id === item.id) {
  // //         const newCount = i.count + 1;
  // //         i.count = newCount;
  // //         storeProductInLocalStorage(i); // Update local storage
  // //       }
  // //       return i;
  // //     });
  // //     setItems(updatedItems);
  // //   };
  // // // gpt
  // //   const decrement = (item) => {
  // //     const updatedItems = items
  // //       .map((i) => {
  // //         if (i.id === item.id) {
  // //           const newCount = i.count - 1;
  // //           i.count = newCount;
  // //           if (newCount === 0) {
  // //             removeProductFromLocalStorage(item); // Remove from local storage if count is 0
  // //             return null;
  // //           } else {
  // //             storeProductInLocalStorage(i); // Update local storage
  // //           }
  // //         }
  // //         return i;
  // //       })
  // //       .filter((i) => i !== null); // Filter out null items
  // //     setItems(updatedItems);
  // //   };

  // //   const storeProductInLocalStorage = (item) => {
  // //     let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
  // //     const itemIndex = storedItems.findIndex((storedItem) => storedItem.id === item.id);
  // //     if (itemIndex !== -1) {
  // //       storedItems[itemIndex].count = item.count; // Update item count
  // //     } else {
  // //       storedItems.push(item);
  // //     }
  // //     localStorage.setItem('cart', JSON.stringify(storedItems));
  // //   };

  // //   const removeProductFromLocalStorage = (item) => {
  // //     let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
  // //     const updatedItems = storedItems.filter((storedItem) => storedItem.id !== item.id);
  // //     localStorage.setItem('cart', JSON.stringify(updatedItems));
  // //   };

  // //   console.log(items,"<=imtes==")
    
  // //   return (
  // //     <>
  // //       <FaShoppingCart onClick={somefn}  size={24} /> 
  // //       <Offcanvas show={show} onHide={handleClose} placement="start"  
  // //       style={{ width: '50vw' }} >
  // //         <Offcanvas.Header closeButton>
  // //           <Offcanvas.Title>CART</Offcanvas.Title>
  // //         </Offcanvas.Header>
  // //         <Offcanvas.Body>
  // //         <Container>
  // //         <Row>
  // //               {items.length > 0 ? (
  // //                 items.map((item, index) => (
  // //                   <Col key={index} md={4} className="mb-4">
  // //                     <Card>
  // //                       <Card.Img
  // //                         variant="top"
  // //                         src={item.image}
  // //                         alt={item.name}
  // //                         style={{ width: '100%', height: '150px', objectFit: 'cover' }}
  // //                       />
  // //                       <Card.Body>
  // //                         <Card.Title>{item.name}</Card.Title>
  // //                         <Card.Text>
  // //                           <strong>Price: </strong> ${item.price * item.count}
  // //                           <br />
  // //                           <strong>Quantity: </strong> {item.count} {item.name}
  // //                         </Card.Text>
  // //                         <div className="d-flex justify-content-between align-items-center">
  // //                           <Button variant="danger" onClick={() => decrement(item)}>-</Button>
  // //                           <span>{item.count}</span>
  // //                           <Button variant="success" onClick={() => increment(item)}>+</Button>
  // //                         </div>
  // //                       </Card.Body>
  // //                     </Card>
  // //                   </Col>
  // //                 ))
  // //               ) : (
  // //                 <p>No items in cart</p>
  // //               )}
  // //             </Row>
  // //             <Row>
  // //              <Button variant='outline-warning'>Place Order</Button>
  // //             </Row>
  // //           </Container>
  // //         </Offcanvas.Body>
  // //       </Offcanvas>
  // //     </>
  // //   );
  // // }

  // // export default Cart;






  // import { useState, useEffect } from 'react';
  // import { Container, Card, Button, Row, Col } from 'react-bootstrap';
  // import Offcanvas from 'react-bootstrap/Offcanvas';
  // import { FaShoppingCart } from "react-icons/fa";

  // function Cart() {

  //   const [show, setShow] = useState(false);
  //   const [items, setItems] = useState([]);

  //   const handleClose = () => setShow(false);

    

  //   // Function to load cart data from localStorage
  //   const loadCartData = () => {
  //     const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
  //     setItems(storedItems); // Set the items from localStorage directly into state
  //   };

  //   const somefn = () => {
  //     setShow(true); // Show the offcanvas first
  //     loadCartData(); // Load the cart data from localStorage
  //   };

  //   const increment = (item) => {
  //     const updatedItems = items.map((i) => {
  //       if (i.id === item.id) {
  //         i.count += 1;
  //         storeProductInLocalStorage(i); // Update local storage
  //       }
  //       return i;
  //     });
  //     setItems(updatedItems);
  //   };

  //   const decrement = (item) => {
  //     const updatedItems = items
  //       .map((i) => {
  //         if (i.id === item.id) {
  //           i.count -= 1;
  //           if (i.count === 0) {
  //             removeProductFromLocalStorage(item); // Remove from local storage if count is 0
  //             return null; // Return null to remove the item from the list
  //           } else {
  //             storeProductInLocalStorage(i); // Update local storage
  //           }
  //         }
  //         return i;
  //       })
  //       .filter((i) => i !== null); // Filter out null items (which were removed)
  //     setItems(updatedItems);
  //   };

  //   // Function to store updated cart data in localStorage
  //   const storeProductInLocalStorage = (item) => {
  //     let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
  //     const itemIndex = storedItems.findIndex((storedItem) => storedItem.id === item.id);
  //     if (itemIndex !== -1) {
  //       storedItems[itemIndex].count = item.count; // Update item count in localStorage
  //     }
  //     localStorage.setItem('cart', JSON.stringify(storedItems)); // Save updated cart to localStorage
  //   };

  //   const removeProductFromLocalStorage = (item) => {
  //     let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
  //     const updatedItems = storedItems.filter((storedItem) => storedItem.id !== item.id);
  //     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Save updated cart to localStorage
  //   };

  //   return (
  //     <>
  //       <FaShoppingCart onClick={somefn} size={24} />
  //       <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '50vw' }}>
  //         <Offcanvas.Header closeButton>
  //           <Offcanvas.Title>CART</Offcanvas.Title>
  //         </Offcanvas.Header>
  //         <Offcanvas.Body>
  //           <Container>
  //             <Row>
  //               {items.length > 0 ? (
  //                 items.map((item, index) => (
  //                   <Col key={index} md={4} className="mb-4">
  //                     <Card>
  //                       <Card.Img
  //                         variant="top"
  //                         src={item.image}
  //                         alt={item.name}
  //                         style={{ width: '100%', height: '150px', objectFit: 'cover' }}
  //                       />
  //                       <Card.Body>
  //                         <Card.Title>{item.name}</Card.Title>
  //                         <Card.Text>
  //                           <strong>Price: </strong> ${item.price * item.count}
  //                           <br />
  //                           <strong>Quantity: </strong> {item.count}
  //                         </Card.Text>
  //                         <div className="d-flex justify-content-between align-items-center">
  //                           <Button variant="danger" onClick={() => decrement(item)}>-</Button>
  //                           <span>{item.count}</span>
  //                           <Button variant="success" onClick={() => increment(item)}>+</Button>
  //                         </div>
  //                       </Card.Body>
  //                     </Card>
  //                   </Col>
  //                 ))
  //               ) : (
  //                 <p>No items in cart</p>
  //               )}
  //             </Row>
  //             <Row>
  //               <Button variant="outline-warning">Place Order</Button>
  //             </Row>
  //           </Container>
  //         </Offcanvas.Body>
  //       </Offcanvas>
  //     </>
  //   );
  // }

  // export default Cart;

  // ==============>MAIN0


  import { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);

  const handleClose = () => setShow(false);

  // Function to load cart data from localStorage
  const loadCartData = () => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(storedItems); // Set the items from localStorage directly into state
  };

  const somefn = () => {
    setShow(true); // Show the offcanvas first
    loadCartData(); // Load the cart data from localStorage
  };

  // Increment item count and update local storage
  const increment = (item) => {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        i.count += 1;
        storeProductInLocalStorage(i); // Update local storage
      }
      return i;
    });
    setItems(updatedItems);
    dispatchEvent(); // Dispatch event to notify changes
  };

  // Decrement item count and remove from local storage if count is 0
  const decrement = (item) => {
    const updatedItems = items
      .map((i) => {
        if (i.id === item.id) {
          i.count -= 1;
          if (i.count === 0) {
            removeProductFromLocalStorage(item); // Remove from local storage if count is 0
            return null; // Return null to remove the item from the list
          } else {
            storeProductInLocalStorage(i); // Update local storage
          }
        }
        return i;
      })
      .filter((i) => i !== null); // Filter out null items (which were removed)
    
    setItems(updatedItems);
    dispatchEvent(); // Dispatch event to notify changes
  };

  // Function to store updated cart data in localStorage
  const storeProductInLocalStorage = (item) => {
    let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = storedItems.findIndex((storedItem) => storedItem.id === item.id);
    if (itemIndex !== -1) {
      storedItems[itemIndex].count = item.count; // Update item count in localStorage
    } else {
      storedItems.push(item); // Add new item if it doesn't exist
    }
    localStorage.setItem('cart', JSON.stringify(storedItems)); // Save updated cart to localStorage
    dispatchEvent(); // Dispatch event to notify changes
  };

  // Function to remove product from localStorage
  const removeProductFromLocalStorage = (item) => {
    let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedItems = storedItems.filter((storedItem) => storedItem.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Save updated cart to localStorage
    dispatchEvent(); // Dispatch event to notify changes
  };

  // Function to dispatch a custom event
  const dispatchEvent = () => {
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  // Effect to listen for changes in localStorage
  useEffect(() => {
    const handleCartUpdate = () => {
      loadCartData(); // Reload cart data when the custom event is triggered
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <>
      <FaShoppingCart onClick={somefn} size={24} />
      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '50vw' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <Col key={index} md={4} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                      />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          <strong>Price: </strong> ${item.price * item.count}
                          <br />
                          <strong>Quantity: </strong> {item.count}
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <Button variant="danger" onClick={() => decrement(item)}>-</Button>
                          <span>{item.count}</span>
                          <Button variant="success" onClick={() => increment(item)}>+</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No items in cart</p>
              )}
            </Row>
            <Row>
              <Button variant="outline-warning">Place Order</Button>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
