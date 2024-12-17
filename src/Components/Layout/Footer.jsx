import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(<footer className={styles.footer}>
        <ul className={styles.list}>
            <li className={styles.icon}>
                <FaFacebook/>
            </li>
            <li className={styles.icon}>
                <FaInstagram/>
            </li>
            <li className={styles.icon}>
                <FaLinkedin/>
            </li>
        </ul>
        <p className={styles.copy_right}><span>Cost</span> &copy; 2024</p>
    </footer>)
}
export default Footer