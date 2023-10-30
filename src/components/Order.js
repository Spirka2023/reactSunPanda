import React, { Component , useState} from 'react'
import { FaTrashAlt } from "react-icons/fa"

export class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  render() {
    
    return (
      <div className='row'>
        <div className='row'>
      <div className='col-2'><img src={'./img/' + this.props.item.img} className='img-fluid'/></div>
        <div className='col-8'><h4 className='text-center'>{this.props.item.title}</h4></div>
        <div className='col-2'><p>{this.props.item.price * this.state.count}р.</p>
        </div>
        </div>
        <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
        <div className='row'>
      <div className='col-5'>
        <div className='plusMinus' onClick={() => this.setState({ count: this.state.count + 1 })}>+</div>
      </div>
      <div className='col-2'>{this.state.count}</div>
      <div className='col-5'>
        <div className='plusMinus' onClick={() => this.setState({ count: this.state.count - 1 })}>-</div>
      </div>
    </div>
        </div>
        <div className='col-2'>
        <FaTrashAlt className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>
        </div>
  </div>
    )
  }
}

export default Order