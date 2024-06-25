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
        <div>
            {isLoading ? 'Loading...' : <button onClick={tradeHandler}>Trade</button>}
            {isTradeClicked && <pre>{JSON.stringify(trade, null, 2)}</pre>}
        </div>
    );
};

export default TradeButton;