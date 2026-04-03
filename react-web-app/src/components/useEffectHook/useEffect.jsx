import { useEffect, useState } from "react"

export default function useEffectDemo() {
    console.log("Component got invoked")
    const [theme, setTheme] = useState('pink');
    const [bgColor, setbGcolor] = useState('yellow');
    
    useEffect(() => {
        console.log("First USE EFFECT GOT INVOKED");
        document.querySelector("#container").style.color = theme;
        document.querySelector("#container").style['background-color'] = bgColor;
    }, [theme, bgColor]);

    return (
        <>
            <select onChange={(event) => {setTheme(event.target.value)}} value={theme}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="pink">Pink</option>
            </select>
            <hr />
            Background Color <select onChange={(event) => {setbGcolor(event.target.value)}}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="pink">Pink</option>
            </select>
            <hr />
            <div id="container">Demonstrating use effect</div>
        </>
    )   
}