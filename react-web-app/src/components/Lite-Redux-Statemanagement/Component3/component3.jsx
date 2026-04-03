
import { UserDataContext, useUserData, useUserDispatcher } from "../comman";
export default function Component3() {
    var data = useUserData();
    var dispatcher = useUserDispatcher();

    function handleButtonClick() {
        dispatcher({type: 'increment'});
    }
    return (
        <>
            <hr />
            <br />            
                Component 3  - {data.userName} - {data.age}  -
                <button onClick={handleButtonClick}>Increment</button>
            <br />
            <hr />
        </>
    )
}