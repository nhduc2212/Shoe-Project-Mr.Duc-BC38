import {Component} from 'react';
import "./ProductList.css";
import Product from "../Product/Product"
class ProductList extends Component{
    render(){
        return(
            <div className="Item-container">
                <Product addToCart={this.props.addToCart} setNull={this.props.setNull} setProducts={this.props.setProducts} products={this.props.products}/>
            </div>
        )
    }
}
export default ProductList