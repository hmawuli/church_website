import React from 'react';
const UpcomingSermons = () => {
  const UpcomingSermons = [
    {
      id: 1,
      title: 'Understanding Grace',
      preacher: 'Pastor John Doe',
      date: '2023-12-05',
      time: '7:00 PM',
    },
    {
      id: 2,
      title: 'Living with Purpose',
      preacher: 'Rev. Jane Smith',
      date: '2023-12-12',
      time: '6:30 PM',
    },
    // Add more upcoming sermons as needed
  ];
  
  return (
    // Dummy data for upcoming sermons

    <div>
      <h2>Upcoming Sermons</h2>

      {/* Display a list of upcoming sermons */}
      <ul>
        {UpcomingSermons.map(sermon => (
          <li key={sermon.id}>
            <h3>{sermon.title}</h3>
            <p>Preacher: {sermon.preacher}</p>
            <p>Date: {sermon.date}</p>
            <p>Time: {sermon.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UpcomingSermons;

