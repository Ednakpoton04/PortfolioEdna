import { Container } from "lucide-react";


const Navbar = () => {
    return (
        <div className=" flex justify-center md:justify-between items-center p-4">
            <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
            <Container className="mr-2" />  
            Jolie
            <span className="text-secondary">DEV</span>
            </a>

            <ul className="hidden md:flex space-x-4">

                <li>
                    <a href="#Home" className="btn btn-sn btn-ghost">
                        Accueil
                    </a>
                </li> 

                <li>
                    <a href="#About" className="btn btn-sn btn-ghost">
                        A propos
                    </a>
                </li>

                <li>
                    <a href="#Experiences" className="btn btn-sn btn-ghost">
                        Mes expériences
                    </a>
                </li> 

                <li>
                    <a href="#Projects" className="btn btn-sn btn-ghost">
                        Mes projets
                    </a>
                </li> 
                
            </ul>
        </div>
    );
};

export default Navbar;