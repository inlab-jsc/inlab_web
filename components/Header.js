import Link from 'next/link';
import NavBar from 'react-bootstrap/Navbar';
import styles from '@styles/Header.module.css';
import HeaderItem from './HeaderItem';

export default React.memo(function Header(){
  return(
    <NavBar expand="lg" bg="light" sticky="top">
      <Link href="/">
        <NavBar.Brand>
          <img src="/images/logo.png" alt="InLab Logo" className={styles.logo} />
        </NavBar.Brand>
      </Link>
      <NavBar.Toggle aria-controls="header-menu" aria-expanded="false" />
      <NavBar.Collapse id="header-menu" className="justify-content-end">
        <HeaderItem href="/" text="Trang chủ" />
        <HeaderItem href="/info" text="Về chúng tôi" />
        <HeaderItem href="/resources/dataset" text="Resources" />
        <HeaderItem href="/dashboard" text="Quản lý Projects" />
        <HeaderItem href="/contactsale" text="Liên hệ" />
        <HeaderItem href="/login" text="Đăng nhập" />
      </NavBar.Collapse>
    </NavBar>
    
  );
});