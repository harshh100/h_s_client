import React from 'react'
import Services from './Services';
export default function ServicesArea(props) {

  return (
    <> 
      <div className="container my">
        <div className="row" id='NewsRow'>
          {products.map((element) => {
            return <div className="col-md my" id='CardNews' key={element.id}>
              <Services name={element.name} dish1={element.dish1} dish2={element.dish2} dish3={element.dish3} dish4={element.dish4} price1={element.price1} price2={element.price2} price3={element.price3} price4={element.price4}/>
            </div>
          })}
        </div>
      </div>
    </>
  )
}
const products = [
  {id: 1, name: 'Dennis', 
  dish1: 'Masala Maggi',
  dish2: 'Paneer Toast',
  dish3: 'Masala Bread',
  dish4: 'Margereta Pizza',
  price1: '40',
  price2: '100',
  price3: '90',
  price4: '90'
},
  {id: 2, name: 'IceBurg', 
  dish1: 'Coffee',
  dish2: 'Nutty Delight',
  dish3: 'Vaggie Delight',
  dish4: 'French Fries',
  price1: '40',
  price2: '40',
  price3: '30',
  price4: '40'
},
  {id: 3, name: 'Devnarayan', 
  dish1: 'Badam Shake',
  dish2: 'D.N.SP Lassi',
  dish3: 'Kit-Kat Shake',
  dish4: 'Oreo Shake',
  price1: '30',
  price2: '60',
  price3: '100',
  price4: '100'
},
  {id: 4, name: 'Devnarayan', 
  dish1: 'Badam Shake',
  dish2: 'D.N.SP Lassi',
  dish3: 'Kit-Kat Shake',
  dish4: 'Oreo Shake',
  price1: '30',
  price2: '60',
  price3: '100',
  price4: '100'
},
  {id: 5, name: 'Devnarayan', 
  dish1: 'Badam Shake',
  dish2: 'D.N.SP Lassi',
  dish3: 'Kit-Kat Shake',
  dish4: 'Oreo Shake',
  price1: '30',
  price2: '60',
  price3: '100',
  price4: '100'
},
];
