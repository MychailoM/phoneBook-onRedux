import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./filterSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    return(
        <label>
            <input type="text" placeholder="Enter your name" onChange={(e) => dispatch(setFilter(e.target.value))} value={filter} />
        </label>
    )
}

export default Filter;