import './app.css';
import { useEffect, useState } from 'react';

export default function RefUsage_Cleanup() {
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        console.log("Component got munted")
        return () => {
            console.log("RefUsage_Cleanup component unmounted");
        }
    }, [])
  
    return (
        <div>
            <h2>Ref Usage with Cleanup Example Component</h2>
            {
                showDialog &&
                <div className="dialog-box" ref={(node) => {
                    node.style.backgroundColor = "lightblue";
                    console.log("Dialog box mounted:", node);
                    return () => {
                        console.log("Dialog box unmounted:", node);
                    };
                }}>
                    Dialog box content
                </div>
            }
            <button onClick={() => {setShowDialog(true)}}>Show Dialog</button>
            <button onClick={() => {setShowDialog(false)}}>Hide Dialog</button>
        </div>
    );
}