import { 
    Container,  
    Navbar, 
    Nav, 
    FormControl, 
    Badge, 
    Dropdown,
    Button
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../logo.svg';
import { GiShoppingCart } from 'react-icons/gi'
import {  Link} from 'react-router-dom';
import { CartState } from "../context/Context";
import { AiFillDelete} from "react-icons/ai";



const Header = () => {

    //Destructor to get the cart state
    const { state: { cart}, dispatch, productDispatch } = CartState();

    

    return (
    <Navbar bg="light" variant="dark" style={{height: 80}}>
        <Container>
            
            <Navbar.Text className="search">
                <FormControl 
                style={{ width: 500 }} 
                placeholder='Search a product'
                className="m-auto"
                onChange={(e) => {
                    productDispatch({
                        type: "FILTER_BY_SEARCH",
                        payload: e.target.value,
                    });

                }}
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle >
                        <GiShoppingCart color="white" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 250, padding: 5}}>
                        {cart.length>0?(
                            <>
                            {
                                cart.map((prod) => (
                                <span className="cartitem" key={prod.id}>
                                    <img
                                        src={prod.image}
                                        className="cartItemImg"
                                        alt={prod.name}
                                    />
                                    <div className="cartItemDetail">
                                        <span>{prod.name}</span>
                                        <span className="money-symbol"> ${prod.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete
                                        fontSize="20px"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => 
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,

                                            })
                                        }
                                        />
                                </span>

                                ))}
                
                           
                            
                          
                           <Link to="/cart">
                                <Button style={{ width: "95%", margin: "0 10px" }}>
                                Go To Cart
                                </Button>

                            </Link>
                           
                            
                            
                            
                            
                            </>

                        ):(<span style={{ padding: 10 }}>Cart is Empty!</span>)}

                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
            <Navbar.Brand style={{"color": "#343a40"}}>
            React to Start
                <Link to="/"><img src={logo} className="App-logo" alt="logo" style={{"height": 50}} /></Link>
            </Navbar.Brand>

        </Container>
    </Navbar>
    );
    
};

export default Header;