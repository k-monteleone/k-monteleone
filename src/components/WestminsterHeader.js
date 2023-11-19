import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './WestminsterHeader.css';

function WestmisnterHeader() {

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
        <div className="westminster-homepage">
            <h1 className={isBig ? 'westminster-header':'westminster-header-small'}>Westminster College</h1>
        </div>
    )
}

export default WestmisnterHeader;