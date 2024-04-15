import React from 'react';
import Createproject from './components/Createproject';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="flex justify items-start h-full w-full" style={{ fontSize: "30px", marginTop: "3rem", marginLeft: "3rem" }}>
        Lets create some&nbsp;<span className="font-bold">Videos</span>!
      </h1>
      <Createproject />
      <div style={{ marginLeft: '70rem', display: 'flex', alignItems: 'center', marginTop : "3rem"}}> 
        <Link href="/allvideos">
          All Videos
        </Link>
      </div>
      <h2 style={{marginLeft : "3rem" , }}><b>My Recent Videos</b></h2>

      <div style={{ display: 'flex', marginLeft: "3rem", marginTop: "2rem" }}>
        <div style={{ width: "24rem", height: "13.6rem", borderRadius: "5px", marginRight: "1rem" }}>
          <video controls width="100%" height="100%">
            <source src="/WhatsApp.mp4" type="video/mp4" />
          </video>
          <div>
            <h4>ISL 34 Match 2024 : KBFC/MUFC</h4>
            <h6>10 min ago</h6>
          </div>
        </div>

        <div style={{ width: "24rem", height: "13.6rem", borderRadius: "5px", marginRight: "1rem" }}>
          <video controls width="100%" height="100%">
            <source src="/city.mp4" type="video/mp4" />
          </video>
          <div>
            <h4>Rain</h4>
            <h6>12 hours ago</h6>
          </div>
        </div>

        <div style={{ width: "24rem", borderRadius: "5px", marginRight: "1rem" }}>
          <video controls width="100%" height="50%">
            <source src="/Video.mp4" type="video/mp4" />
          </video>
          <div>
            <h4>Nostagia</h4>
            <h6>1 day ago</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
