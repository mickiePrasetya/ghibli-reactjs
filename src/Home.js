import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { User, X } from 'react-feather';

class Home extends Component {
   render() {
      return (
         <React.Fragment>
            <header className="header">
               <div className="brand">
                  <img
                     src="brand__logo"
                     src="/assets/images/img-logo.png"
                     alt="Ghibli Studio"
                  />
               </div>
               <nav>
                  <ul className="navlist">
                     <li>
                        <Link to="/films">Films</Link>
                     </li>
                     <li>
                        <Button
                           onClick={() => console.log('test')}
                           variant="link"
                        >
                           Characters
                        </Button>
                     </li>
                  </ul>
               </nav>
            </header>
            <div className="slides">
               <div className="slides__wrapper">
                  <div className="slides__content">
                     <div className="slides__title">My Neighbor Totoro</div>
                     <div className="slides__text">
                        Test this is content slide.
                     </div>
                  </div>
               </div>
            </div>
            <footer>
               <p className="footer_text">
                  All images are copyright to respective owners and protected
                  under international copyright laws.
               </p>
               <p className="footer_copy">
                  &copy; 2019. Mickie Prasetya. Made by love
               </p>
            </footer>
            <div className="sidebar">
               <div className="sidebar__header">
                  <h5 className="sidebar__title">Characters</h5>
                  <Button className="btn">
                     <X className="icon" />
                  </Button>
               </div>
               <div className="sidebar__content">
                  <div className="sidebar__item">
                     <div className="sidebar__box">
                        <User className="icon" />
                     </div>
                     <div className="sidebar__text">
                        <p className="sidebar__character">Ashitaka</p>
                        <span className="sidebar__gender">Male</span>
                     </div>
                  </div>
                  <div className="sidebar__item">
                     <div className="sidebar__box">
                        <User className="icon" />
                     </div>
                     <div className="sidebar__text">
                        <p className="sidebar__character">Ran</p>
                        <span className="sidebar__gender">Female</span>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Home;
