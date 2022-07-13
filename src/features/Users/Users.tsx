import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {ReactComponent as CC} from "./../../../src/assets/abcxyz.svg";

const Users = () => {

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <>
          <a className="navbar-brand d-flex align-items-center order++.+-1 order-md-1 order-lg-1 "
             href={'#'}>
            <img src={'#'} width="35"/>
            {/*<CC style={{width: '35px'}} />*/}

            <span className="ml-2">URL Short</span>
          </a>
          <button className="navbar-toggler order-2" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
          </button>


          <div className="collapse navbar-collapse order-4 order-md-2 order-lg-2 ml-0 ml-md-4 ml-lg-4"
               id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item text-center py-2 {{ request.match(['/']) ? 'active' : '' }}">
                <a className="nav-link" href={'#'}>Home</a>
              </li>
              <li className="nav-item text-center py-2 {{ request.match(['/dashboard']) ? 'active' : '' }}">
                <a className="nav-link" href={''}>Dashboard</a>
              </li>

              <li className="nav-item text-center py-2 {{ request.match(['/users']) ? 'active' : '' }}">
                <a className="nav-link" href={'#'}>Users</a>
              </li>

              <ul className="navbar-nav ml-auto">
                @loggedIn

                @else
                <li className="nav-item text-center">
                  <a className="nav-link" href={'#'}>Login</a>
                </li>
                <li className="nav-item text-center">
                  <a className="nav-link" href={'#'}>Register</a>
                </li>
                @endloggedIn

                <div className="dropdown user-dropdown text-white order-3">
                  <div className="d-flex justify-content-center align-items-center dropdown-toggle"
                       id="userDropdown" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">
                    <img src={'#'} width="36" className="mr-2"/>

                    {/* auth.user.name*/}
                    <span className="text-white d-none d-md-inline d-lg-inline">{}</span>
                  </div>
                  <div className="dropdown-menu dropdown-menu-right user-dropdown-menu mt-2"
                       aria-labelledby="userDropdown">
                    <a className="dropdown-item" href={'#'}>Profile</a>
                    <a className="dropdown-item" href={'#'}>Change
                      Password</a>
                    <a className="dropdown-item" href={'#'}>Logout</a>
                  </div>
                </div>
              </ul>
            </ul>
          </div>
        </>
      </nav>
    </div>
  );
};

export default Users;