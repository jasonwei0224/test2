import React from 'react';
import './footer-temp.css';

const FooterPage = (props) => {
    return (
        <div className="footer">
            <p className="footer_content">{props.content}

            </p>
        </div>
    )
}

export default FooterPage;
