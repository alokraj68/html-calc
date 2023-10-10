import { Outlet, Link } from "react-router-dom";
import styles from './style.module.css';

const Layout = () => {

    return (
        <div className={styles.divStyling}>
            <nav className={styles.navStyling}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/" className={styles.a}>Home</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/calculator" className={styles.a}>Calculator</Link>
                    </li>
                    {/* <li>
                        <Link to="/contact">Contact</Link>
                    </li> */}
                </ul>
            </nav>

            <Outlet />
        </div>
    )
};

export default Layout;