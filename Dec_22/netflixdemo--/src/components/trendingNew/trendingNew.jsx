import './trendingNew.css';

import one from '../../assets/trending/one.webp';
import two from '../../assets/trending/two.webp';
import three from '../../assets/trending/three.webp';
import four from '../../assets/trending/four.webp';
import five from '../../assets/trending/five.webp';
import six from '../../assets/trending/six.webp';
import seven from '../../assets/trending/seven.webp';
import eight from '../../assets/trending/eight.webp';
import nine from '../../assets/trending/nine.webp';
import ten from '../../assets/trending/ten.webp';

export default function TrendingNew() {
    var imageNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    var data = {
      one: one, two: two, three: three, four: four, five: five, six: six, seven: seven, eight: eight, nine: nine, ten: ten
    };

    // useRef() hook
    var nextIncrement = 0;
    var handleNextClick = () => {
        nextIncrement += -80;
        console.log('translateX(-' + nextIncrement+ 'px)')
        document.querySelector(".sliderTracker").style.transform = 'translateX(' + nextIncrement+ 'px)';

        var transaltevalue = 'translateX(' + nextIncrement+ 'px)';
    } 
    var handlePrevClick = () => {
        nextIncrement += +80;
        document.querySelector(".sliderTracker").style.transform = 'translateX(' + nextIncrement+ 'px)';
    } 
  return (
    <div className="trending-new">
      <h1>Trending Now</h1>
      <div className='trendingSlider'>
        <div className='prevbtn' onClick={handlePrevClick}>
          &lt;
        </div>
          <div className='sliderContainer'>
            <div className='sliderTracker' style={{transform: ''}}>
              
              {
                imageNames.map((item, index) => (
                      <img className='dimentions' src={data[item]} key={index} />
                ))
              }
            </div>
          </div>
        <div className='nextbtn' onClick={handleNextClick}>&gt;</div>
      </div>
    </div>
  );
}
{/* <div className={"dimentions " + item} key={index}></div> */}