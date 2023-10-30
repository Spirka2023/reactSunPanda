import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import AllRest from "./components/AllRest";


class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'Суши креветка',
          img: 'sushi_krevetka.jpg',
          desc: 'Lorem ipsum',
          category: 'sushi',
          price: '96',
        },
        {
          id:2,
          title: 'Суши лосось',
          img: 'sushi_losos.jpg',
          desc: 'Lorem ipsum',
          category: 'sushi',
          price: '66',
        },
        {
          id:3,
          title: 'Суши угорь',
          img: 'sushi_ugor.jpg',
          desc: 'Lorem ipsum',
          category: 'pizza',
          price: '84',
        },  
      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      {/* <BrowserRouter>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <AllRest/>
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem = {this.onShowItem} items={this.state.currentItems} onAdd = {this.addToOrder} />
      {this.state.showFullItem && <ShowFullItem onAdd ={this.addToOrder} onShowItem = {this.onShowItem} item={this.state.fullItem} />}
      <Footer/>
    <Routes>
      <Route path="about/*" element={<Orders />} />
    </Routes>
    </BrowserRouter> */}

      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <AllRest/>
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem = {this.onShowItem} items={this.state.currentItems} onAdd = {this.addToOrder} />
      {this.state.showFullItem && <ShowFullItem onAdd ={this.addToOrder} onShowItem = {this.onShowItem} item={this.state.fullItem} />}
      <Footer/>
    </div>

  );
}

  addToOrder(item) {
    let isInArr
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
      isInArr = true
    })
    if(!isInArr)
  this.setState({orders:[...this.state.orders, item]})
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category) {
    if (category === "all"){
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  onShowItem(item){

    this.setState({showFullItem: !this.state.showFullItem})
    this.setState({fullItem: item})
  }

}
export default App;
