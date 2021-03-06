import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import routhPath from "../constant/routhPath";
import {routers} from "./routers";
import {RootState} from "../store/store";

const AppRoutes: React.FC = () => {
  const id = useSelector((state: RootState) => state.auth._id);
  const userName = useSelector((state: RootState) => state.auth.userName);
  const role = useSelector((state: RootState) => state.auth.role);
  const navigator = useNavigate();
  const location = useLocation();

  const isAuthenticated = id && userName && role;

  useEffect(() => {
    Object.keys(routers).map((key) => {
      //@ts-ignore
      const route = routers[key];
      if (route.isPrivate && route.path === location.pathname && !isAuthenticated) {
        navigator(routhPath.SIGN_IN);
      }
    });
  }, [location]);

  // if (!isAuthenticated) return <SignIn />;
  // if (isAuthenticated && location.pathname === routePath.DASHBOARD)
  //   return <Navigate replace to={routePath.DASHBOARD} />;

  useEffect(() => {
    // if (isAuthenticated) {
      navigator(routhPath.HOME);
    // } else {
    //   navigator(routhPath.SIGN_IN);
    // };
  }, [id, userName, role]);

  return (
    <Routes>
      {Object.keys(routers).map((key, index) => {
        //@ts-ignore
        const route = routers[key];
        if (route.isPrivate) {
          return route.isPrivate && isAuthenticated ? (
            <Route key={index} path={route.path} element={<route.element />} />
          ) : null;
        } else {
          return <Route key={index} path={route.path} element={<route.element />} />;
        }
      })}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default AppRoutes;
