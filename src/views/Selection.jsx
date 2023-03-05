import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setStudent, setTeacher } from "../reducers/role";

const Selection = () => {
  const dispatch = useDispatch();
  return (
    
    <div className="selection">
      <style>{'body { background-color: #66FF99; }'}</style>
      <h2>Who you are</h2>
      <div className="button-bar">
        <Button
          size="large"
          variant="contained"
          onClick={() => dispatch(setStudent())}>
          Student
        </Button>
      </div>
      <div className="button-bar">
        <Button
          size="large"
          variant="contained"
          onClick={() => dispatch(setTeacher())}>
          Teacher
        </Button>
      </div>
    </div>
  );
};

export default Selection;
