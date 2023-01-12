import { Component } from "react";
import "./Product.css";
import Productdetails from "../Productdetails/Productdetails";
class Product extends Component {
  products = this.props.products;
  renderProduct() {
    return this.products.map((item) => {
      return (
        <div className="product-item">
          <div className="product-img">
            <img src={item.image} />
          </div>
          <div className="product-info">
            <h1>{item.name}</h1>
            <p>{item.shortDescription}</p>
            <p>{item.price}</p>
            <button onClick={()=>{this.props.addToCart(item)}}>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button 
              onClick={() => {this.props.setNull(); this.props.setProducts(item)
              }}
            >
              Details <i class="fa-solid fa-list"></i>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return this.renderProduct(this.products);
  }
}

export default Product;
