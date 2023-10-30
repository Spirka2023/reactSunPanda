import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        <div className="container">
       
      <div className="row">
        {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd = {this.props.onAdd} />

        ))}
        </div>
            </div>
      </main>
    )
  }
}

export default Items