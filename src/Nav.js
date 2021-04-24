import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
    const [show, setShow] = useState(false)

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://fontmeme.com/permalink/210424/a1838eceebd4c65e2f62c6bb6becab66.png"
          alt=""
        />

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
