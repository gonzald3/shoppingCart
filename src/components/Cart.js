import { ListGroup, Button , Row, Col, Form, Image} from "react-bootstrap";
import { CartState } from "../context/Context.js"
import {useEffect, useState } from "react";
import React from 'react'


import { AiFillDelete } from "react-icons/ai";
import "./styles.css"

const Cart = () => {
    
    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [ total, setTotal ] = useState();
    
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) =>  acc + Number(curr.price)*curr.qty, 0))
    }, [cart])


    return (
    
    <div className='home'>
        <div className='productContainer'>
            <ListGroup>
                {
                    cart.map(prod => (
                        //cart item
                        <ListGroup.Item key={prod.id}>
                            <Row>
                                <Col md={2}>
                                   <Image src={prod.image} alt={prod.name} fluid rounded />
                                </Col>
                                <Col md={2}>
                                    <span>{prod.name}</span>
                                </Col>
                                <Col md={2}>
                                    <span>${prod.price.split(".")[0]}</span>
                                </Col>

                                <Col md={2}>
                                    <Form.Control as="select" value={prod.qty}
                                            onChange={(e) => 
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: prod.id,
                                                        qty: e.target.value,
                                                    },
                                                })
                                            }
                                    >
                                        {[...Array(prod.inStock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}

                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button 
                                        type="button"
                                        variant="light"
                                        onClick={() => 
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                        }
                                        >
                                            <AiFillDelete fontSize="20px" />
                                        </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
        <div className='filters summary'>
            <span style={{ fontWeight: 700, fontSize: 20 }}> Total </span>
            <hr></hr>
            <span style={{ fontSize: 30}}>$ {total}</span>
            
        </div>
        
    </div>
    
    );
}

export default Cart;