import React from 'react'

function Type_list(props) {
    return (
        <>
            {
                props.types.map(type => (
                    <div className="dennis-manu">
                        <div className='dennis-dish'>
                            {type.name}
                        </div>
                        <div className='dennis-price'>
                            {type.price}
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default Type_list