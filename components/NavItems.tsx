import Link from 'next/link';
import React from 'react'

const navitems = [
    {label:'Home',href:'/'},
    {label:'Companions',href:'/companions'},
    {label:'My journey',href:'/my-journey'},

];
const NavItems = () => {
  return (
    <nav className='flex items-center gap-4'>
        {navitems.map(({label,href})=>(
            <Link href={href} key={label}>
                {label}
            </Link>

            ))}
    </nav>
   
  )
}

export default NavItems
