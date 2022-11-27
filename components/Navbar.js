import Link from "next/link"

function Navbar() {
  return (
    <nav className="navbar mt-6 shadow-sm p-4">
      <div className="container">
        <div className="content flex justify-between items-center">
          <h1 className="text-3xl uppercase cursor-pointer">
            <Link href={'/'}>logo</Link>
          </h1>
          <ul className="uppercase flex gap-8">
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'/about'}>about</Link></li>
            <li><Link href={'/products'}>cart</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar