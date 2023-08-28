import React from 'react'
import Type_list from './Type_list'



const menu = [{
    itm: 'Maggi',
    types: [{ name: 'Masala Maggi', price: 40 }, { name: 'Butter Maggi', price: 50 }, { name: 'Cheese Maggi', price: 60 }]
},
{
    itm: 'Garlic Toast',
    types: [{ name: 'Cheese Chilly Garlic Toast', price: 90 }, { name: 'Paneer Toast', price: 100 }, { name: 'Beans Toast', price: 80 }]
},
{
    itm: 'Bread',
    types: [{ name: 'Masala Bread', price: 90 }, { name: 'Premium Bread', price: 100 }]
},
{
    itm: 'Sandwhich',
    types: [{ name: 'Tandoori Grilled', price: 80 }, { name: 'Mexican Grilled', price: 80 }, { name: 'Hot & Spicy Grilled', price: 80 }, { name: 'Italian Grilled', price: 80 }, { name: 'American Grilled', price: 100 }]
},
{
    itm: 'Beverages',
    types: [{ name: 'Cold Coffeed', price: 50 }, { name: 'Bournvita', price: 50 }, { name: 'Espresso Coffee', price: 50 }, { name: 'Hot Bournvita', price: 50 }]
}
]

export default function Itm_list() {
    return (
        <>
            <div className="dennis-head">
                <h1>Menu </h1>
            </div>
            <div className='contentcenter'>
                <div className="dennis-maindish">
                    {menu.map((itms) => (
                        <>
                            <div className='dennis-mainhead'>
                                <h2 className='dennis-maindishhead'>{itms.itm}</h2>
                            </div>
                            <center>
                                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                            </center>
                            <Type_list types={itms.types} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

