import axios from "axios";
import { useEffect, useState } from "react";

// export function useAxiosApi() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     var fetchData = ({url, method = 'GET', userInput = {} }) => {
//         axios({
//             method: method,
//             url: url,
//             data: userInput
//         }).then((response) => {
//             console.log(response.data)
//             setData(response.data);
//         }).catch((err) => {
//             setError("Error while fetching data " + err.message);
//         }).finally(() => {
//             setLoading(false);
//         });
//     }
//     return {data, loading, error, fetchData};
// }

export const useAxiosApi = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const axiosFetch = async (configObj:any) => {
        const { axiosInstance, method, url, reqConfig = {} } = configObj;
        try {
            setLoading(true);
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...reqConfig.data
            });
            setResponse(res.data);
            setError(''); // Clear previous errors on success
            return res.data;
        } catch (err:any) {
            if (err.name !== 'CanceledError') {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };
    return { response, error, loading, axiosFetch };
};
