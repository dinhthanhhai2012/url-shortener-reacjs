import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SocketContext, socketInstance} from "./socket/socket2";
import './App.css';
import AppRoutes from "./routers/AppRoutes";
import Users from "./features/Users";

const App: React.FC = () => {
    return (
        <SocketContext.Provider value={socketInstance}>
            <div className={'App'}>
                <ToastContainer />
                {/*<AppRoutes/>*/}
                <Users/>
            </div>
        </SocketContext.Provider>
    );
};

export default App;