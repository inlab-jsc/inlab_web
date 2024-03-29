import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import PropTypes from 'prop-types'
import styles from '@styles/HeaderItem.module.css'

function HeaderItem({href,text}){
  return(
    <Link href={`${href}`} passHref>
      <Nav.Link className={styles['header-item']}>{text}</Nav.Link>
    </Link>
  )
};
HeaderItem.propTypes={
  href: PropTypes.string,
  text: PropTypes.string,
}
export default React.memo(HeaderItem)