import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                    {props.searchBar ? (
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </nav>
    );
}
Header.propTypes = {
    // default prop types, it throws warning in console if it doesn't match
    title: PropTypes.string,
    searchBar: PropTypes.bool,
};
Header.defaultProps = {
    // default value if user didn't pass any value in parent components
    title: "Your Title Here",
    searchBar: true,
};
