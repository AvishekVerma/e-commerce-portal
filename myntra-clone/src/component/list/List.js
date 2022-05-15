import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import './List.css'

const List = () => {

    const [data, setData] = useState(null)

    useEffect( () => {
        // console.log('make api call')
        fetch('http://demo9341282.mockable.io/products')
        .then(res => res.json())
        .then(result => {
            // console.log(data)
            setData(result.products)
        })
    },[])
    return(
        <div className="each-item-wrapper">
            { data ? data.map((eachItem, index) => {
                return <Product item={eachItem} key={index} />                    
            }) 
            : null}
        </div>
    )
}

export default List;