import { configureStore } from "@reduxjs/toolkit";
import studentDetails from "../state/collegeslice"

const store = configureStore({
    reducer : {
        student : studentDetails
    }
})

export default store