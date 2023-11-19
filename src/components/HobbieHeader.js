import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './HobbieHeader.css';

function HobbieHeader() {

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
        <div className="hobbie-homepage">
            <h1 className={isBig ? 'hobbie-header':'hobbie-header-small'}>Hobbies</h1>
        </div>
    )
}

export default HobbieHeader;