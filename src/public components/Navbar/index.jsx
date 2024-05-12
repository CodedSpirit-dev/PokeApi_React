// eslint-disable-next-line no-unused-vars
import React from 'react';

import styles from './styles.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;