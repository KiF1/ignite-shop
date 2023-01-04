import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg';
import { Cart } from '../Cart';
import { HeaderContainer } from './styles';

export function Header(){
    return(
      <HeaderContainer>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <Cart />
      </HeaderContainer>
    )
}