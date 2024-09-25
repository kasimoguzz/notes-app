import { useDispatch } from "react-redux";
import { handleInput } from "../redux/notes/noteSlice";
import ColorCircle from "./ColorCircle";
import AddButton from "./AddButton";

function TextArea() {
  const dispatch = useDispatch();
  return (
    <div className="textAreaBox">
      <div className="textArea">
        <textarea
          placeholder="enter your note here"
          onChange={(e) => dispatch(handleInput({ value: e.target.value }))}
        ></textarea>
      </div>
      <div className="toogleBox">
        <div className="colorCircle">
          <ColorCircle color="#f06292" />
          <ColorCircle color="#ba68c8" />
          <ColorCircle color="#ffd54f" />
          <ColorCircle color="#4fc3f7" />
          <ColorCircle color="#aed581" />
        </div>
        <AddButton />
      </div>
    </div>
  );
}

export default TextArea;
