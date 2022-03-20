import React from 'react';

function Header() {
    return (
        <header>
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#top">Good Luck Tutors</a>
                    <a href = "#contact" class="btn btn-sm btn-color justify-content-end">Contact Us</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;