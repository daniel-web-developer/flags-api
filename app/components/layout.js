'use client';
import { useState } from 'react';

// import Navbar from './header.js'
// import theme from './header.js'

export default function Layout({ children }){
    const [theme, setTheme] = useState("dark");

    function changeTheme(){
        theme == "dark" ? setTheme("light") : setTheme("dark");
        console.log(theme);
    }
    
    return(
        <>
            <div className={theme == "dark" ? "theme--dark" : "theme--light"}>
                <div className="header theme-dark">
                    <header className="flex flex-justcont-sb flex-alignit-c theme-dark padding">
                        <p className="header-logo">Where in the world?</p>
                        <button onClick={changeTheme}>{theme == "dark" ? "Light mode" : "Dark mode"}</button>
                    </header>
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}