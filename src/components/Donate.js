// Donate.js
import React from 'react';
import partner from '../Image/partner.jpg';


const Donate = () => {

  return (
    <div>
      <h2>Donate</h2>

      {/* Online Giving Options */}
      <section>
        <h3>Online Giving Options</h3>
        <p>
          Support our church by making a secure online donation. Choose from the
          options below:
        </p>

        {/* Add your online giving components here */}
        {/* Example: */}
        <div>
          <button>Donate Now</button>
          <button>Monthly Giving</button>
          <button>Yearly Giving</button>
          {/* Add more options as needed */}
        </div>
      </section>

      {/* Information about Donations */}
      <section>
        <img src={partner} alt=''></img>
        <p>
          <br />
          Through an anointed ministry spanning over 30 years, Pastor, teacher, healing minister, television host and best-selling author Rev. Dr. Chris Oyakhilome Ph.DD has helped millions experience a victorious and purposeful life in God’s Word.
          He is the author of the bestseller Rhapsody of Realities, the number one daily devotional around the world. Several millions of copies of the best-selling daily devotional and Bible-study guide have been distributed in over 1004 languages of the world including Afrikaans, Arabic, Cantonese, Croatian, Dutch, English, Finnish, French, German, Hindi, Icelandic, Italian, Mandarin, Myanmar, Portuguese, Russian, Spanish, Swahili…and still counting! New languages are added regularly, making the devotional accessible to many more in different parts of the globe, thus bringing the richness of God’s Word into their lives.
          Little wonder the devotional, oftentimes, is referred to as the “Messenger Angel”. Presiding over an ever-widening network of Christ Embassy Churches and campus fellowships on all seven continents, Pastor Chris also pastors one of the largest congregations in Africa. He holds massive teaching and healing crusades like the Higher Life Conference and Night of Bliss with crowds of over 3.5 million in a single night’s event.<br/> <br/>



          The world renowned Healing School is a ministry of Pastor Chris which manifests the healing works of Jesus Christ today, and has helped many receive healings and miracles through the gifts of the Spirit in operation.<br/><br/>


          Pastor Chris in the year 2003, pioneered the first 24-hour Christian Network from Africa to the rest of the world, and this gave rise to more satellite stations in other continents of the world, the LoveWorld USA in America, LoveWorld TV in the UK, LoveWorld SAT in South-Africa and LoveWorld Plus in Nigeria and still counting.
          Through this medium, millions of people have been reached with the beautiful message of salvation and many lives have been transformed. These stations are also available on the mobile platform.<br/><br/>



          Pastor Chris is also the host of “Atmosphere for Miracles”, a programme airing on major television networks in the United States of America, the United Kingdom, Asia, Europe and around the world, which brings God’s divine presence right into the homes of millions around the world.
          With a burning desire to bring God’s Word to all men in simplicity and with the power of the Spirit. The man of God, Rev. Dr. Chris Oyakhilome Ph.DD, established the International School of Ministry, specifically to train and equip ministers of the gospel of Christ, building in them the Realities of God’s Word and empowering them to carry the message of eternal life in Christ Jesus to their world, with great demonstration of the miraculous power of God.<br/><br/>



          Pastor Chris also pioneered the establishment of the Inner City Mission of Christ Embassy, a ministry to children living in the inner cities of our world, to give them a hope and a future
        </p>

        {/* Add more information about donation allocation */}
      </section>
    </div>


  );
}
export default Donate;
