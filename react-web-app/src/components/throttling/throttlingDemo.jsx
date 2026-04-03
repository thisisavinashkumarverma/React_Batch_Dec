import { useEffect, useState, useRef } from "react"

function ThrottlingDemo() {
  var a =10;
  const [scrollCount, setScrollCount] = useState(0);
  const throttlingTimeoutRef = useRef(null);  

  useEffect(() => {
    const handleScroll = () => {
      console.log("user did a scroll event")
      if (throttlingTimeoutRef.current == null) {
        throttlingTimeoutRef.current = setTimeout(() => {
          setScrollCount(window.scrollY);
          throttlingTimeoutRef.current = null;

          console.log("Invoke an api or do some processing here...");
          console.log("Scroll event handled at: ", new Date().toLocaleTimeString());
        }, 1000); // Throttle to 200 millisecond
      } 
      
    };
    window.addEventListener("scroll", handleScroll);

    // window.addEventListener("resize", () => {
    //   console.log("window resized at: ", new Date().toLocaleTimeString());
    // });

    return () => { 
      // unmounting phase of the component lifecycle
      window.removeEventListener("scroll", handleScroll);
      if (throttlingTimeoutRef.current) {
        clearTimeout(throttlingTimeoutRef.current);
      }
    };
  }, [a]);

  return (
    <div>
      <h1>Throttling Demo</h1>
      <div style={{height: '250vh', padding: '20px', border: '1px solid black'}}></div>
    </div>  
  )
}``

export default ThrottlingDemo