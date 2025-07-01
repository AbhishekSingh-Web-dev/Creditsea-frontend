import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const syncEvents = async () => {
    const queue = JSON.parse(localStorage.getItem("offlineQueue")|| "[]")

    if(queue.length === 0)
        return;

    try{
       const res = await axios.post(`${API_URL}/api/events`, {
      events: queue,
    });
        if(res.data.success){
           console.log("Events synced successfully");
           localStorage.removeItem("offlineQueue")       
        }
    } catch(err){
        console.error("Error syncing events:",err);  
    }
}