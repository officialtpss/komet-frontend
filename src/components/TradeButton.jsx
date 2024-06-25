import React, { useContext, useEffect, useState } from 'react';
import { Socket } from "@/context/SocketSlice";

const TradeButton = () => {

    const { socket } = useContext(Socket);

    const [trade, setTrade] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isTradeClicked, setIsTradeClicked] = useState(false);

    useEffect(() => {

        socket.on("get-trade", (trade) => {
            setIsLoading(false);
            console.log('trade-data', trade);
            setTrade(trade);
            setIsTradeClicked(true);
        });

    }, [socket]);

    const tradeHandler = () => {

        setIsLoading(true);
        setIsTradeClicked(false);
        socket.emit("get-trade");
    };

    return (
        <div className='w-full'>
            {isLoading ? <p className='text-2xl	font-semibold'>Trading...</p> : <button className="btn mb-3 text-md text-white px-5 py-1 rounded bg-blue-700 hover:bg-blue-900 	" onClick={tradeHandler}>Trade</button>}
            {isTradeClicked && <pre className='overflow-y-auto bg-slate-200 px-5 py-5 rounded'>{JSON.stringify(trade, null, 2)}</pre>}
        </div>
    );
};

export default TradeButton;