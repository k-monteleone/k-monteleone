import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './ContactHeader.css';

function ContactHeader() {
    const [isBig, setSize] = useState(false);

    const showBig = () => {
        if (window.innerWidth <= 1060) {
            setSize(false);
        } else {
            setSize(true);
        }
    };

    useEffect(() => {
        showBig()
    }, []);

    window.addEventListener('resize', showBig)
    
    return (
        <div className="contact-homepage">
            <h1 className={isBig ? 'contact-header':'contact-header-small'}>Contact Me</h1>
        </div>
    )
}

export default ContactHeader;