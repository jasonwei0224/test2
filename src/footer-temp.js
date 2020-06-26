import React from 'react';
// import './footer-temp.css';

const FooterPage = () => {
    return (
        <div className="footer">
            <p className="footer_content">
                &copy; {new Date().getFullYear()} TAIWANESE CANADIAN ASSOCIATION OF TORONTO
            </p>
        </div>
    )
}

export default FooterPage;