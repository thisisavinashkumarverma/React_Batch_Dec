import axios from "axios";
import { useEffect, useState } from "react";

export default function ChildComponent({parentCallback}) {
    const [launchers, setLaunchers] = useState([]);
    useEffect(() => {
        axios.get('https://isro.vercel.app/api/launchers')
            .then(response => {
                console.log('Data fetched from child component:', response.data);
                setLaunchers(response.data.launchers);
                parentCallback(response.data.launchers.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div>
            Child Component- {JSON.stringify(launchers)}
        </div>
    )
}   