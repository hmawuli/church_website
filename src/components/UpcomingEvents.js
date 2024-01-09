import React from 'react';

const UpcomingEvents = () => {
  const UpcomingEvents = [
    {
      id: 1,
      title: 'Sunday Service',
      date: '2023-12-03',
      time: '10:00 AM',
      location: 'Church Sanctuary',
    },
    {
      id: 2,
      title: 'Community Outreach',
      date: '2023-12-10',
      time: '2:00 PM',
      location: 'Local Community Center',
    },
    // Add more upcoming events as needed
  ];
  return (
    // Dummy data for upcoming events
    <div>
      <h2>Upcoming Events</h2>

      {/* Display a list of upcoming events */}
      <ul>
        {UpcomingEvents.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>

  );
}
export default UpcomingEvents;
