"use client";

import React from "react";
import { WalletzProvider, WalletzConfig } from "walletz";

const LocalWalletzConfig: WalletzConfig = {
  rpcUrl: "https://solana.drpc.org/",
  autoConnect: true,
  theme: "dark" //or "light"
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WalletzProvider config={LocalWalletzConfig}>
      {children}
    </WalletzProvider>
  );
}