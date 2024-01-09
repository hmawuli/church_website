import React from "react";
import doxa1 from '../Image/doxa1.jpg';
import doxafaith from '../Image/doxafaith.jpg'
const Events = () => {

  return (

    <div>

      {/* Calendar Displaying Upcoming Events */}
      <section>
        <h3>Upcoming Events</h3>
        <p>
       <img src={doxa1} alt=""></img><br/>
       
       <img src={doxafaith} alt="" />

          {/* You can integrate a third-party calendar library or use a custom calendar component here */}
        </p>
      </section>

      {/* Details about Special Events or Conferences */}
      {/* <section>
        <h3>Special Events and Conferences</h3>
        <p>
          Get details about our special events and conferences that bring our community together.
        </p>
      </section> */}
    </div>

  );
}
export default Events;