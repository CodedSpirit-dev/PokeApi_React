import charmanderIcon from '../../assets/charmanderIcon.png';
import {Link} from "react-router-dom";

import styles from './styles.module.css';

const Header = () => {
    return (
        <>
            <div className={styles.headerMain}>
                <Link to={"/"}>
                    <img src={charmanderIcon} alt="Charmander Icon" width={100} height={100} />
                <span>
                    Pokédex
                </span>
                </Link>
            </div>
        </>
    );
}

export default Header;