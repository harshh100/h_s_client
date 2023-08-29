import React from 'react'
import Formateprice from '../helper/Formateprice';

function Type_list(props) {
    function addtocart() {
        alert("Added Into Cart");
        // console.log('Addtocart')
    }
    return (
        <>
            {
                props.types.map(type => (
                    <div className="dennis-manu" key={type.name}>
                        <div className='dennis-dish'>
                            {type.name}
                            <p className='Ingredient'>Ingredient : {type.ingredient} </p>
                        </div>
                        <div className='dennis-price'>
                            {<Formateprice price={type.price} />}
                        </div>
                        <div className='buy_now'>
                            <div data-tooltip="Price:-$20" class="button">
                                <button class="button-wrapper" onClick={addtocart}>
                                    <div class="text">Add</div>
                                    <span class="icon">
                                        {/* <button> */}
                                        <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                        {/* </button> */}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default Type_list