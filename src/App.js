import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { studentActions } from './state/collegeslice';
import { useSelector , useDispatch} from 'react-redux';

function App() {

  const student = useSelector((state) => state.student.students)
  console.log(student);
  const dispatch = useDispatch();
  const initialvalue = 0 ;
  const count = useRef(initialvalue)
  console.log("count" , count.current);

  const string = ""
  const textbox = useRef(string)

  const handleRef = () => {
    const obj = {
      name  : textbox.current.value
    }
    console.log(obj);
    dispatch(studentActions.addStudent(obj))
  }
  return (
    <>
      <Box sx={{display :"flex" , justifyContent : "flex-start"  ,alignItems :"center" }}>
      <TextField placeholder='Enter Name' inputRef={textbox} />
      <Button variant='contained' color='primary' onClick={handleRef}>
        Click
      </Button>
      </Box>
    </>
  );
}

export default App;
