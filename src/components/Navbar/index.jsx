import { NavLink } from 'react-router-dom'
import styles from './navBar.module.scss'

const Navbar = () => {


  return (
    <nav className={styles.container}>
      <NavLink to="/">
        <img src="../public/logoVioleta.png" alt="" />
      </NavLink>
      <NavLink>
        <p>
            Contacto
        </p>
      </NavLink>
    </nav>
  )
}

export default Navbar