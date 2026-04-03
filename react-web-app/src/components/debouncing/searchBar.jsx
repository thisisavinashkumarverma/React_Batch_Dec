import { useEffect, useState } from "react"


function useDebounce(value, delay) { //Custom hook to handle debouncing logic
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);
    return debouncedValue;
}

export function SearchBar() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);
    useEffect(() => {
        if (debouncedQuery) {
            console.log("Make an api call with query:", debouncedQuery);
        }
        return () => {
            console.log("SearchBar component unmounted"); 
        }   
    }, [debouncedQuery])
  return (
    <>
      <h2>Search Bar Component</h2>
      <input type="text" placeholder="Search..."  value={query} onChange={(event) => {setQuery(event.target.value)}}/>
    </> 
  )
}

export default SearchBar