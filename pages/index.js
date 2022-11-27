import Products from "../components/Products";

export default function Home({products}) {
  return (
    <div>
      <Products products={products}/>
    </div>
  )
}

export async function getStaticProps() {
  const products = await (await fetch('https://fakestoreapi.com/products')).json()
  return {
      props: {
          products: products
      }
  }
}
