import {configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import chatSlice from "./chatSlice";

const Store = configureStore({
    reducer :{
        app : sidebarSlice,
        chat : chatSlice,
    },
});

export default Store;