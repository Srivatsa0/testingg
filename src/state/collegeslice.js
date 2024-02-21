import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students : []
}

const studentDetails = createSlice({
    name : "students" , 
    initialState , 
    reducers : {
        addStudent(state , action){
            const student = {
                name : action.payload.name
            }
            state.students.push(student)
        }
    }
})

export const studentActions = studentDetails.actions
export default  studentDetails.reducer