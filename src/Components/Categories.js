import React from 'react'

const Categories = ({ filter, categories }) => {
    return (
        <div>
            {
                categories.map((cat, i) => {
                    return <button type='button' key={i} onClick={() => filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories
