import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Products({products}) {
  return (
    <section className='mt-8'>
        <div className="container">
            <div className="content grid grid-cols-product gap-8">
                {
                    products && products?.map(({id, title, image, price}) => (
                        <div className="p-5 border border-gray-200 flex flex-col gap-6 justify-center" key={id}>
                            <Image src={image} alt={title} width='300' height='300' className='max-w-[300px] max-h-[300px] object-contain w-[300px] h-[300px] img-pr'/>
                            <p className='w-sm max-w-sm tit-pr width-sm truncate'>{title}</p>
                            <p>{price},00$</p>
                            <button type='button' className='capitalize rounded-full px-5 py-3 bg-gray-200'>
                            <Link href={`/products/${id}`} className=' font-semibold w-full'>more details</Link>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Products

