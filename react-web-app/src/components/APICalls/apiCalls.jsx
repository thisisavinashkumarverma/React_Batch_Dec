import { useEffect, useState } from "react";
import axios from "axios";
  

export default function ApiCallDemo() {
    const[satelliteInfo, setSatelliteInfo] = useState([]);    
    const[masterSatelliteInfo, setMasterSatelliteInfo] = useState([]); 
    const[isSorted, setIsSorted] = useState(false);
    useEffect(() => {
        // fetch('https://isro.vercel.app/api/customer_satellites').then(res => {return res.json()}).then((result) => {
        //     console.log('result');
        //     console.log(result);
        // });

        axios.get('https://isro.vercel.app/api/customer_satellites').then((response) => {
            var filteredList = [];
            response.data.customer_satellites.forEach((item) => {                
                item.mass = (item.mass == '') ? 0 : parseInt(item.mass);
                filteredList.push(item);
            });

            setSatelliteInfo(filteredList);
            setMasterSatelliteInfo(filteredList);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    var handleCountryChange = (event) => {
        var userSelection = event.target.value;
        userSelection = userSelection.toLowerCase();
        var filteredList = masterSatelliteInfo.filter((item) => {
            var str = item.country.substr(0, userSelection.length);            
            if (str.toLowerCase() == userSelection) {
                return true;
            }
        });
        setSatelliteInfo(filteredList);
    }
    
    function handleMassClick() {
        setIsSorted(!isSorted);
        var sortedList = satelliteInfo.sort((a, b) => {
            if (isSorted) {
                if (a.mass > b.mass) {
                    return -1;
                }
            } else {
                if (a.mass < b.mass) {
                    return -1;
                }
            }
        });
        console.log('sortedList ' + isSorted);
        console.log(sortedList);
        setSatelliteInfo(sortedList);
    }

    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>
                            Country <br />
                            <input type="text" onChange={handleCountryChange}/>
                        </th>
                        <th>Launch Date</th>
                        <th onClick={handleMassClick}>Mass</th>
                        <th>Launcher</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        satelliteInfo.map((satellite, index) => (
                            <tr key={index}>
                                <td>{satellite.id}</td>
                                <td>{satellite.country}</td>
                                <td>{satellite.launch_date}</td>
                                <td>{satellite.mass}</td>
                                <td>{satellite.launcher}</td>
                            </tr>
                        ))  
                    }
                </tbody>
                {
                    (satelliteInfo.length == 0) &&
                        <tbody>
                            <tr>
                                <td colSpan="6">
                                    No Results found
                                </td>
                            </tr>
                        </tbody>
                }
            </table>
        </>
    )
}