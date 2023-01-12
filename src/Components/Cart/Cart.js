import React, { Component } from "react";
import './Cart.css'

class Cart extends Component {

  renderCart = () => {
    return this.props.cart.map((item, index) => {
      const { id, image, name, price } = item.product;
      const { quantity } = item;
      return (
        <tr>
          <td>{index+1}</td>
          <td>
            <img style={{ width: 80 }} src={image} alt="" />
          </td>
          <td>{name}</td>
          <td>
            <button className="btn btn-info btn-plus" onClick={()=>{this.props.increaseQuantity(item)}}>+</button>
            <span>{quantity}</span>
            <button className="btn btn-info btn-minor" onClick={()=>{this.props.decreaseQuantity(item)}}>-</button>
          </td>
          <td>{price}</td>
          <td>{price*quantity}</td>
          <td><button className="btn btn-danger" onClick={()=>{this.props.deleteItem(id)}}>Delete</button></td>
        </tr>
      );  
    })};

    calcTotalMoney=()=>{
       return this.props.cart.reduce((prevVal, currentVal)=>{
        return prevVal+(currentVal.quantity*currentVal.product.price)
      },0)
    }

  render() {
    return (
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Hình ảnh</th>
                    <th>Tên SP</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <h3>Total: {this.calcTotalMoney()} USD</h3>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={()=>{this.props.checkOut()}} type="button" className="btn btn-primary">
                Check-out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
