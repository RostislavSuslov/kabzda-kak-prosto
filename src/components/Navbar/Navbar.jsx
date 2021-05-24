import React from 'react';
import moduleCSS from './Navbar.module.css';
import Navigation from './Navigation/Navigation';
import Friends from "./Friends/Friends";


const Navbar = (props) => {

    return (
        <div className={moduleCSS.sidebar}>
            <div className="custom">
                <section id="sha_temp_body" className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <span className="sha_temp">
                              <span>
                                <span className="temp-data"> 16
                                    {/*<sup>°C</sup>*/}
                                </span>
                                <span className="temp-info">
                                    Messages
                                </span>
                              </span>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
            <Navigation/>
            <Friends state={props.state}/>
        </div>
    )
}

export default Navbar;