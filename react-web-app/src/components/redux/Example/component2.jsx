import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../slice";
export default function Component2() {
    const counterValue = useSelector((state) => state.counter.value);
    var dispatcher = useDispatch();
    function handleUpdateName() {
        // api call
        dispatcher(updateName({name: "Prasad", location: 'hyd', pin: 124}));
    }
    return (
        <>
            Component 2 - {counterValue}
            <button onClick={handleUpdateName}>Update UserName</button>
        </>
    )
}