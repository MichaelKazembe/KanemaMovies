import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <hr />
            <p style={{ textAlign: 'center'}}>&copy; {currentYear} Kanema Movies. All rights reserved.</p>
        </footer>
    );
};

export default Footer;