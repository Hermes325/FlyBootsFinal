import * as React from 'react';
import Link from 'next/link';





export default function ProductItem({ product }) {
    return (
        <div className="cartochka max-w-sm rounded overflow-hidden shadow-lg">
            <Link legacyBehavior href={`/catalog/${product.slug}`}>
                <a>
                    <img src={product.image}
                        alt={product.name + product.description}
                        className={'shadow w-full'}
                    />
                </a>
            </Link>
            <div className={'flex_columm justify-center items-center p-5'}>
                <Link legacyBehavior href={`/catalog/${product.slug}`}>
                    <a>
                        <h2 className={'text-lg'}>{product.name}</h2>
                        <h3>{product.description}</h3>

                    </a>
                </Link>
                <div className={'flex_cena'}>
                    <button className={'buy'}>Add to cart</button>
                    <h3>{product.price}</h3>
                </div>
            </div>
        </div >
    );
}