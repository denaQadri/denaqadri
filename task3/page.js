import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
   return (
       <div className="landing-page">
           <header>
               
           </header>
           <section className="hero">
               
           </section>
           <section className="newsletter">
               <input type="email" placeholder="Enter your email" />
               <button onClick={() => console.log("Subscribed!")}>Subscribe</button>
           </section>
           
       </div>
   );
};

export default LandingPage;