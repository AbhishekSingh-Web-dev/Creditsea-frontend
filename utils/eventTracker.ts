

export const logEvent = (type: string, page: string, metadata:any={})=>{
    const event ={
        userId: "guest_user",
        sessionId: "session_"+Math.floor(Date.now()/1000),
        type: type,
        page:page,
        metadata:metadata,
        timestamp:new Date().toISOString(),
    }
    const queue = JSON.parse(localStorage.getItem("offlineQueue") || "[]");
    queue.push(event);
    localStorage.setItem("offlineQueue", JSON.stringify(queue));
    console.log("Event logged:", event);
}