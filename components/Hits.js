import * as React from 'react';
import data from "../utils/data";
import ProductItem from "./ProductIteam";




export default function Hits() {
    return (
        <div className={'grid_in_catalog text_inside_catalog'} >
            {data.products.map((product) => (
                <ProductItem
                    product={product}
                    key={product.slug}
                ></ProductItem>
            ))}
        </div>)
}


