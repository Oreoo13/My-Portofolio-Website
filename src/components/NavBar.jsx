import { useEffect, useState } from "react";

const NavBar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const opts = { passive: true };
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, opts);
        return () => {
            window.removeEventListener('scroll', handleScroll, opts);
        };
    }, []);



    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${active ? 'bg-zinc-900/60 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-14">
                    <div className="logo">
                        <h1 className="text-2xl md:text-3xl font-bold text-white mx-6">Portofolio</h1>
                    </div>

                    <ul className={`menu flex items-center sm:gap-8 gap-3 md:static fixed left-1/2 -translate-x-1/2
                        md:-translate-x-0 md:opacity-100 bg-white/30 p-3 rounded-br-2xl
                        rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-16 opacity-100" : "-top-20 opacity-0" }`}>
                        <li>
                            <a href="#beranda" className="hover:underline sm:text-base text-sm font-medium">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline sm:text-base text-sm font-medium">About</a>
                        </li>
                        <li>
                            <a href="#project" className="hover:underline sm:text-base text-sm font-medium">Project</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline sm:text-base text-sm font-medium">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar