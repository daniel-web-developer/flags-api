'use client';
import { useState } from 'react';
import Link from 'next/link'

export default function Layout({ children }){
    const [theme, setTheme] = useState("dark");

    function changeTheme(){
        theme == "dark" ? setTheme("light") : setTheme("dark");
        console.log(theme);
    }
    
    return(
        <>
            <div className={theme == "dark" ? "theme--dark" : "theme--light"}>
                <div className="header">
                    <header className="flex flex-justcont-sb flex-alignit-c padding">
                        <Link href='/' className="header-logo">Where in the world?</Link>
                        <button onClick={changeTheme}>{theme == "dark" ? "Light mode" : "Dark mode"}</button>
                    </header>
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}