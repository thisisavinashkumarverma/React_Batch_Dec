import {useFetchAPI} from "./fetchHook";

export default function LoadProducts() {
    const { data, loading, error } = useFetchAPI('https://fakestoreapi.com/products');

    if (loading) {
        return (
            <h3>Data is loading......</h3>
        )
    } else if (error) {
        return (
            <h3>Error - {error}</h3>
        )
    } else if (data) {
        return (
            <>
                 products got loaded from API - {JSON.stringify(data)}
            </>
        )
    }
}