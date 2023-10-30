import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (

     
            <div className="col-12 col-xl-2 col-md-3 mb-3 me-4 restaurants">
                <div className="image-container" data-content={this.props.item.desc}>
                    <img src={"./img/"+this.props.item.img} className="img-fluid" style={{borderRadius:"3%"}}/>
                    <p className="text-center mt-2 fat textPhone">{this.props.item.title}</p>
                </div>
                <a href="#" className="btn btn-itd2 btn-lg mb-3 delivery text-white textPhone" onClick={() => this.props.onAdd(this.props.item)}>В корзину {this.props.item.price} р.</a>
            </div>
      

      // <div className='item'>
      //   <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
      //   <h2>{this.props.item.title}</h2>
      //   <p>{this.props.item.desc}</p>
      //   <b>{this.props.item.price}$</b>
      //   <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      // </div>
    )
  }
}

export default Item