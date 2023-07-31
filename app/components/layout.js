'use client';
import { useState } from 'react';
import Link from 'next/link'

export default function Layout({ children }){
    const [theme, setTheme] = useState("dark");

    function changeTheme(){
        theme == "dark" ? setTheme("light") : setTheme("dark");
    }
    
    return(
        <>
            <div className={theme == "dark" ? "theme--dark" : "theme--light"}>
                <div className="header">
                    <header className="flex flex-justcont-sb flex-alignit-c padding">
                        <Link href='/' className="header-logo">Where in the world?</Link>
                        <button onClick={changeTheme} className='flex flex-alignit-c'>{theme == "dark" ? <span className="material-symbols-outlined">light_mode</span> : <span className="material-symbols-outlined material-symbols-outlined-dark">dark_mode</span>}
                        {theme == "dark" ? "Light mode" : "Dark mode"}</button>
                    </header>
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}