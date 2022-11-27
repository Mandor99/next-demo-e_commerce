import Image from "next/image"

function productDetails({product: {id, title, description, price, image}}) {
  return (
    <section className="mt-16">
       <div className='container'>
        <section className="details flex flex-row gap-8">
          <Image src={image} width={150} height={150} className='w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain'/>
          <div className="content flex flex-col gap-4">
            <h2 className="font-bold text-2xl">{title}</h2>
            <h4>{price},00$</h4>
            <p>{description}</p>
          </div>
        </section>
      </div>
    </section>
   
  )
}

export default productDetails

export async function getStaticPaths() {
  const products = await (await fetch(`https://fakestoreapi.com/products`)).json()
  const paths = products.map(({id}) => {
    return {
      params: {id: id.toString()}
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {id}}) {
  const product = await (await fetch(`https://fakestoreapi.com/products/${id}`)).json()
  return {
    props: {product}
  }
}