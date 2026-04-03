import { use } from 'express/lib/application';
import React from 'react';
export default function Sample() {

    useEffect(() => {
        // This will run once when the component mounts
        console.log('Component mounted');
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log('Data fetched:', response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures it runs only once
    return (
        <div>
            <h1>Sample Component</h1>
            <p>This is a sample React component for testing.</p>
        </div>
    );
}