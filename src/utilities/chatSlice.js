import {createSlice} from "@reduxjs/toolkit";
import {Message_Limit} from "./links"

const chatSlice  = createSlice({
    name : "chat",
    initialState : {
        messages : [],
    },
    reducers : {
        // unshift ka use karke messege bottom to top print honge jisme latest messege bottom par rahega jaise live chat me hota hai .
        // state.messages.splice(20,1) ka use karke 20 message ke baad top se 1 message delete ho jayega .
        addMessage : (state,action)=>{
            state.messages.splice(Message_Limit,1);
            state.messages.unshift(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;