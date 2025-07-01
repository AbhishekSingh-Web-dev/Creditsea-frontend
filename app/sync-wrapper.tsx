'use client';
import React, { useEffect } from "react";
import { syncEvents } from "@/utils/sync";

export default function SyncWrapper({children}:{children: React.ReactNode}){
    useEffect(()=>{
        const handleSync = ()=>{
            if(typeof navigator!=="undefined" && navigator.onLine)
                syncEvents();
        };
        window.addEventListener("online",handleSync);
        handleSync();

        return () => window.removeEventListener("online", handleSync);
  }, []);

  return <div>{children}</div>
}