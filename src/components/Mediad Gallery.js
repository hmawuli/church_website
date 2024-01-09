import React from 'react';

const MediaGallery = () => {
  // Sample data for the media gallery (replace with your actual data)
  const mediaItems = [
    { type: 'photo', url: 'photo1.jpg', caption: 'Church Event 1' },
    { type: 'video', url: 'video1.mp4', caption: 'Sermon Highlights' },
    // Add more media items as needed
  ];

  return (
    <div>
      <section>
        <div className="gallery">
          {mediaItems.map((item, index) => (
            item.type === 'photo' && (
              <div key={index} className="gallery-item">
                <img src={item.url} alt={item.caption} />
                <p>{item.caption}</p>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Video Gallery */}
      <section>
        <h3>Video Gallery</h3>
        <div className="gallery">
          {mediaItems.map((item, index) => (
            item.type === 'video' && (
              <div key={index} className="gallery-item">
                <video controls>
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>{item.caption}</p>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
}

export default MediaGallery;
