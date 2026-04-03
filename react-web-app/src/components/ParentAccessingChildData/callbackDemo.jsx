import { useState } from "react"
import ChildComponent from "./ChildComp"

export default function ParentAccessingChildData() {
    const [launcherLen, setLuncherLen] = useState(0);
    function handleChildData(data) {
        console.log("DAta recevied from child:", data);
        setLuncherLen(data)
    }
    return (    
        <div>
            ParentAccessingChildData Component
            Total Items: {launcherLen}
            <hr />
            <ChildComponent parentCallback={handleChildData}></ChildComponent>
        </div>
    )
}
