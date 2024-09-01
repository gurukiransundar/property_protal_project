import React from "react";
import "./about.css";
import Social from "../component/Social";

function AboutUs() {
  return (
    <div>
      <div className="container1 relative mx-auto px-4 lg:px-20">
        <div className="div1 absolute inset-0">
          <img
            src="/citynight.jpg"
            alt="Overlay"
            className="bg-cover w-full h-full"
          />
        </div>
        <div className="div2 absolute bottom-0 right-0 lg:right-20 bg-red-500 bg-opacity-50 p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            We Are A Leading Property Company
          </h1>
        </div>
      </div>

      {/* First Section */}
      <hr className="my-2" />
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-1/2 lg:pr-8">
            <h1 className="text-3xl font-semibold">Who We Are</h1>
            <p className="text-lg mt-4">
              Asset Makers embarked on its journey in early 2008 and has been
              evolving ever since. The unwavering support of our esteemed
              clients and partners has fueled our growth.
              <br />
              <br /> We pride ourselves on our core values that serve as guiding
              beacons towards our success.
              <br />
              <br />
              <b>Meet our Founders:</b> <b>Mr. Sunil Vora</b> and{" "}
              <b>Mr. Kanchan Singh Bedi (Aman)</b>
              <br />
              <br />
              <i>(Founders & Managing Directors)</i>
              <br />
              <br />
              Our core values form the bedrock of our operations, guiding us in
              every endeavor. We imbue these values into every project, as they
              are the driving force behind our success.
              <br />
              <br />
              For us, a property is more than just a transaction. It is about
              realizing dreams.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img className="w-full" src="/Paaji-Kannu.png" alt="Founders" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-cream p-4 jus">
            <h2 className="text-xl font-bold mb-4">Driven</h2>
            <p className="text-lg mt-4 ">
              We believe that commitment and dedication are the cornerstones of
              success. Persistence is key to achieving long-term goals, and at
              Asset Makers, we never shy away from challenges. We push
              boundaries, strive for excellence, and never settle for
              mediocrity.
            </p>
          </div>
          <div>
            <img src="driven.png" alt="Card 1" className="w-full h-auto" />
          </div>

          {/* Card 2 */}
          <div>
            <img src="caring.jpg" alt="Card 2" className="w-full h-auto" />
          </div>
          <div className="bg-cream p-4">
            <h2 className="text-xl font-bold mb-4">Caring</h2>
            <p className="text-lg mt-4">
              Empathy is our driving force at Asset Makers. We are dedicated to
              empowering our clients, ensuring their journey towards success is
              as smooth as possible. With years of experience, we share our
              knowledge and insights to help clients achieve their dreams.
              Success for us is not just about transactions; it's about creating
              meaningful connections and making dreams a reality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-cream p-4">
            <h2 className="text-xl font-bold mb-4">Knowledgeable</h2>
            <p className="text-lg mt-4">
              With over a decade of experience, we have accumulated invaluable
              knowledge and expertise in the real estate industry. Despite
              market fluctuations, Asset Makers has consistently remained ahead
              of the curve. Our proactive approach and industry insights enable
              us to navigate challenges and deliver optimal results for our
              clients.
            </p>
          </div>
          <div>
            <img src="knowledge.png" alt="Card 3" className="w-full h-auto" />
          </div>

          {/* Card 4 */}
          <div>
            <img src="brave.jpg" alt="Card 4" className="w-full h-auto" />
          </div>
          <div className="bg-cream p-4">
            <h2 className="text-xl font-bold mb-4">Brave</h2>
            <p className="text-lg mt-4">
              Courage is at the heart of everything we do. At Asset Makers, we
              embrace challenges and turn obstacles into opportunities. We
              understand that pursuing dreams involves risks, but we face them
              head-on. Our determination and resilience have propelled us
              forward, and we empower our clients to do the same.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-cream p-4">
            <h2 className="text-xl font-bold mb-4">Agile</h2>
            <p className="text-lg mt-4">
              Success is not a destination; it's a journey filled with twists
              and turns. At Asset Makers, we thrive in dynamic environments. Our
              agility allows us to adapt to market changes swiftly, ensuring our
              clients always stay ahead of the curve. Whether it's market trends
              or client needs, we embrace change and turn challenges into
              opportunities.
            </p>
          </div>
          <div>
            <img src="agile.png" alt="Card 5" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Social />
    </div>
  );
}

export default AboutUs;
