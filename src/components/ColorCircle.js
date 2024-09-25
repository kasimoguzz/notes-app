import { useDispatch, useSelector } from "react-redux";
import { handleColor } from "../redux/notes/noteSlice";

function ColorCircle({ color }) {
  const selectedColor = useSelector((state) => state.notes.selectedColor);
  const dispatch = useDispatch();

  return (
    <div
      className={`circle ${selectedColor === color && "selectedColor"}`}
      onClick={() => dispatch(handleColor({ value: color }))}
      style={{backgroundColor: color}}
    />
  );
}

export default ColorCircle;
