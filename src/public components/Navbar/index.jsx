import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

/**
 * Component that represents the Navbar of the application.
 */
const Navbar = () => {

    return (
        <div ref={ref} className="navbar">
            <div>
                <h1 className="navbar-title">Busqueda de eventos</h1>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Buscar eventos"
                       onChange={handleInputChange}
                       onKeyDown={handleInputKeyDown}
                       value={search}
                       className="navbar-search-input"
                />
                <Link to="/profile/my-info" style={{
                    marginLeft: 10,
                    color: "#213547",
                    textDecoration: "none",
                }}>Mi perfil</Link>
            </div>
        </div>
    );
};

Navbar.displayName = "Navbar";

export default Navbar;