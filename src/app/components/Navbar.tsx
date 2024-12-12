import Link from "next/link";

function Navbar() {
  return(
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between bg-slate-800 z-50 text-gray-300'>
      <Link href='/' 
      className='uppercase font-bold text-md h-12 flex items-center'
      >
        Next Store
      </Link>
    </nav>
  )
}

export default Navbar