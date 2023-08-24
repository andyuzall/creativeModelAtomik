import { NavLink } from 'react-router-dom'
import styles from './card.module.scss'

const Card = () => {

    let activeStyle = {
        border: "2px solid #B37FF4",
        borderRadius: "50%",
      }


  return (
    <div className={styles.container}>
        <NavLink to="Desktop" style={({ isActive }) => (isActive ? activeStyle : undefined )}>
            <img src="./public/desktop.png" alt="" />
        </NavLink>
        <NavLink to="Mobile" style={({ isActive }) => (isActive ? activeStyle : undefined )}>
            <img src="./public/smartphone.png" alt="" />
        </NavLink>
    </div>
  )
}

export default Card