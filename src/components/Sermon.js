import React from 'react';

const Sermons = () => {
  // Mock data for recent sermons
  const recentSermons = [
    { id: 1, title: 'Understanding Faith', speaker: 'Pastor John Doe', date: '2023-01-15' },
    { id: 2, title: 'Hope in Adversity', speaker: 'Pastor Jane Smith', date: '2023-01-22' },
    // Add more sermon entries as needed
  ];

  // Function to render a list of recent sermons
  const renderRecentSermons = () => (
    <ul>
      {recentSermons.map((sermon) => (
        <li key={sermon.id}>
          <strong>{sermon.title}</strong> - {sermon.speaker} ({sermon.date})
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {/* Recent Sermons */}
      <section>
        <h3>Recent Sermons</h3>
        {renderRecentSermons()}
      </section>

      {/* Categorization by Series, Topics, or Speakers */}
      <section>
        <h3>Sermon Categories</h3>
        {/* Add your categorization components here */}
        <p>
          Explore sermons based on series, topics, or speakers to find the content that resonates with you.
        </p>
      </section>

      {/* Option to Listen or Watch Online */}
      <section>
        <h3>Listen or Watch Online</h3>
        <p>
          Tune in to our sermons online and deepen your understanding of faith and spirituality.
          {/* You can add media player components or links to online platforms here */}
          <div>
            <a href="https://youtu.be/koBSILq6URU?si=iC_91c_7PfuA99rW" target="_blank" rel="noopener noreferrer">

              <img src="youtube-icon.png" alt="Youtube" />
            </a>
          </div>
        </p>
      </section>
    </div>
  );
}

export default Sermons;
