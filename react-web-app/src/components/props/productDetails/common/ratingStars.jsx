import './ratingStars.css';
export default function RatingStars(props)  {
    var rating = props.rating;
    var fullStars = Math.floor(rating);
    var halfStar = rating % 1 !== 0 ? 1 : 0;
    var emptyStars = 5 - fullStars - halfStar;
    return (
        <>
            {props.children} - 
            <div className="ratingContainer" title={"rating -> " + rating}>
                {
                    [...new Array(fullStars)].map((item, index) => (
                        <div className="fullStar" key={index}></div>
                    ))
                    
                }
                {
                    halfStar == 1 &&
                    <div className="halfStar"></div>
                }
                {
                     [...new Array(emptyStars)].map((item, index) => (
                        <div className="disabledStar" key={index}></div>
                    ))
                }
            </div>
        </>
    )
}