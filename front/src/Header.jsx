import {createRef, useEffect, useRef} from "react";


export const Header = () => {


    const logo = useRef();


    const handleScroll = () => {
        if(window.scrollY > 0){
            if(logo.current.classList.length !== 0) logo.current.classList.remove('scrolledUp');
            logo.current.classList.add('scrolledDown');
        }
        else{
            if(logo.current.classList.length !== 0) logo.current.classList.remove('scrolledDown');
            logo.current.classList.add('scrolledUp')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);




    return (
        <header >
            <div  ref ={logo}><h1>BuRy</h1></div>
        </header>
    )
}