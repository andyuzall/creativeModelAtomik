import { Link } from 'react-router-dom'
import styles from './footer.module.scss'


const Footer = () => {
  return (
    <div className={styles.container}>
        <p>
            Copyright 2022 © Atomik Pro
        </p>
        <div>
            <Link to="https://www.instagram.com/atomik.pro/" target="_blank">
                <img src="./public/instagram.png" alt="Instagram reference" />
            </Link>
            <Link to="https://www.instagram.com/atomik.pro/" target="_blank">
                <img src="./public/linkedin.png" alt="Linkedin Reference" />
            </Link>
        </div>
    </div>
  )
}

export default Footer