export default function DataBindingDemo() {
    var userName = 'Raj';
    var userAge = 20;
    var isFeePaid = true;
    var marks = [85, 90, 78, 92, 88];
    var address = {
        street: '123 Main St',
        city: 'Mumbai',
        zip: '400001'
    }
    return (
        <div> 
            <div>userName - {userName}</div>
            <div>userAge - {userAge}</div>
            <div>isFeePaid - {isFeePaid.toString()}</div>
            <div>marks - {marks.join(', ')}</div>
            <div>Address - {JSON.stringify(address)}</div>
            <ul>
                {
                    Object.keys(address).map((key, index) => (
                        <li key={index}>{key} - {address[key]}</li>
                    ))
                }
            </ul>         
        </div>

        
    )
}