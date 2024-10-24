import './header.css';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import user from '../../assets/user.svg';
import lupa from '../../assets/lupa.svg';
import heart from '../../assets/heart.svg';
import shipping from '../../assets/shipping.svg';
import Link from 'next/link';


export const Header = () => {
    return(
        <header className='container-header'>
            <section className='container-header_intra'>
                <div>
                    <Image className='img-logo' src={logo} alt='Logo'/>
                    <h1>Furniro</h1>
                </div>
                <nav> 
                    
                    <Link className='header-links' href={'/'}>Home</Link>
                    <Link className='header-links' href={'./shop'}>Shop</Link>
                    <Link className='header-links' href={'./products'}>Products</Link>
                    <li className='header-links'>Contact</li>
                </nav>
                <figure>
                    <Image className='imgs-utils' src={user} alt="" />
                    <Image className='imgs-utils' src={lupa} alt="" />
                    <Image className='imgs-utils' src={heart} alt="" />
                    <Image className='imgs-utils' src={shipping} alt="" />
                </figure>
            </section>
        </header>
    );
};