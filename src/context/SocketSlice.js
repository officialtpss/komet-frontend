import React, { createContext, useState } from 'react'
import { io } from "socket.io-client";

export const Socket = createContext();

const SocketContext = ({ children }) => {

    const socketS = io.connect("http://localhost:8000");
    const [socket] = useState(socketS);

    return (
        <Socket.Provider value={{ socket }}>{children}</Socket.Provider>
    )
}

export default SocketContext;