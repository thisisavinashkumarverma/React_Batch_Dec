
export default function EventHandlingDemo() {

    function sample(event) {
        // event is a predefind object gets credated automatically, everytime an action happens, it holds all the meta data /extra info (type of event, target element, position where event occurred, etc. )of the event been generated
        console.log("Hello i got invoked");
    }

    function dojob(name) {
        console.log("name is " + name)
    }

    return (
        <>
            <div>Event handling demo</div>
            <button onClick={sample}>Click here</button>

            <button onClick={() => {console.log("2nd click")}}>Click here 2</button>

            <button onClick={() => {dojob('krish')}}>Click here 2</button>
        </>
    )
}
