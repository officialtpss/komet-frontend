"use client";

import TradeButton from "@/components/TradeButton";
import SocketSlice from "@/context/SocketSlice";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
            <SocketSlice>
                <TradeButton />
            </SocketSlice>
        </main>
    );
}
