import { useDispatch } from "react-redux";
import { setFilter } from "../redux/notes/noteSlice";

function Search() {
  const dispatch = useDispatch();
  return (
    <div className="search-box">
      <input
        onChange={(e) => dispatch(setFilter({ value: e.target.value }))}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
