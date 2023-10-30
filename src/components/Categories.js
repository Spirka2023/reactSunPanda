import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[{
                key: 'all',
                name: 'Всё меню',
                image: 'vse-tovari.c8b7cad5.png'
            },
            {
                key: 'sushi',
                name: 'Суши и роллы',
                image: '23-icon.jpg'
            },
            {
                key: 'hot rolls',
                name: 'Горячие роллы',
                image: 'rollicon.jpg'
            },
            {
                key: 'baked rolls',
                name: 'Запечённые роллы',
                image: '25-icon.jpg'
            },
            {
              key: 'seti',
              name: 'Сеты',
              image: 'seti-icon.jpg'
          },
          {
              key: 'pizza',
              name: 'Пицца',
              image: 'pizza-icon.jpg'
          },
          {
            key: 'hamburger',
            name: 'Гамбургеры',
            image: '31-icon.jpg'
        },
        {
            key: 'zakuski',
            name: 'Закуски',
            image: '32-icon.jpg'
        },
        {
            key: 'soup',
            name: 'Супы',
            image: '33-icon.jpg'
        },
        {
          key: 'hot dishes',
          name: 'Горячие блюда',
          image: '34-icon.jpg'
      },
      {
          key: 'salat',
          name: 'Салаты',
          image: '40-icon.jpg'
      },
      {
          key: 'beverages',
          name: 'Напитки',
          image: '39-icon.jpg'
      }
        ]
        }
    }
  render() {
    return (
      <section className="tokyo">
    <div className="container">

        <div className="row">
            <div className="col-12">
                <h3 className="text-center text-uppercase" style={{fontWeight: "800"}}>Токио</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-4 col-12 mb-3" style={{fontSize: "14px"}}>
                <div className="oval text-center textPhone">Ресторан <span className="fat">ОТКРЫТ</span></div>
            </div>
            <div className="col-xl-4 col-12 mb-3" style={{fontSize: "14px"}}>
                <div className="oval text-center textPhone">Бесплатная доставка <span className="fat">от 1000р.</span></div>
            </div>
            <div className="col-xl-4 col-12 mb-3" style={{fontSize: "14px"}}>
                <div className="oval text-center textPhone">Платная доставка <span className="fat">120р.</span></div>
            </div>
        </div>

        <div className="row mt-4">
        
        {this.state.categories.map(el =>
          (<div className="col-12 col-xl-1 mb-3 me-auto me-xl-4 restaurants" onClick={() => this.props.chooseCategory(el.key)} style={{borderRadius: "15px", fontSize: "14px"}}>
             <img src={"./img/" + el.image} alt="" className="menu"/>
            <p className="text-center textPhone" key={el.key}>{el.name}</p>
           </div>
        ))}
            
        
        </div>

        </div>
        </section>

      // <div className='categories'>
      //   {this.state.categories.map(el =>(
      //       <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
      //   ))}
      // </div>
    )
  }
}

export default Categories