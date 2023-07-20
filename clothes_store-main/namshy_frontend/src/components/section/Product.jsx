
import React, { useState, useContext } from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import './homecard.css';
import { CartContext } from './Shoppingcartcontext';
import { useNavigate } from "react-router-dom";

export function Product({product, index}) {
    const { addToCart } = useContext(CartContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();
    const [selectedCardIndex, setSelectedCardIndex] = useState(1);
    const addToFavorites = () => {
        console.log("add to favorites")
    }
    
  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/SelectedProductPage/${product._id}`);
  };
//   console.log("card",product)
    return (
        <div>
            <div
                className="card m-2 carousel-wrapper" 
               
                style={{
                    border:
                        selectedCardIndex === index
                        ? "1px solid #58b368"
                        : "0.5px solid #C8D2D1",
                    width: "288px",
                    height: "320px",
                }}
                key={index}
            >
                
                <Carousel controls={false} style={{ justifyContent: "center" }}  onClick={() => handleImageClick(product)}>
                {product.imageSrc.map((image, index) => (
                    
                    <Carousel.Item key={index}>
                        
                    <img
                        className="d-block  "
                        style={{
                            width: "90%",
                            height: "250px",
                            margin: "auto",
                            "border-radius": "10px",
                        }}
                        src={image}
                        alt={""}
                    />
                    </Carousel.Item>
                ))}
                </Carousel>
                <div
                    className="card-body my-2 d-flex   justify-content-between"
                    style={{ fontSize: "15px", padding: "5px" }}
                >
                    <div className="d-flex flex-column align-items-start ">
                        <Card.Title className="mb-0">{product.name}</Card.Title>
                        <Card.Text className="mb-0">Price: {product.price}</Card.Text>
                    </div>
                    <div>
                        <button
                            className="btn text-light   "
                            style={{ backgroundColor: "#7DCEA0", marginRight: "2px" }}
                            onClick={() => addToFavorites()}
                        >
                            <i className="bi bi-heart"></i>
                        </button>

                        <button
                            className="btn text-light  "
                            style={{ backgroundColor: "#7DCEA0" }}
                            onClick={() => addToCart(product._id)}
                        >
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
