// Home.js
import React from 'react';
import UpcomingEvents from './UpcomingEvents';
import UpcomingSermons from './UpcomingSermons';
import Devotional from './Devotional';
import Books from './Books';
import Events from './Events';
import doxa3 from '../Image/doxa3.jpg';
import doxa7 from '../Image/doxa7.jpg';
import Donate from './Donate';
const Home = () => {
  return (

    <div>
      {/* <h2>Welcome to DoxaPalace </h2>
      <p>
        Experience the love and grace of our community. Watch our welcome video and explore the upcoming events.
      </p> */}
      {/* <img src={doxa3} alt=''></img><br/> */}

      <img src={doxa7} alt=''></img>

      {/* Upcoming Events */}
      {/* <UpcomingEvents /> */}
        <Events/>
      {/* Latest Sermons */}
      <UpcomingSermons />
      <Donate/>
      <Devotional/>
      <Books/>
    </div>
  );
    
  
}
export default Home