import { Component } from "react";
import "./Productdetails.css"

class ProductDetails extends Component {
  
  
  detailingProduct=this.props.detailingProduct
  render() {
    return (
      <div className="modal-container">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {this.detailingProduct.name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-dialog modal-dialog-scrollable">
              <img src={this.detailingProduct.image} />
              <p>{this.detailingProduct.price}</p>
              <p>{this.detailingProduct.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
