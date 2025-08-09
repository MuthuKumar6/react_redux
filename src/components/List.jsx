import { useDispatch, useSelector } from "react-redux"
import { deleteList } from "./slice"
const List = () => {
    const dispatch = useDispatch()
    const lists = useSelector((state) => state.listing)

    return (
        <div>
            {lists.map((item, index) =>
                <ul key={index}>
                    <li>{item}</li>
                    <button onClick={() => dispatch(deleteList(index))}>Delete</button>
                </ul>
            )}
        </div>
    )
}

export default List;