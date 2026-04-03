import { Link, Outlet } from "react-router-dom";

export default function Contact() {
    return (
        <div>
            Contact detils about to get loaded
            <div className="tabContainer">
                <div>
                    <Link to='contact1'>    Compnay Contact</Link>
                </div>
                <div>
                     <Link to='contact2'> Main Branch Contact</Link>
                </div>
                <div>
                    <Link to='contact3'> Employee Contact</Link>
                </div>
            </div>
            <div>
                <div className="block"></div>
                <div className="block">
                    <Outlet></Outlet>
                </div>
                <div className="block"></div>

            </div>
        </div>
    )
}