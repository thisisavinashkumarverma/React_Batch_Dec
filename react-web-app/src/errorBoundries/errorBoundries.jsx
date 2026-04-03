

export function DataComponent() {
    var data = false;
    if (!data) {
        throw new Error("Error while fetching data");
    }
    return (
        <div>
            <h2>Data Component</h2>
            <p>This component simulates an error during data fetching.</p>
        </div>
    );
}