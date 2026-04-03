 import {useFetchAPI, useAxiosApi} from "./fetchHook";

export default function LoadISROData() {
    const {data, loading, error} = useFetchAPI('https://isro.vercel.app/api/centres');

    if (loading) {
        return (
            <>
                <h3>ISRO Data is loading......</h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
            </>
        )
    } else if (error) {
        return (
            <h3>Error - {error}</h3>
        )
    } else if (data) {
        return (
            <>
                Load ISRO Data - {JSON.stringify(data)}
            </>
        )
    }
}