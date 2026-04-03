import { UserDataContext, useUserData } from "../comman";
export default function Component1() {
    var data = useUserData();
    return (
        <>
            <hr />
            <br />            
                Component 1   - {data.userName} - {data.age}
            <br />
            <hr />
        </>
    )
}