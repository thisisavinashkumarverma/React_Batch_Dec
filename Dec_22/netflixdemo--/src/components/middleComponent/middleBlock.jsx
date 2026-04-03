import './middleBlock.css';

export default function MiddleBlock() {
    return (
        <div className="middle-block">
            <h1>Unlimited movies, shows and more.</h1>
            <h3>Starts at ₹149. Cancel at any time.</h3>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className='input-group mb-3 w-50 mx-auto'>
                <input type="text" className="form-control form-control-lg" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-danger btn-lg" type="button" id="button-addon2">Get Started &gt;</button>
            </div>
        </div>
    )
}