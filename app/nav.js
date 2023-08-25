import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/vercel.svg';
import Search from './search';

const Nav = () => {
    return (
        <nav style={{display:'flex',background:'lightgray',padding:10}}>
            <ul style={{display:'flex',listStyle:'none',paddingLeft:20,gap:20,marginTop:10,textDecoration:'none'}}>
                <li><Link href='/' style={{cursor:'pointer'}}><Image src={Logo} alt="Logo" width={80} height={30} priority /></Link></li>
                <li style={{marginTop:5,textDecoration:'none',cursor:'pointer'}}>About</li>
                <li style={{marginTop:5,textDecoration:'none'}}><Link href='/blogs' style={{textDecoration:'none',cursor:'pointer'}}>Blogs</Link></li>
                <li style={{marginTop:5,textDecoration:'none',cursor:'pointer'}}>Contact</li>
            </ul>
            <div style={{float:'right',marginTop:10,marginLeft:'auto',marginRight:10}}><Search /></div>
        </nav>
    );
}

export default Nav;
