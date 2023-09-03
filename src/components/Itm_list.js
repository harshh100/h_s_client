import React from 'react'
import Type_list from './Type_list'



const menu = [{
    itm: 'Maggi',
    types: [{ name: 'Masala Maggi', price: 40, ingredient: 'Maggi Noodles, Maggi Masala, Onion, Tomato, Capsicum' }, { name: 'Butter Maggi', price: 50, ingredient: 'Maggi Noodles, Butter' }, { name: 'Cheese Maggi', price: 60, ingredient: 'Maggi Noodles, Cheese' }]
},
{
    itm: 'Garlic Toast',
    types: [{ name: 'Cheese Chilly Garlic Toast', price: 90, ingredient: 'Bread, Cheese, Chilly, Garlic' }, { name: 'Paneer Toast', price: 100, ingredient: 'Bread, Paneer' }, { name: 'Beans Toast', price: 80, ingredient: 'Bread, Beans' }]
},
{
    itm: 'Bread',
    types: [{ name: 'Masala Bread', price: 90, ingredient: 'Bread, Masala' }, { name: 'Premium Bread', price: 100, ingredient: 'Premium Bread' }]
},
{
    itm: 'Sandwhich',
    types: [{ name: 'Tandoori Grilled', price: 80, ingredient: 'Bread,Tandoori Chicken' }, { name: 'Mexican Grilled', price: 80, ingredient: 'Bread,Mexican Salsa' }, { name: 'Hot & Spicy Grilled', price: 80, ingredient: 'Bread,Hot Sauce' }, { name: 'Italian Grilled', price: 80, ingredient: 'Bread,Pesto Sauce' }, { name: 'American Grilled', price: 100, ingredient: 'Bread,Bacon' }]
},
{
    itm: 'Beverages',
    types: [{ name: 'Cold Coffeed', price: 50, ingredient: 'Coffee,Milk,Ice Cream' }, { name: 'Bournvita', price: 50, ingredient: 'Milk,Bournvita' }, { name: 'Espresso Coffee', price: 50, ingredient: 'Coffee' }, { name: 'Hot Bournvita', price: 50, ingredient: 'Milk,Bournvita' }]
}
]


export default function Itm_list() {
    return (
        <>
            <div className="dennis-head">
                <div class="row justify-content-center menu_sty_text">
                    <div class="col-md-7 text-center heading-section ftco-animate pop-outin">
                        <span class="subheading">Our</span>
                        <h2 class="mb-4">Menu</h2>
                    </div>
                </div>
            </div>
            <div className='contentcenter'>
                <div className="dennis-maindish">
                    {menu.map((itms) => (
                        <div key={itms.itm} >
                            <div className='dennis-mainhead'>
                                <h2 className='dennis-maindishhead'>{itms.itm}</h2>
                            </div>
                            <center>
                                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                            </center>
                            <Type_list types={itms.types} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

