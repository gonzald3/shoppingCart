import { CartState } from '../context/Context.js'
import SingleProduct from './SingleProduct'
import "./styles.css"
import Filters from './Filters'

//const urlText = 'https://626970b0aa65b5d23e84cab0.mockapi.io/api/v1/shirts';

const Home = () => {

    //destructuring method
    const { state: { products},
    productState: {sort, byStock, byFastDelivery,  searchQuery} } = CartState();

    //console.log(products);
    const transformProducts = () => {
        let sortedProducts = products;

        if(sort){
            sortedProducts = sortedProducts.sort((a,b) => 
                sort === "lowToHigh" ? a.price - b.price: b.price - a.price
            );
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if(byFastDelivery){
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        // if(byRating){
        //     sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
        // }

        if(searchQuery){
            sortedProducts = sortedProducts.filter((prod) => 
            prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    };

    return (<div className='home'>
        <Filters/>
        <div className="productContainer">
            {transformProducts().map((prod) => {
                    return (<SingleProduct prod={prod} key={prod.id} />);
            })}
            </div>
    </div>
    );
}

export default Home;